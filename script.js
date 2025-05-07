// Smooth scroll when clicking navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetID = this.getAttribute('href');
      const target = document.querySelector(targetID);
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Background music fade-in on first click
  let bgMusic; // 用 let 提前声明一次

  window.addEventListener("DOMContentLoaded", function () {
    bgMusic = document.getElementById("bg-music");
  
    const playMusicOnce = () => {
      bgMusic.muted = false;
      bgMusic.volume = 0;
      bgMusic.play().catch(() => {});
  
      let vol = 0;
      const fade = setInterval(() => {
        if (vol < 0.3) {
          vol += 0.01;
          bgMusic.volume = vol;
        } else {
          clearInterval(fade);
        }
      }, 100);
  
      document.body.removeEventListener("pointerdown", playMusicOnce);
    };
  
    document.body.addEventListener("pointerdown", playMusicOnce);
  
    // 🎵 Toggle music play/pause listener 也放这里！
    const toggleBtn = document.getElementById("music-toggle");
    toggleBtn.addEventListener("click", () => {
      if (bgMusic.paused) {
        bgMusic.muted = false;
        bgMusic.volume = 0.3;
        bgMusic.play();
        toggleBtn.textContent = "🔊";
      } else {
        bgMusic.pause();
        toggleBtn.textContent = "🔇";
      }
    });
  });


  
    


      document.addEventListener("DOMContentLoaded", function () {
        const chatBox = document.querySelector('.chat-box');
        const btn = document.getElementById('playNext');
        const pianoTrack = document.getElementById('pianoTrack');
      
        const lines = [ 
                { type: "mother", text: "Four clock," },
                { type: "narration", text: "I was stunned, as though she were asking me to go through the talent-show torture again." },
                { type: "narration", text: "I planted myself more squarely in front of the TV." },
                { type: "mother", text: "Turn off TV." },
                { type: "narration", text: "I didn’t move. I wasn’t her slave. This wasn’t China. I had listened to her before, and look what happened she was the stupid one." },
                { type: "mother", text: "Four clock." },
                { type: "jingmei", text: "I’m not going to play anymore. Why should I? I’m not a genius." },
                { type: "narration", text: "She stood in front of the TV. I saw that her chest was heaving up and down in an angry way." },
                { type: "jingmei", text: "No! I won’t!" },
                { type: "narration", text: "She snapped off the TV and yanked me off the floor." },
                { type: "narration", text: "She was frightening strong, half pulling, half-carrying me towards the piano as I kicked the throw rugs under my feet." },
                { type: "narration", text: "She lifted me onto the hard bench. I was sobbing by now, looking at her bitterly. Her chest was heaving even more and her mouth was open, smiling crazily as if she were pleased that I was crying." },
                { type: "jingmei", text: "You want me to be something that I’m not!" },
                { type: "jingmei", text: "I’ll never be the kind of daughter you want me to be!" },
                { type: "mother", text: "Only two kinds of daughters. Those who are obedient and those who follow their own mind." },
                { type: "mother", text: "Only obedient daughter can live in this house!" },
                { type: "jingmei", text: "Then I wish I weren’t your daughter. I wish you weren’t my mother!" },
                { type: "narration", text: "I shouted. As I said these things I got scared. It felt like worms and toads and slimy things crawling out of my chest, but also felt good, that this awful side of me had surfaced, at last." },
                { type: "mother", text: "Too late to change this." },
                { type: "jingmei", text: "Then I wish I’d never been born! I wish I were dead! Like them!" },
                { type: "narration", text: "I was as if I had said magic words. Alakazem! Her face went blank, her mouth closed, her arms went slack, and she backed out of the room, stunned, as if she were blowing away like a small brown leaf, thin, brittle, lifeless." }
              ];// 你的对白数组
      
        lines.forEach((line) => {
          const key = document.createElement('div');
          key.classList.add('key');
          if (line.type === 'jingmei' || line.type === 'mother') {
            key.classList.add('black');
          } else {
            key.classList.add('white');
          }
          pianoTrack.appendChild(key);
        });
      
        const keys = document.querySelectorAll('.piano-track .key'); // 放在生成之后
      
        let currentIndex = 0;
      
        btn.addEventListener('click', () => {
          if (currentIndex < lines.length) {
            const line = lines[currentIndex];
            const msg = document.createElement('div');
            /*add pfp*/
            msg.classList.add('message', line.type);
            if (line.type === 'jingmei' || line.type === 'mother') {
                const bubble = document.createElement('div');
                bubble.classList.add('bubble');
              
                const avatar = document.createElement('img');
                avatar.classList.add('avatar');
                avatar.src = line.type === 'jingmei' ? 'images/JingMei.png' : 'images/JingMeiMOM.png';
                avatar.alt = line.type;
              
                const textSpan = document.createElement('span');
                textSpan.textContent = line.text;
              
                bubble.appendChild(textSpan);
              
                if (line.type === 'jingmei') {
                  bubble.classList.add('right');
                  bubble.appendChild(avatar);
                } else {
                  bubble.classList.add('left');
                  bubble.insertBefore(avatar, textSpan);
                }
              
                msg.appendChild(bubble);
              } else {
                msg.textContent = line.text; // narration 保持原样
              }
              

            chatBox.appendChild(msg);
            keys[currentIndex].classList.add('active');
            currentIndex++;
          } else {
            btn.disabled = true;
            btn.textContent = 'End of Scene';
          }
        });
      });
      


