function generateWrapped() {
    const totalSpent = transactions
        .filter(t => t.amount < 0)
        .reduce((acc, t) => acc + Math.abs(t.amount), 0);

    document.getElementById("wrappedContent").innerHTML = `
    <h2>You spent ₹${totalSpent}</h2>
    <p>Your biggest category: Food 🍔</p>
  `;
}