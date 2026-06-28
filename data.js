// tarot-data.js — 78张塔罗牌完整数据库
// 每日一词、正逆位释义、关键词

var majorArcana = [
  {
    id: 0, name_zh: '愚人', name_en: 'The Fool',
    arcana: 'major', number: '0',
    element: '风', planet: '天王星',
    keywords_zh: ['开始', '冒险', '天真', '自由', '信任'],
    keywords_en: ['beginnings', 'adventure', 'innocence', 'freedom', 'trust'],
    upright: '新的开始，放手一搏的勇气。保持开放心态，不被恐惧束缚。提醒你相信生命的过程，即使前路未知。',
    upright_en: 'A new beginning. Take a leap of faith. Stay open and trust the journey ahead, even when the path is unclear.',
    reversed: '冲动草率，缺乏规划，逃避责任。提醒你停下反思，不要为冒险而冒险。',
    reversed_en: 'Recklessness, poor planning, avoiding responsibility. Pause and reconsider before acting.',
    daily_zh: '今天是冒险家的一天！放下顾虑，去尝试那件你想了很久但一直没做的事。宇宙在推你一把——跳吧。',
    daily_en: 'A day for adventure! Let go of your worries and try that thing you have been thinking about. The universe is giving you a nudge — take the leap.',
    emoji: '🌟'
  },
  {
    id: 1, name_zh: '魔术师', name_en: 'The Magician',
    arcana: 'major', number: 'I',
    element: '风', planet: '水星',
    keywords_zh: ['能力', '资源', '创造', '专注', '显化'],
    keywords_en: ['power', 'resources', 'creation', 'focus', 'manifestation'],
    upright: '你拥有实现所需的一切资源。专注目标，行动即可。暗示创造力与技能正在巅峰，这是显化的时刻。',
    upright_en: 'You have all the tools you need. Focus and act. Your skills and creativity are at their peak — time to manifest.',
    reversed: '能力被滥用或未被发挥，缺乏专注，欺骗。检查自己是否在逃避真正重要的事。',
    reversed_en: 'Misused talent, lack of focus, deception. Check if you are avoiding what truly matters.',
    daily_zh: '今天你就是魔术师！你手上的资源和能力足够了。专注一个目标，把它变成现实——你不是在等待奇迹，你就是奇迹本身。',
    daily_en: 'Today you are the Magician! You already have what you need. Focus on one goal and make it real.',
    emoji: '🎩'
  },
  {
    id: 2, name_zh: '女祭司', name_en: 'The High Priestess',
    arcana: 'major', number: 'II',
    element: '水', planet: '月亮',
    keywords_zh: ['直觉', '潜意识', '神秘', '内省', '智慧'],
    keywords_en: ['intuition', 'subconscious', 'mystery', 'introspection', 'wisdom'],
    upright: '倾听内在声音，答案在你心里。适合冥想和深度思考。外在信息不如内在直觉可靠。',
    upright_en: 'Listen to your inner voice — the answers are within. A good time for meditation and deep reflection.',
    reversed: '忽视直觉，信息被隐瞒，孤立。可能有人在对你隐瞒真相，或你在逃避内心的声音。',
    reversed_en: 'Ignoring intuition, hidden information, isolation. Someone may be hiding the truth.',
    daily_zh: '今天少说多听，尤其是倾听自己内心的声音。有什么困扰你的问题，答案不在外面，在你的直觉里。安静下来，它会告诉你。',
    daily_en: 'Listen more today, especially to your inner voice. The answer you seek is not outside — it is within.',
    emoji: '🌙'
  },
  {
    id: 3, name_zh: '皇后', name_en: 'The Empress',
    arcana: 'major', number: 'III',
    element: '土', planet: '金星',
    keywords_zh: ['丰盛', '滋养', '创造', '自然', '母性'],
    keywords_en: ['abundance', 'nurture', 'creation', 'nature', 'motherhood'],
    upright: '丰盛与滋养正在到来。适合关注身体、享受生活、表达创造力。让自己被美好事物包围。',
    upright_en: 'Abundance is flowing. Nurture yourself and others. Surround yourself with beauty and creativity.',
    reversed: '忽视自我照顾，创造力枯竭，过度依赖。提醒你先爱自己才能爱他人。',
    reversed_en: 'Self-neglect, creative block, over-dependence. Remember to care for yourself first.',
    daily_zh: '今天做自己的皇后！好好吃一顿、去大自然走走、做点让你开心的事。你值得被丰盛包围，不需要理由。',
    daily_en: 'Treat yourself like royalty today. Good food, nature, something that brings you joy. You deserve abundance.',
    emoji: '👑'
  },
  {
    id: 4, name_zh: '皇帝', name_en: 'The Emperor',
    arcana: 'major', number: 'IV',
    element: '火', planet: '白羊座',
    keywords_zh: ['权威', '秩序', '纪律', '掌控', '稳定'],
    keywords_en: ['authority', 'order', 'discipline', 'control', 'stability'],
    upright: '建立秩序与规则的时候到了。需要果断决策，用成熟的态度处理事务。',
    upright_en: 'Time to establish order and discipline. Make firm decisions with a mature attitude.',
    reversed: '滥用权威，过于僵化，缺乏弹性。也可能意味着缺乏自律或逃避责任。',
    reversed_en: 'Abuse of power, rigidity, or lack of self-discipline. Either too controlling or avoiding responsibility.',
    daily_zh: '今天是建立秩序的好日子。把那些混乱的事情理一理，制定一个清晰的计划。你是自己人生的CEO，拿出领导力来。',
    daily_en: 'A day to bring order to chaos. Organize your affairs, make a clear plan. Be the CEO of your own life.',
    emoji: '🏛️'
  },
  {
    id: 5, name_zh: '教皇', name_en: 'The Hierophant',
    arcana: 'major', number: 'V',
    element: '土', planet: '金牛座',
    keywords_zh: ['传统', '教导', '信仰', '仪式', '指引'],
    keywords_en: ['tradition', 'teaching', 'faith', 'ritual', 'guidance'],
    upright: '寻求导师或传统智慧。适合系统学习，遵循已验证的方法。精神成长需要方向。',
    upright_en: 'Seek a mentor or traditional wisdom. Good for systematic learning. Spiritual growth needs guidance.',
    reversed: '质疑传统，打破教条，或过度依赖外在权威。提醒你独立思考。',
    reversed_en: 'Questioning tradition, breaking dogma. Or relying too much on external authority. Think independently.',
    daily_zh: '今天最适合学习！找一位老师、读一本经典、或者按部就班地执行一个已有的计划。传统智慧里有你需要的钥匙。',
    daily_en: 'A great day for learning! Find a teacher, read a classic, or follow a proven method. Ancient wisdom holds your key.',
    emoji: '📜'
  },
  {
    id: 6, name_zh: '恋人', name_en: 'The Lovers',
    arcana: 'major', number: 'VI',
    element: '风', planet: '双子座',
    keywords_zh: ['选择', '关系', '和谐', '价值观', '爱'],
    keywords_en: ['choice', 'relationship', 'harmony', 'values', 'love'],
    upright: '面临重要选择，需要遵从内心价值观。爱情或合作关系中的重要时刻。选择爱而非恐惧。',
    upright_en: 'An important choice awaits. Follow your values. A key moment in love or partnership. Choose love over fear.',
    reversed: '选择困难，价值观冲突，关系不和谐。可能在做违背内心的决定。',
    reversed_en: 'Choice paralysis, value conflict, relationship discord. You may be making decisions against your heart.',
    daily_zh: '今天你可能要做一个选择。无论是大事还是小事，问问自己：这个选择是出于爱还是恐惧？选爱的那个方向就对了。',
    daily_en: 'You may face a choice today. Ask yourself: is this decision based on love or fear? Choose the path of love.',
    emoji: '💕'
  },
  {
    id: 7, name_zh: '战车', name_en: 'The Chariot',
    arcana: 'major', number: 'VII',
    element: '水', planet: '巨蟹座',
    keywords_zh: ['胜利', '意志力', '掌控', '前进', '决心'],
    keywords_en: ['victory', 'willpower', 'control', 'forward', 'determination'],
    upright: '意志力战胜一切障碍。保持专注，握紧缰绳。成功在望，但需要持久的自律。',
    upright_en: 'Willpower conquers all. Stay focused and hold the reins. Victory is near but requires sustained discipline.',
    reversed: '失控，方向混乱，过于激进。你的驱动力可能在伤害自己或他人。慢下来。',
    reversed_en: 'Loss of control, chaotic direction, aggression. Your drive may harm yourself or others. Slow down.',
    daily_zh: '今天你是驾驭战车的勇士！不管前面有什么障碍，你的意志力都能碾过去。保持专注，别让情绪分散你的注意力——你就是自己的战车手。',
    daily_en: 'You are the charioteer today! Whatever obstacles lie ahead, your willpower will overcome them. Stay focused and drive forward.',
    emoji: '⚔️'
  },
  {
    id: 8, name_zh: '力量', name_en: 'Strength',
    arcana: 'major', number: 'VIII',
    element: '火', planet: '狮子座',
    keywords_zh: ['勇气', '耐心', '温柔', '内在力量', '驯服'],
    keywords_en: ['courage', 'patience', 'gentleness', 'inner strength', 'taming'],
    upright: '真正的力量是温柔的掌控。用耐心和爱驯服内心的猛兽。你比你想象中更强大。',
    upright_en: 'True strength is gentle control. Tame your inner beast with patience and love. You are stronger than you know.',
    reversed: '内在力量不足，自我怀疑，失控。或被情绪支配，忘掉了温柔的力量。',
    reversed_en: 'Lack of inner strength, self-doubt, loss of control. You may have forgotten the power of gentleness.',
    daily_zh: '今天的力量不在拳头里，在你的耐心和温柔中。遇到挑战时，笑一下，深呼吸，你不需要吼叫也能赢。',
    daily_en: 'Your strength today is not in your fists but in your patience and gentleness. Smile, breathe — you do not need to roar to win.',
    emoji: '🦁'
  },
  {
    id: 9, name_zh: '隐士', name_en: 'The Hermit',
    arcana: 'major', number: 'IX',
    element: '土', planet: '处女座',
    keywords_zh: ['内省', '孤独', '智慧', '指引', '沉思'],
    keywords_en: ['introspection', 'solitude', 'wisdom', 'guidance', 'contemplation'],
    upright: '需要独处和内省。暂时远离喧嚣，寻找内心之光。答案需要在安静中发现。',
    upright_en: 'Time for solitude and introspection. Step away from the noise and seek your inner light.',
    reversed: '过度孤立，逃避社交，或抗拒自省。提醒你在独处和连接之间找到平衡。',
    reversed_en: 'Excessive isolation, avoiding connection, or resisting self-reflection. Find balance.',
    daily_zh: '今天给自己留一段独处的时间。哪怕只有15分钟，关掉手机，点根蜡烛，问问自己：我真正需要的是什么？',
    daily_en: 'Give yourself some alone time today. Even 15 minutes. Turn off your phone and ask: what do I truly need?',
    emoji: '🏮'
  },
  {
    id: 10, name_zh: '命运之轮', name_en: 'Wheel of Fortune',
    arcana: 'major', number: 'X',
    element: '火', planet: '木星',
    keywords_zh: ['命运', '转折', '周期', '机遇', '变化'],
    keywords_en: ['destiny', 'turning point', 'cycle', 'opportunity', 'change'],
    upright: '命运之轮正在转动。幸运和机遇将至，顺应变化，拥抱新的周期。',
    upright_en: 'The wheel is turning. Luck and opportunity are coming. Embrace the new cycle.',
    reversed: '运气不佳，抗拒变化，陷入恶性循环。提醒你检查是否在抗拒必然的改变。',
    reversed_en: 'Bad luck, resisting change, stuck in a cycle. Check if you are fighting necessary change.',
    daily_zh: '今天准备好接受意外之喜！事情可能突然转向，但未必是坏事。顺应变化，别抗拒——命运之轮转到你这边了。',
    daily_en: 'Stay open to surprises today! Things may turn suddenly, but it could be for the better. Go with the flow.',
    emoji: '🎡'
  },
  {
    id: 11, name_zh: '正义', name_en: 'Justice',
    arcana: 'major', number: 'XI',
    element: '风', planet: '天秤座',
    keywords_zh: ['公平', '真相', '因果', '责任', '平衡'],
    keywords_en: ['fairness', 'truth', 'cause and effect', 'responsibility', 'balance'],
    upright: '公平的结果正在到来。诚实地面对自己和他人。做出合乎道德的选择。',
    upright_en: 'A fair outcome is coming. Be honest with yourself and others. Make ethical choices.',
    reversed: '不公正，逃避责任，自欺欺人。因果报应可能正在酝酿，诚实为上。',
    reversed_en: 'Injustice, avoiding accountability, self-deception. Honesty is the only way forward.',
    daily_zh: '今天适合处理需要公正判断的事情。如果你在等一个结果，放心，宇宙的秤是公平的。同时提醒自己做事凭良心。',
    daily_en: 'A day for fair judgment. If you are waiting for an outcome, trust that the scales will balance. Act with integrity.',
    emoji: '⚖️'
  },
  {
    id: 12, name_zh: '倒吊人', name_en: 'The Hanged Man',
    arcana: 'major', number: 'XII',
    element: '水', planet: '海王星',
    keywords_zh: ['牺牲', '放手', '换个角度', '等待', '臣服'],
    keywords_en: ['sacrifice', 'surrender', 'perspective', 'waiting', 'acceptance'],
    upright: '换一个角度看世界。暂停行动，让事情自然发展。有时候放手才是真正的掌控。',
    upright_en: 'See things from a different angle. Pause and let things unfold. Sometimes letting go is the real control.',
    reversed: '拒绝放手，无谓的牺牲，拖延。你卡住了，因为你抗拒需要做出的妥协。',
    reversed_en: 'Refusing to let go, pointless sacrifice, stalling. You are stuck because you resist needed compromise.',
    daily_zh: '今天不要急着行动。停下来，换个角度看问题——也许你的困扰只是因为站的位置不对。倒吊人教你：有时候退一步，反而前进得更快。',
    daily_en: 'Do not rush today. Pause and see things from a different angle. Stepping back sometimes moves you forward faster.',
    emoji: '🙃'
  },
  {
    id: 13, name_zh: '死神', name_en: 'Death',
    arcana: 'major', number: 'XIII',
    element: '水', planet: '天蝎座',
    keywords_zh: ['结束', '转变', '重生', '放手', '蜕变'],
    keywords_en: ['ending', 'transformation', 'rebirth', 'letting go', 'metamorphosis'],
    upright: '一个阶段的彻底结束，为新开始腾出空间。不要害怕告别——这不是终结，是蜕变。',
    upright_en: 'A phase is ending completely, making room for the new. Do not fear farewell — this is transformation, not termination.',
    reversed: '抗拒改变，恐惧告别，停滞不前。你抓得太紧了，该放手的必须放手。',
    reversed_en: 'Resisting change, fearing endings, stagnation. You are holding on too tight — it is time to let go.',
    daily_zh: '今天可能有什么东西该放下了——一个旧习惯、一段不再适合的关系、或一个过时的想法。死神不是来带走你，是来帮你做"断舍离"的。',
    daily_en: 'Something may need to be released today. An old habit, a relationship, an outdated belief. Death is not here to take you — it is here to help you let go.',
    emoji: '🦋'
  },
  {
    id: 14, name_zh: '节制', name_en: 'Temperance',
    arcana: 'major', number: 'XIV',
    element: '火', planet: '射手座',
    keywords_zh: ['平衡', '调和', '耐心', '中庸', '融合'],
    keywords_en: ['balance', 'harmony', 'patience', 'moderation', 'integration'],
    upright: '寻找平衡与中庸之道。不急不躁，像流水一样适应。融合不同面向的自己。',
    upright_en: 'Find balance and the middle path. Be patient and adaptable like water. Integrate different sides of yourself.',
    reversed: '失衡，过度，缺乏耐心。生活中某方面失去了节制，需要重新校准。',
    reversed_en: 'Imbalance, excess, impatience. Something in life has lost moderation — recalibrate.',
    daily_zh: '今天的关键词是"刚刚好"。别走极端，找到中间那条路。你的牌灵在提醒你：学习塔罗不需要急于求成，像流水一样慢慢来就好。',
    daily_en: 'Your keyword today is "just right." Find the middle path. Your deck spirit reminds you: learning tarot is a gentle flow, not a race.',
    emoji: '🌊'
  },
  {
    id: 15, name_zh: '恶魔', name_en: 'The Devil',
    arcana: 'major', number: 'XV',
    element: '土', planet: '摩羯座',
    keywords_zh: ['束缚', '欲望', '依赖', '阴影', '物质主义'],
    keywords_en: ['bondage', 'desire', 'dependency', 'shadow', 'materialism'],
    upright: '审视什么在束缚你——可能是成瘾、不健康的关系或执念。你不是被困住的，钥匙在你手里。',
    upright_en: 'Examine what binds you — addiction, unhealthy relationships, obsessions. You are not trapped — the key is in your hand.',
    reversed: '挣脱束缚，觉醒，戒断。正在从阴影中走出来，重获自由。',
    reversed_en: 'Breaking free, awakening, recovery. Emerging from the shadows and reclaiming freedom.',
    daily_zh: '今天诚实地问自己：有什么东西在控制我，而不是我在控制它？手机？某种习惯？一段关系？意识到束缚就是解脱的第一步。',
    daily_en: 'Honestly ask today: what controls me instead of me controlling it? Your phone? A habit? A relationship? Awareness is the first step to freedom.',
    emoji: '⛓️'
  },
  {
    id: 16, name_zh: '高塔', name_en: 'The Tower',
    arcana: 'major', number: 'XVI',
    element: '火', planet: '火星',
    keywords_zh: ['突变', '崩塌', '觉醒', '真相', '重建'],
    keywords_en: ['sudden change', 'collapse', 'awakening', 'truth', 'rebuilding'],
    upright: '突然的崩塌——但塌的是本就不稳的东西。真相可能会冲击你，但之后才能重建更好的。',
    upright_en: 'Sudden collapse — but only of what was already unstable. Truth may shock you, but only then can you rebuild better.',
    reversed: '逃避崩塌，拒绝真相，拖延不可避免的改变。越抗拒，碎得越惨。',
    reversed_en: 'Avoiding collapse, denying truth, delaying the inevitable. The more you resist, the harder it falls.',
    daily_zh: '今天如果有计划被打乱，别慌。高塔拆掉的都是豆腐渣工程。被打破的只是幻象，留下来的是真相。接受它，然后重建。',
    daily_en: 'If plans fall apart today, do not panic. The Tower only destroys what was built on shaky ground. What breaks is illusion — what remains is truth.',
    emoji: '⚡'
  },
  {
    id: 17, name_zh: '星星', name_en: 'The Star',
    arcana: 'major', number: 'XVII',
    element: '风', planet: '水瓶座',
    keywords_zh: ['希望', '疗愈', '灵感', '宁静', '信念'],
    keywords_en: ['hope', 'healing', 'inspiration', 'serenity', 'faith'],
    upright: '暴风雨后的宁静与希望。相信自己，相信宇宙。疗愈正在发生。',
    upright_en: 'Serenity and hope after the storm. Trust yourself and the universe. Healing is happening.',
    reversed: '失去希望，怀疑未来，缺少灵感。短暂的阴云遮住了星光，但不是永久的。',
    reversed_en: 'Losing hope, doubting the future, lack of inspiration. Clouds are blocking the stars — but not forever.',
    daily_zh: '今天是充满希望的一天。不管之前经历了什么，星星在告诉你：一切都会好起来的。允许自己做做白日梦，灵感会从中诞生。',
    daily_en: 'A day full of hope. Whatever you have been through, the Star says: it will be okay. Allow yourself to dream — inspiration is born there.',
    emoji: '⭐'
  },
  {
    id: 18, name_zh: '月亮', name_en: 'The Moon',
    arcana: 'major', number: 'XVIII',
    element: '水', planet: '双鱼座',
    keywords_zh: ['幻觉', '恐惧', '潜意识', '不确定性', '直觉'],
    keywords_en: ['illusion', 'fear', 'subconscious', 'uncertainty', 'intuition'],
    upright: '前方道路模糊不清。恐惧可能被放大，但只是月光下的影子。相信你的直觉穿越迷雾。',
    upright_en: 'The path ahead is unclear. Fears may be magnified, but they are just shadows in moonlight. Trust your intuition.',
    reversed: '恐惧消散，真相浮现，从迷惘中走出。但也可能仍在逃避潜意识的信号。',
    reversed_en: 'Fear dissipating, truth emerging. But you may still be ignoring subconscious signals.',
    daily_zh: '今天如果感到莫名不安，别怕——那是月亮在放大你的影子。恐惧像夜雾，太阳一出就散了。今晚睡前可以写写梦日记。',
    daily_en: 'If you feel uneasy today, do not worry — the Moon magnifies shadows. Fear is like night fog; it dissolves in the morning light.',
    emoji: '🌕'
  },
  {
    id: 19, name_zh: '太阳', name_en: 'The Sun',
    arcana: 'major', number: 'XIX',
    element: '火', planet: '太阳',
    keywords_zh: ['快乐', '成功', '活力', '清晰', '温暖'],
    keywords_en: ['joy', 'success', 'vitality', 'clarity', 'warmth'],
    upright: '这是塔罗中最积极的牌之一。快乐、成功和清晰都在照耀你。享受今天，分享温暖。',
    upright_en: 'One of the most positive cards in tarot. Joy, success, and clarity shine upon you. Enjoy and share the warmth.',
    reversed: '快乐被遮蔽，自信不足，暂时看不到光明。但太阳还在云后面。',
    reversed_en: 'Joy dimmed, confidence low, temporarily unable to see the light. But the sun is still behind the clouds.',
    daily_zh: '今天是拥抱阳光的一天！不管做什么都觉得顺利。出去晒晒太阳，把这个好心情分享给周围的人。你笑起来真好看。',
    daily_en: 'A day to embrace the sunshine! Everything feels smooth. Go outside, soak up the sun, and share your good vibes.',
    emoji: '☀️'
  },
  {
    id: 20, name_zh: '审判', name_en: 'Judgement',
    arcana: 'major', number: 'XX',
    element: '火', planet: '冥王星',
    keywords_zh: ['觉醒', '召唤', '清算', '重生', '坦诚'],
    keywords_en: ['awakening', 'calling', 'reckoning', 'rebirth', 'honesty'],
    upright: '一个重要的觉知时刻。被召唤进入新的阶段，与过去和解，回应内心的呼唤。',
    upright_en: 'A moment of profound awakening. Called to a new phase — make peace with the past and answer your inner calling.',
    reversed: '逃避召唤，拒绝反思，自我批判过重。无视内心声音的后果正在显现。',
    reversed_en: 'Avoiding the call, refusing self-reflection, excessive self-criticism. Consequences of ignoring your inner voice.',
    daily_zh: '今天适合做一次"人生复盘"。回顾最近的状态，有没有需要和解的人或事？有没有一直在回避的决定？听听内心的召唤。',
    daily_en: 'A day for a life review. Any people or situations to make peace with? Any decisions you have been avoiding? Listen to your inner calling.',
    emoji: '📯'
  },
  {
    id: 21, name_zh: '世界', name_en: 'The World',
    arcana: 'major', number: 'XXI',
    element: '土', planet: '土星',
    keywords_zh: ['完成', '圆满', '成就', '整合', '旅程'],
    keywords_en: ['completion', 'wholeness', 'achievement', 'integration', 'journey'],
    upright: '一个周期完美完成。庆祝你的成就，你已走过了很长的路。准备好进入下一个阶段。',
    upright_en: 'A cycle completes beautifully. Celebrate your achievement — you have come a long way. Ready for the next chapter.',
    reversed: '接近完成但未了结，拖延收尾，不完整的满足。还差最后一步。',
    reversed_en: 'Almost there but not finished, delaying closure, incomplete satisfaction. One last step remains.',
    daily_zh: '今天适合庆祝！不论大小，看看你完成了什么、走过了多远。世界牌提醒你：你很完整，你很圆满，你已经准备好了。',
    daily_en: 'A day to celebrate! Look at what you have accomplished and how far you have come. You are whole, complete, and ready.',
    emoji: '🌍'
  }
];

