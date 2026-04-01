// Goals and Savings Logic

function toggleRoundup(btn) {
    btn.classList.toggle('off');
    const isOff = btn.classList.contains('off');
    console.log(`Round-up saver is now ${isOff ? 'OFF' : 'ON'}`);
}