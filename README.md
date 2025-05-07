# Two-Kinds

🎨 视觉加强 & 页面设计美化
加背景图/渐变色块（更有气氛）ok

首页加大图/插画（可以是钢琴、中国风图案）ok

卡片式 layout（每个section像一张纸）ok

💬 加入 Jing-mei & 她妈妈的对话原文
加经典对话框（我来帮你排版 + 引号样式）
Home（故事导语）

✦ 用一句“如果你小时候被逼学过钢琴，这个故事你一定懂。”开场
✦ 用时间线展示 Jing-mei 的成长、母亲期望、抗争与和解
✦ 配图：Jing-mei坐在钢琴前、考砸后的脸、妈妈沉默的背影

Characters（人物互动）
✦ Jing-mei & 她妈妈的对话泡泡（点击切换经典语录）
✦ 鼠标悬停时切换人物情绪表情图（静态图片切换）

Themes（趣味解说）
✦ 每个主题用 emoji 开头 + 简洁解说 + 小动画图标
✦ 比如：

🧬 Identity：「不是叛逆，是她想找回自己。」

🧨 Expectation：「爱，有时是压力打包的模样。」

🎹 Piano：「这不是乐器，是沉默的沟通。」

Key Scene（微剧情）
✦ 原来jingmei顺着妈妈的想法也想做神童
✦ 随着jingmei发现妈妈对她期待过高和自己并没有这么出色的时候想开始反抗
✦ blablabla你来补充这些零碎的，故事我忘了
✦ 还原争吵片段：用点击切换的方式“播放”争执过程（点击“母亲说→”切换对话）
从上往下的动画，每个人吵一句，就像发消息一样，有头像，有气泡框，reader点击一下就往下一条，页面上有个漂浮的键盘进度条，每个人吵一句琴键就往后一个，吵完也就是谈完钢琴。

✦ 结尾弹出那句：“Then I wish I were dead! Like them.”


Reflection（故事结尾，不是个人）
✦ 内容变成「Jing-mei 成长后怎么理解那段经历」
✦ 最后一段弹出：“I never really gave up the piano...”那段温柔文字，并且可以写一封jingmei给妈妈的信，用户可以拆信，用户一点击信封，信封就被拆了然后纸张出来，读信。
✦结尾，整个画面在读完信后遍暗，模糊旧照片风格
小测验（你是谁？Jing-mei or Mom）


🗣 加入 AI 朗读或音频片段（选段朗诵！）
你想我帮你合成英文朗读音频吗？可以放在首页或 reflection 区 🎧

可以加按钮：🔊 Hear this quote

🐉 加点互动元素
鼠标悬停变色 / 按钮点击展开更多内容

右下角浮动一个“返回顶部”按钮




1. 🎬 Opening（#home）
标题句：“如果你小时候被逼学过钢琴，这个故事你一定懂。”
形式：大字体白字打在黑钢琴图上 + 文字慢慢显现
简述：

html
复制代码
<p class="intro-quote">"In every family, some stories aren't told—they're pressed into silence, piano keys, and pressure."</p>
<p>Let’s revisit Amy Tan’s <em>Two Kinds</em> not as a short story, but as a memory most of us know too well.</p>
2. 🕰️ Timeline（#timeline）
模块改造：原来的 Themes/Reflection 合并为时间线
形式：横向时间轴（成长节点 + 小插图 + 一句话解说）

节点包括：

🎹 第一次练琴

😤 考砸被骂

🔥 争吵爆发

🧊 母亲沉默

🎁 母亲送回钢琴（和解）

3. 🧍‍♀️ Character Dynamics（#characters）
形式：

两张图片：Jing-mei & 妈妈

鼠标悬停切换情绪图（normal → angry / disappointed）

点击对话框来切换经典台词：

“Only two kinds of daughters…”

“You want me to be someone I’m not!”

“Then I wish I were dead. Like them.”

4. 💥 Key Scene Replay（#scene）
形式：点击切换争吵对话，一句句冒泡
设计：

每点击一下 → 出现一句争执 + 琴键下方进度移动

吵到最后触发那句：

html
复制代码
<div class="final-line">"Then I wish I were dead! Like them."</div>
5. 💌 Silent Reconciliation（#reflection）
形式：

页面静静淡出变暗

出现信封图标，点击 → 信封翻开，纸条滑出

信内容（仿 Jing-mei 长大后给妈妈写）：

text
复制代码
Dear Mom,
I never really gave up the piano. I always knew you meant well. 
The music we couldn’t speak—it’s still with me.
Love, Jing-mei.
6. 🔍 Bonus：你是哪一方？（#quiz）
小测验：你是Jing-mei还是她妈妈？
形式：三道选择题，选完给结果+一句话点评