// 小阿卡纳 — 56张
var suits = [
  { name_zh: '权杖', name_en: 'Wands', element_zh: '火', element_en: 'Fire', emoji: '🪄' },
  { name_zh: '圣杯', name_en: 'Cups', element_zh: '水', element_en: 'Water', emoji: '🏆' },
  { name_zh: '宝剑', name_en: 'Swords', element_zh: '风', element_en: 'Air', emoji: '⚔️' },
  { name_zh: '星币', name_en: 'Pentacles', element_zh: '土', element_en: 'Earth', emoji: '🪙' }
];

var ranks = [
  { rank_zh: '王牌', rank_en: 'Ace', num: 1 },
  { rank_zh: '二', rank_en: 'Two', num: 2 },
  { rank_zh: '三', rank_en: 'Three', num: 3 },
  { rank_zh: '四', rank_en: 'Four', num: 4 },
  { rank_zh: '五', rank_en: 'Five', num: 5 },
  { rank_zh: '六', rank_en: 'Six', num: 6 },
  { rank_zh: '七', rank_en: 'Seven', num: 7 },
  { rank_zh: '八', rank_en: 'Eight', num: 8 },
  { rank_zh: '九', rank_en: 'Nine', num: 9 },
  { rank_zh: '十', rank_en: 'Ten', num: 10 },
  { rank_zh: '侍从', rank_en: 'Page', num: 11 },
  { rank_zh: '骑士', rank_en: 'Knight', num: 12 },
  { rank_zh: '皇后', rank_en: 'Queen', num: 13 },
  { rank_zh: '国王', rank_en: 'King', num: 14 }
];

