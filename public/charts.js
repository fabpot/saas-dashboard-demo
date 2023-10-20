const noLegendOptions = {
  plugins: {
    legend: {
      display: false
    }
  }
};

const ctx = document.getElementById('chart1');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: 'USD',
      data: [1500, 2000, 2300, 1500, 1200, 500, 550, 1200, 3000, 2700 ],
      backgroundColor: ['#6046FF', '#E81CEC', '#FF4A11', '#D5F800', '#00D0EC', '#F2F3F4'],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      },
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
});



const ctx2 = document.getElementById('chart2');
new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: false,
      data: [30, 60, 320, 604, 900, 1000, 1300, 1500, 1800, 2200],
      fill: false,
      borderColor: '#D5F800',
      tension: 0.1
    }]
  },
  options: noLegendOptions
});

const ctx3 = document.getElementById('chart3');

new Chart(ctx3, {
  type: 'pie',
  data: {
    labels: ['EMEA', 'Americas', 'APAC'],
    datasets: [{
      label: '# of Votes',
      data: [200, 300, 100],
      backgroundColor: ['#6046FF', '#E81CEC', '#FF4A11', '#D5F800', '#00D0EC', '#F2F3F4'],
      borderWidth: 1
    }]
  }
});

const ctx4 = document.getElementById('chart4');
new Chart(ctx4, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: false,
      data: [30, 32, 19, 50, 22, 15, 30, 40, 38, 33],
      fill: false,
      borderColor: '#E81CEC',
      tension: 0.1
    }]
  },
  options: noLegendOptions
});
