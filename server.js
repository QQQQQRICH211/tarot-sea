// 塔罗网页版 — 本地代理 DeepSeek API
// 启动：node server.js  →  http://localhost:3456

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3456;
const API_KEY = process.env.TAROT_API_KEY || 'sk-a6caef761feb441c9622f1c39f07d1b5';

const MIME = {
  '.html': 'text/html;charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png'
};

const server = http.createServer((req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }

  // API 代理
  if (req.method === 'POST' && req.url === '/api/reading') {
    let body = '';
    req.on('data', c => body += c);
    req.on('end', () => {
      const { question, cardName, cardMeaning, reversed } = JSON.parse(body);
      const position = reversed ? '逆位' : '正位';

      const messages = [
        { role: 'system', content: `你是一位经验丰富的塔罗占卜师，风格温暖、有洞察力、带一点神秘感。
用户带着心事抽到了一张牌。结合牌义和用户的问题给出解读。
要求：先简短解释这张牌在${position}时的含义，再结合用户问题给针对性解读。语气温柔有力量。200字以内。最后给一句建议。` },
        { role: 'user', content: `我抽到的牌：${cardName}（${position}）
牌的含义：${cardMeaning}
我的问题：${question || '最近让我困惑的事'}
请帮我解读。` }
      ];

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
          res.writeHead(200, { 'Content-Type': 'application/json' });
          try {
            const json = JSON.parse(data);
            const reading = json.choices[0].message.content.trim();
            res.end(JSON.stringify({ reading }));
          } catch (e) {
            res.end(JSON.stringify({ error: 'API error' }));
          }
        });
      });
      proxyReq.on('error', () => { res.writeHead(502); res.end(JSON.stringify({ error: 'proxy error' })); });
      proxyReq.write(JSON.stringify({ model: 'deepseek-chat', messages, max_tokens: 500, temperature: 0.8 }));
      proxyReq.end();
    });
    return;
  }

  // 静态文件
  const filePath = req.url === '/' ? '/index.html' : req.url;
  const fullPath = path.join(__dirname, filePath);
  const ext = path.extname(fullPath);
  const contentType = MIME[ext] || 'text/plain';

  fs.readFile(fullPath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not Found'); return; }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`🔮 塔罗的海 网页版 → http://localhost:${PORT}`);
  console.log(`   按 Ctrl+C 停止`);
});
