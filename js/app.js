// Navigation Logic
function showScreen(name) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    
    const s = document.getElementById('screen-' + name);
    if (s) s.classList.add('active');
    
    const n = document.getElementById('nav-' + name);
    if (n) n.classList.add('active');
}

// Modal Logic
function openAddModal() {
    document.getElementById('addModal').classList.add('open');
}

function openAffordModal() {
    document.getElementById('affordModal').classList.add('open');
    document.getElementById('affordRes').style.display = 'none';
    document.getElementById('affordAmt').value = '';
}

function closeM(id) {
    document.getElementById(id).classList.remove('open');
}

// Modal closing listener
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.modal-overlay').forEach(m => {
        m.addEventListener('click', function (e) {
            if (e.target === this) this.classList.remove('open');
        });
    });
});

// Expense Category Selection
function selCat(el) {
    document.querySelectorAll('.cat-btn').forEach(c => c.classList.remove('sel'));
    el.classList.add('sel');
}

// Expense Submission
function submitExp() {
    const amt = document.getElementById('expAmt').value;
    const desc = document.getElementById('expDesc').value || 'misc';
    if (!amt) return;
    
    closeM('addModal');
    
    setTimeout(() => {
        showScreen('chat');
        const balance = getBalance();
        const remaining = Math.max(0, balance - parseInt(amt));
        const botMsg = `Logged ₹${amt} for "${desc}" 📝. Remaining balance: ₹${remaining.toLocaleString()}. ${parseInt(amt) > 500 ? "⚠️ That's a big one — want tips to save this week?" : "💪 Good job tracking every rupee!"}`;
        addBotMsg(botMsg);
    }, 300);
}

// "Can I Afford This?" Logic
function checkAfford() {
    const amt = parseInt(document.getElementById('affordAmt').value) || 0;
    if (!amt) {
        document.getElementById('affordRes').style.display = 'none';
        return;
    }
    
    document.getElementById('affordRes').style.display = 'block';
    
    const balance = getBalance();
    const dailyLimit = getDailyLimit();
    const left = balance - amt;
    const days = Math.max(0, Math.floor(left / dailyLimit));
    
    let em, v, d;
    if (amt <= balance * 0.1) {
        em = '✅'; v = 'Yes, go for it!';
        d = `₹${amt} is just ${((amt / balance) * 100).toFixed(0)}% of your balance. You'll have ₹${left.toLocaleString()} left — about ${days} more days of spending. Treat yourself! 🎉`;
    } else if (amt <= balance * 0.3) {
        em = '🤔'; v = 'Maybe — think twice';
        d = `After spending ₹${amt}, you'd have ₹${left.toLocaleString()} left — enough for ${days} days. Can this wait until next month for a deal?`;
    } else {
        em = '⚠️'; v = 'Risky! Better to wait.';
        d = `₹${amt} would leave you only ₹${left.toLocaleString()} — just ${days} days with 13 left this month. You'd likely run out! Wait or find a cheaper alternative. 😬`;
    }
    
    document.getElementById('aEmoji').textContent = em;
    document.getElementById('aVerdict').textContent = v;
    document.getElementById('aDetail').textContent = d;
}