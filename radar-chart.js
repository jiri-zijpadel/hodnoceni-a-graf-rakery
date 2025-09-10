function initRadarChart() {
  const chartEl = document.getElementById('radarChart');
  if (!chartEl || typeof Chart === "undefined") return;

  const ctx = chartEl.getContext('2d');

  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Síla', 'Kontrola', 'Komfort', 'Manévrovatelnost', 'Efekt', 'Tolerance'],
      datasets: [{
        label: 'Hodnocení rakety',
        data: [8, 9, 6, 5, 6, 8],
        backgroundColor: 'rgba(198, 232, 1, 0.2)',
        borderColor: '#003d79',
        pointBackgroundColor: '#003d79',
        borderWidth: 2
      }]
    },
    options: {
      animation: {
        duration: 1500,
        easing: 'easeOutQuart'
      },
      scales: {
        r: {
          min: 0,
          max: 10,
          ticks: {
            stepSize: 2,
            backdropColor: 'transparent',
            color: '#003d79'
          },
          grid: { color: '#c6e801' },
          angleLines: { color: '#c6e801' },
          pointLabels: {
            color: '#003d79',
            font: { size: 14 }
          }
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
}

// Pomocí MutationObserver počkáme, až se radarChart objeví v DOMu
const observer = new MutationObserver(() => {
  const chartEl = document.getElementById('radarChart');
  if (chartEl && !chartEl.dataset.chartRendered) {
    chartEl.dataset.chartRendered = 'true';
    initRadarChart();
  }
});

// Sledujeme změny v těle stránky (DOM subtree)
observer.observe(document.body, {
  childList: true,
  subtree: true
});