// 小阿卡纳释义模板
var minorMeanings = {
  // 权杖 (Wands) — 火 — 行动、事业、创造
  Wands: {
    Ace:   { up: '新行动、新创意的种子。抓住灵感的火花，勇敢开始。', rev: '方向错误，延误，缺乏动力。', k_zh: ['灵感','开始','潜力'], k_en: ['inspiration','beginning','potential'] },
    Two:   { up: '规划未来，做长远打算。审视大局后再行动。', rev: '恐惧未知，计划不切实际。', k_zh: ['规划','远见','选择'], k_en: ['planning','foresight','choice'] },
    Three: { up: '远航探索，扩展视野。你的计划正在推进中。', rev: '挫折，计划受阻，准备不足。', k_zh: ['探索','扩展','远见'], k_en: ['exploration','expansion','vision'] },
    Four:  { up: '庆祝阶段性成果，享受稳定的快乐时光。', rev: '不安于现状，失去稳定感。', k_zh: ['庆祝','稳定','收获'], k_en: ['celebration','stability','harvest'] },
    Five:  { up: '竞争、观点碰撞。健康的冲突带来成长。', rev: '避免冲突，内耗，恶性竞争。', k_zh: ['竞争','冲突','挑战'], k_en: ['competition','conflict','challenge'] },
    Six:   { up: '胜利与认可。你的努力正在被看见。', rev: '骄傲自满，不被认可的胜利。', k_zh: ['胜利','认可','荣耀'], k_en: ['victory','recognition','glory'] },
    Seven: { up: '坚持自我立场，抵抗压力。你有权利说"不"。', rev: '被压倒，放弃立场，自我怀疑。', k_zh: ['坚持','防御','勇气'], k_en: ['persistence','defense','courage'] },
    Eight: { up: '事情进展迅速。消息、行动都在加速。', rev: '仓促出错，交通延误，误解。', k_zh: ['快速','行动','消息'], k_en: ['speed','action','news'] },
    Nine:  { up: '坚韧。你已经走了很远，再坚持一下。', rev: '疲惫，想放弃，过度防御。', k_zh: ['坚韧','耐力','守护'], k_en: ['resilience','endurance','guard'] },
    Ten:   { up: '负担过重。学会分派，别一个人抗所有。', rev: '放下重担，学会拒绝过度责任。', k_zh: ['负担','责任','压力'], k_en: ['burden','responsibility','pressure'] },
    Page:  { up: '探索新兴趣，保持好奇心。一个好消息即将到来。', rev: '方向感差，懒惰，坏消息。', k_zh: ['探索','好奇心','消息'], k_en: ['exploration','curiosity','news'] },
    Knight:{ up: '热情冲动，追逐目标。充满能量但需注意方向。', rev: '冲动鲁莽，半途而废。', k_zh: ['热情','冒险','行动'], k_en: ['passion','adventure','action'] },
    Queen: { up: '自信温暖，有领导魅力的女性形象。', rev: '控制欲强，嫉妒，自我中心。', k_zh: ['自信','魅力','领导'], k_en: ['confidence','charisma','leadership'] },
    King:  { up: '远见卓识的领导者，善于激励他人。', rev: '专横，期望过高，缺乏共情。', k_zh: ['领导','远见','激励'], k_en: ['leadership','vision','inspiration'] }
  },
  // 圣杯 (Cups) — 水 — 情感、关系、直觉
  Cups: {
    Ace:   { up: '新的感情、灵感或直觉。心门正在打开。', rev: '情感封闭，压抑感受。', k_zh: ['爱','直觉','新感情'], k_en: ['love','intuition','new feelings'] },
    Two:   { up: '深度的连接与伙伴关系。互相理解和尊重。', rev: '关系失衡，分离，信任破裂。', k_zh: ['连接','伙伴','平等'], k_en: ['connection','partnership','equality'] },
    Three: { up: '友谊与庆祝。和朋友们在一起的快乐时光。', rev: '过度社交，流言，三人关系中的问题。', k_zh: ['友谊','庆祝','欢聚'], k_en: ['friendship','celebration','gathering'] },
    Four:  { up: '对现状不满，正在沉思。需要重新评估。', rev: '新的动力，重新出发，摆脱低迷。', k_zh: ['沉思','不满','内省'], k_en: ['contemplation','discontent','introspection'] },
    Five:  { up: '失落与遗憾，但旁边还有留下的杯子。', rev: '从失落中恢复，看到希望。', k_zh: ['失落','遗憾','希望'], k_en: ['loss','regret','hope'] },
    Six:   { up: '回忆与怀旧。过去的美好给予现在力量。', rev: '困在过去，无法活在当下。', k_zh: ['怀旧','回忆','纯真'], k_en: ['nostalgia','memory','innocence'] },
    Seven: { up: '幻想与选择。多个可能摆在面前。', rev: '清醒，做出选择，回归现实。', k_zh: ['幻想','选择','梦想'], k_en: ['fantasy','choice','dreams'] },
    Eight: { up: '放下不再服务你的人和事，走向更深处。', rev: '害怕离开，犹豫不决，回头。', k_zh: ['放下','前行','告别'], k_en: ['letting go','moving on','farewell'] },
    Nine:  { up: '愿望实现，情感满足。感恩拥有的。', rev: '愿望落空，不知感恩。', k_zh: ['满足','感恩','实现'], k_en: ['satisfaction','gratitude','fulfillment'] },
    Ten:   { up: '情感圆满，家庭幸福。爱与被爱的状态。', rev: '家庭失和，情感破碎。', k_zh: ['圆满','家庭','幸福'], k_en: ['wholeness','family','happiness'] },
    Page:  { up: '创意灵感，直觉的萌动。一个浪漫的消息。', rev: '情感不成熟，创意受阻。', k_zh: ['灵感','直觉','浪漫'], k_en: ['inspiration','intuition','romance'] },
    Knight:{ up: '浪漫的追求者，追逐梦想与理想。', rev: '情绪化，不切实际的浪漫。', k_zh: ['浪漫','追求','理想'], k_en: ['romance','pursuit','idealism'] },
    Queen: { up: '情感成熟，善解人意的女性形象。', rev: '情绪依赖，缺乏边界感。', k_zh: ['共情','温柔','直觉'], k_en: ['empathy','gentleness','intuition'] },
    King:  { up: '情感掌控力，成熟处理情绪的能力。', rev: '情感压抑，操控他人情绪。', k_zh: ['掌控','成熟','包容'], k_en: ['control','maturity','tolerance'] }
  },
  // 宝剑 (Swords) — 风 — 思维、决策、冲突
  Swords: {
    Ace:   { up: '清晰的思路，新想法。真理如利剑出鞘。', rev: '混乱的思维，错误的判断。', k_zh: ['清晰','真理','新想法'], k_en: ['clarity','truth','new idea'] },
    Two:   { up: '两难选择，需要权衡。僵持不下的状态。', rev: '选择困难，逃避决策。', k_zh: ['抉择','权衡','僵局'], k_en: ['choice','balance','stalemate'] },
    Three: { up: '心痛，悲伤，被言语伤害。需要时间疗愈。', rev: '从悲伤中恢复，放下心痛。', k_zh: ['心痛','悲伤','伤害'], k_en: ['heartbreak','sorrow','hurt'] },
    Four:  { up: '休息与恢复。需要暂停思考，让大脑休息。', rev: '恢复完毕，准备重新行动。', k_zh: ['休息','恢复','暂停'], k_en: ['rest','recovery','pause'] },
    Five:  { up: '冲突与争执，可能赢了但对方受伤。', rev: '和解，从冲突中吸取教训。', k_zh: ['冲突','争执','胜负'], k_en: ['conflict','argument','win-lose'] },
    Six:   { up: '过渡，离开困境前往更好的地方。', rev: '无法离开，情绪包袱过重。', k_zh: ['过渡','前行','希望'], k_en: ['transition','moving on','hope'] },
    Seven: { up: '策略性地获取所需，灵活应变。', rev: '计划暴露，欺骗被揭穿。', k_zh: ['策略','机智','灵活'], k_en: ['strategy','tact','flexibility'] },
    Eight: { up: '自我设限，感觉被困住。但束缚多是心理的。', rev: '挣脱束缚，重获思维自由。', k_zh: ['束缚','限制','焦虑'], k_en: ['restriction','limitation','anxiety'] },
    Nine:  { up: '担忧与噩梦，为未发生的事焦虑。', rev: '释然，焦虑缓解，重获希望。', k_zh: ['焦虑','噩梦','担忧'], k_en: ['anxiety','nightmare','worry'] },
    Ten:   { up: '彻底的结束，痛苦但已到尽头。黎明前最暗。', rev: '恢复中，痛苦正在退散。', k_zh: ['结束','崩溃','谷底'], k_en: ['ending','collapse','rock bottom'] },
    Page:  { up: '求知欲旺盛，善于观察分析。', rev: '过度分析，多嘴多舌惹麻烦。', k_zh: ['求知','观察','好奇'], k_en: ['curiosity','observation','inquiry'] },
    Knight:{ up: '果断出击，行动力强。迎难而上。', rev: '冲动鲁莽，没有策略。', k_zh: ['果断','勇敢','挑战'], k_en: ['decisive','brave','challenge'] },
    Queen: { up: '独立理性，善于分析判断的女性。', rev: '冷漠刻薄，过度理性。', k_zh: ['独立','理性','洞察'], k_en: ['independence','rationality','insight'] },
    King:  { up: '清晰的判断力，公正的权威。', rev: '严苛，滥用智力优势。', k_zh: ['判断','权威','公正'], k_en: ['judgment','authority','justice'] }
  },
  // 星币 (Pentacles) — 土 — 物质、金钱、健康
  Pentacles: {
    Ace:   { up: '新的财务机会或物质收获。种子已种下。', rev: '错失机会，财务决策失误。', k_zh: ['机会','收获','开始'], k_en: ['opportunity','harvest','beginning'] },
    Two:   { up: '多任务处理，平衡工作与生活的节奏。', rev: '失衡，无法兼顾多项事务。', k_zh: ['平衡','兼顾','灵活'], k_en: ['balance','juggling','flexibility'] },
    Three:{ up: '团队合作，专业技能获得认可。', rev: '团队不和谐，缺乏合作。', k_zh: ['合作','技能','认可'], k_en: ['teamwork','skill','recognition'] },
    Four:  { up: '对金钱的掌控感，但也可能过于保守。', rev: '贪婪，过度控制，不敢花。', k_zh: ['掌控','保守','安全'], k_en: ['control','conservative','security'] },
    Five:  { up: '物质或精神上的匮乏感，需要帮助。', rev: '走出困境，找到支持。', k_zh: ['匮乏','困难','求助'], k_en: ['lack','hardship','seeking help'] },
    Six:   { up: '给予与接受。慷慨分享你拥有的。', rev: '吝啬，不愿分享，或过度施舍。', k_zh: ['分享','慷慨','施与受'], k_en: ['sharing','generosity','giving'] },
    Seven: { up: '耐心等待投资回报。成长需要时间。', rev: '急于求成，付出没有回报。', k_zh: ['耐心','等待','耕耘'], k_en: ['patience','waiting','cultivation'] },
    Eight: { up: '勤奋工作，专注于技能的打磨。', rev: '工作狂，忽视生活其他方面。', k_zh: ['勤奋','专注','精进'], k_en: ['diligence','focus','craftsmanship'] },
    Nine:  { up: '物质独立与享受成果。你值得拥有。', rev: '过度依赖物质，财务不安全。', k_zh: ['享受','丰盛','独立'], k_en: ['enjoyment','abundance','independence'] },
    Ten:   { up: '家族财富与传承。物质层面的圆满。', rev: '家庭财务问题，遗产纠纷。', k_zh: ['传承','家族','富足'], k_en: ['legacy','family','wealth'] },
    Page:  { up: '学习新技能的契机。脚踏实地。', rev: '拖延学习，缺乏进取心。', k_zh: ['学习','务实','进步'], k_en: ['learning','practical','progress'] },
    Knight:{ up: '踏实可靠的执行者。按部就班。', rev: '缺乏动力，停滞不前。', k_zh: ['可靠','高效','务实'], k_en: ['reliable','efficient','practical'] },
    Queen: { up: '善于理财，务实温暖的女性形象。', rev: '过度物质化，忽视情感。', k_zh: ['理财','务实','温暖'], k_en: ['finance','practical','warm'] },
    King:  { up: '物质成就的巅峰，理财大师。', rev: '金钱至上，失去人情味。', k_zh: ['财富','成功','掌控'], k_en: ['wealth','success','mastery'] }
  }
};