/*letter*/
document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.getElementById("envelope");
    const letterContent = document.getElementById("letter-content");
    const typedText = document.getElementById("typed-text");
    const doneReading = document.getElementById("done-reading");

    const fullLetter = `Dear Mom,

    When I was younger, I thought you were trying to shape me into someone I wasn't. The piano felt like a daily reminder that I wasn’t enough—not smart enough, not talented enough. And when I shouted those cruel words, I thought I had won. But growing up has a way of quieting pride.
    
    Now I understand you weren't trying to control me. you were trying to save something: the life you lost. You never talked about the daughters before me, the life before America, or the weight you carried across oceans. But I see it now, in every push you gave me: you wanted me to live the life they never got to. You wanted my survival to mean something. You wanted you to mean something.
    
    You lost more than I could ever understand. And instead of mourning out loud, you turned loss into expectation—into me. The truth is, I couldn’t carry all of that when I was a child. I only saw pressure. But there was love in the silence, and grief behind your strength.
    I played that piano again recently. Not to impress you. Not to win anything. Just to remember you. And as my fingers found the keys, I finally heard your voice—beneath the silence. I’m still not a genius. I never was. But I am your daughter.
    And now, I think I’m finally proud of that.
    
    Love,
    Jing-mei`;
    
  
    envelope.addEventListener("click", function () {
        envelope.classList.add("opened");

      
          setTimeout(() => {
            envelope.style.display = "none";
            letterContent.classList.remove("hidden");
            typeText(fullLetter, typedText, 25, () => {
              // 👇 打字完后才显示按钮
              doneReading.classList.remove("hidden");
            });
          }, 1000);
        });
  
    // ✨ 加上 callback 检查打字完成
  function typeText(text, element, speed, callback) {
    let i = 0;
    const interval = setInterval(() => {
      element.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, speed);
  }

// done reading
doneReading.addEventListener("click", () => {
    letterContent.classList.add("hidden");
    document.getElementById("ending-screen").classList.add("show");
  });
});
  



  

//quote variables
  const jingMeiQuotes = [
    "Why can’t I be myself?",
    "Then I wish I were dead! Like them!",
    "I’m not a genius!",
    "You just want me to be someone I’m not!"
  ];
  
  const momQuotes = [
    "Only two kinds of daughters...",
    "You be best. You can be anything you want to be.",
    "You don’t try!",
    "You have natural talent!"
  ];
  
  let jmIndex = 0;
  let momIndex = 0;
  
  document.getElementById("jingmei-quote").addEventListener("click", () => {
    jmIndex = (jmIndex + 1) % jingMeiQuotes.length;
    const quote = document.getElementById("jingmei-quote");
    quote.textContent = `“${jingMeiQuotes[jmIndex]}”`;
    quote.classList.add('bubble2');
  });
  
  document.getElementById("mother-quote").addEventListener("click", () => {
    momIndex = (momIndex + 1) % momQuotes.length;
    const quote = document.getElementById("mother-quote");
    quote.textContent = `“${momQuotes[momIndex]}”`;
    quote.classList.add('bubble2');
  });
