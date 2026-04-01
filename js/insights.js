// Insights and Charts Logic

document.addEventListener('DOMContentLoaded', () => {
    initBarChart();
});

function initBarChart() {
    const bc = document.getElementById('barChart');
    if (!bc) return;
    
    // Clear previous
    bc.innerHTML = '';
    
    const data = [
        { m: 'Jan', v: 3800, c: 'var(--peach)' }, 
        { m: 'Feb', v: 5200, c: 'var(--sky)' }, 
        { m: 'Mar', v: 7100, c: 'var(--lavender)' }, 
        { m: 'Apr', v: 4220, c: 'var(--peach)', hi: true }
    ];
    
    const max = Math.max(...data.map(d => d.v));
    
    data.forEach(d => {
        const h = Math.round((d.v / max) * 90);
        const col = document.createElement('div');
        col.className = 'bar-col';
        col.innerHTML = `
            <div class="bar-fill ${d.hi ? 'hi' : ''}" style="height:${h}px;background:${d.c};opacity:${d.hi ? 1 : 0.45}"></div>
            <div class="bar-label">${d.m}</div>
        `;
        bc.appendChild(col);
    });
}