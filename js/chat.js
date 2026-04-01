// BrokeBuddy Chat AI Logic

const ChatBot = {
    replies: {
        afford: (msg) => {
            const m = msg.match(/(\d+)/); 
            const amt = m ? parseInt(m[1]) : 500;
            const balance = getBalance(); 
            const daily = getDailyLimit();
            const left = balance - amt; 
            const days = Math.max(0, Math.floor(left / daily));
            
            if (amt < balance * 0.1) return `✅ Totally fine! ₹${amt} is only ${((amt / balance) * 100).toFixed(0)}% of your balance. You'll still have ₹${left.toLocaleString()} for ${days} more days. Enjoy it! 🎉`;
            if (amt < balance * 0.3) return `🤔 You could, but ₹${amt} leaves you ₹${left.toLocaleString()} for ${days} days. Doable, but maybe check if it's on sale? 💡`;
            return `⚠️ Be careful! ₹${amt} would leave you only ₹${left.toLocaleString()} — just ${days} days at your current pace. With 13 days left this month, you'd likely run out. I'd wait! 😬`;
        },
        zomato: () => `🔥 5 days Zomato-free — saving ~₹240/day! 2 more days and you unlock 🏆 Foodie Champion. Your wallet AND your cooking skills are both levelling up!`,
        save: () => `💡 Top 3 ways to save this month:\n1. Cancel Netflix (unused 18 days) → save ₹199\n2. Cook 3 days/week instead of ordering → ~₹900 saved\n3. Use the Spotify family plan → save ₹60/mo\nTotal: ~₹1,159 back! 🪄`,
        balance: () => `Your balance is ₹4,280. At ₹326/day, you'll last ~13 more days. The month ends in 13 days — you're right on track! 🎯 Keep it up!`,
        sip: () => `📈 Love that you're thinking about this!\n• ₹500/month SIP for 10 yrs → ~₹1.15L\n• 20 yrs → ~₹4.5L\n• 30 yrs → ~₹14L\nEven ₹100/month compounds beautifully. Want me to set up a SIP goal? 🌱`,
        netflix: () => `📺 Netflix: You haven't watched in 18 days but paid ₹199 last month. That's ₹2,388/year for a "maybe I'll watch it" subscription.\n\nOptions:\n• Cancel → save ₹199/mo\n• Share with 1 friend → pay ₹100 each\n• Downgrade to mobile-only → ₹149/mo 📱`,
        default: () => `I'm looking at your patterns... 🔍 Your biggest opportunity: food spending is 44% of your budget! Small change: cook 3 days a week and save ~₹900/month. Want a weekly meal budget plan?`
    },

    getReply(msg) {
        const l = msg.toLowerCase();
        if (/afford|buy|can i|₹|\d{3,}/.test(l)) return this.replies.afford(msg);
        if (/zomato|streak|cook|food order/.test(l)) return this.replies.zomato();
        if (/save|saving|cut|cancel|subscri/.test(l) && !/netflix/.test(l)) return this.replies.save();
        if (/balance|left|remaining|how much/.test(l)) return this.replies.balance();
        if (/sip|invest|mutual|fund|stock/.test(l)) return this.replies.sip();
        if (/netflix/.test(l)) return this.replies.netflix();
        return this.replies.default();
    }
};

function addBotMsg(text) {
    const c = document.getElementById('chatMsgs');
    const r = document.createElement('div');
    r.className = 'msg-row';
    r.innerHTML = `<div class="msg-avatar">🤖</div><div><div class="msg-bubble bot">${text.replace(/\n/g, '<br>')}</div><div class="msg-time">Just now</div></div>`;
    c.appendChild(r);
    c.scrollTop = c.scrollHeight;
}

function addUserMsg(text) {
    const c = document.getElementById('chatMsgs');
    const r = document.createElement('div');
    r.className = 'msg-row user';
    r.innerHTML = `<div class="msg-time">Just now</div><div class="msg-bubble user">${text}</div>`;
    c.appendChild(r);
    c.scrollTop = c.scrollHeight;
}

function sendChat() {
    const inp = document.getElementById('chatInput');
    const txt = inp.value.trim();
    if (!txt) return;
    
    addUserMsg(txt); 
    inp.value = '';
    
    setTimeout(() => {
        const reply = ChatBot.getReply(txt);
        addBotMsg(reply);
    }, 650);
}

function sendQ(text) {
    showScreen('chat');
    setTimeout(() => {
        addUserMsg(text);
        setTimeout(() => {
            const reply = ChatBot.getReply(text);
            addBotMsg(reply);
        }, 650);
    }, 200);
}