// Global State
const BALANCE = 4280;
const DAILY_LIMIT = 326;

const transactions = [
    { name: "Domino's Pizza", amount: -349, category: "food", date: "Today, 2:30 PM", icon: "🍕", color: "#fff0ec" },
    { name: "Ola Cab", amount: -128, category: "travel", date: "Yesterday", icon: "🚗", color: "#e8f5fe" },
    { name: "Pocket Money", amount: 5000, category: "income", date: "Apr 1", icon: "💸", color: "#e6f9f3" },
    { name: "Spotify Premium", amount: -119, category: "subs", date: "Mar 31", icon: "🎵", color: "#f0ebff" },
];

function getBalance() {
    return BALANCE;
}

function getDailyLimit() {
    return DAILY_LIMIT;
}