// 生成小阿卡纳数据
function buildMinorArcana() {
  var cards = [];
  var id = 22; // 大牌0-21，小牌从22开始
  for (const suit of suits) {
    for (const rank of ranks) {
      var meaning = minorMeanings[suit.name_en][rank.rank_en];
      cards.push({
        id: id++,
        name_zh: `${suit.name_zh}${rank.rank_zh}`,
        name_en: `${rank.rank_en} of ${suit.name_en}`,
        arcana: 'minor',
        suit_zh: suit.name_zh,
        suit_en: suit.name_en,
        element_zh: suit.element_zh,
        element_en: suit.element_en,
        rank_zh: rank.rank_zh,
        rank_en: rank.rank_en,
        number: rank.num,
        upright: meaning.up,
        reversed: meaning.rev,
        keywords_zh: meaning.k_zh,
        keywords_en: meaning.k_en,
        daily_zh: `今日${suit.name_zh}能量：${meaning.up.slice(0, 50)}`,
        daily_en: `Today's ${suit.name_en} energy: ${meaning.rev ? 'Reflect on your path.' : 'Stay grounded.'}`,
        emoji: suit.emoji
      });
    }
  }
  return cards;
}

var minorArcana = buildMinorArcana();
var allCards = [...majorArcana, ...minorArcana];

// 获取一张随机牌
function drawCard() {
  return allCards[Math.floor(Math.random() * allCards.length)];
}

// 根据ID获取牌
function getCardById(id) {
  return allCards.find(c => c.id === id) || null;
}

// 获取大牌列表
function getMajorArcana() {
  return majorArcana;
}

// 获取小牌列表（可按花色筛选）
function getMinorArcana(suit) {
  if (suit) return minorArcana.filter(c => c.suit_en === suit);
  return minorArcana;
}


function drawCard() { return allCards[Math.floor(Math.random()*allCards.length)]; }
function getCardById(id) { var c = allCards.find(function(x) { return x.id === id; }); return c || null; }
