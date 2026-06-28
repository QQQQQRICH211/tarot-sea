// Vercel Serverless Function — 代理 DeepSeek API
const https = require('https');

const API_KEY = process.env.TAROT_API_KEY || 'sk-a6caef761feb441c9622f1c39f07d1b5';

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'POST') { res.status(404).end('Not Found'); return; }

  const { question, cardName, cardMeaning, reversed } = req.body;
  const position = reversed ? '逆位' : '正位';

  const messages = [
    { role: 'system', content: `你是一位经验丰富的塔罗占卜师，风格温暖、有洞察力。结合牌义和用户的问题给出解读。先简短解释这张牌在${position}时的含义，再结合用户问题给针对性解读。语气温柔有力量。200字以内。最后给一句建议。` },
    { role: 'user', content: `我抽到的牌：${cardName}（${position}）\n牌的含义：${cardMeaning}\n我的问题：${question || '最近让我困惑的事'}\n请帮我解读。` }
  ];

  try {
    const result = await new Promise((resolve, reject) => {
      const proxyReq = https.request({
        hostname: 'api.deepseek.com',
        path: '/v1/chat/completions',
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${API_KEY}` },
        timeout: 30000
      }, proxyRes => {
        let data = '';
        proxyRes.on('data', c => data += c);
        proxyRes.on('end', () => {
          try {
            const json = JSON.parse(data);
            resolve(json.choices[0].message.content.trim());
          } catch (e) { reject(new Error('parse error')); }
        });
      });
      proxyReq.on('error', reject);
      proxyReq.write(JSON.stringify({ model: 'deepseek-chat', messages, max_tokens: 500, temperature: 0.8 }));
      proxyReq.end();
    });

    res.status(200).json({ reading: result });
  } catch (err) {
    res.status(502).json({ error: err.message });
  }
};
