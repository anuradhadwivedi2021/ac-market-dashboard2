// Seasonal Sales Chart
new Chart(document.getElementById("seasonalChart"), {
  type: "line",
  data: {
    labels: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"],
    datasets: [{
      label: "Sales (in Millions)",
      data: [5, 12, 25, 30, 15, 7],
      backgroundColor: "rgba(0, 102, 204, 0.2)",
      borderColor: "#0066cc",
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
  }
});

// Quarterly Revenue & Profit Chart
new Chart(document.getElementById("quarterChart"), {
  type: "bar",
  data: {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Revenue (in Cr)",
        data: [120, 300, 220, 180],
        backgroundColor: "#00b3b3"
      },
      {
        label: "Profit (in Cr)",
        data: [20, 80, 50, 40],
        backgroundColor: "#3399ff"
      }
    ]
  },
  options: {
    responsive: true
  }
});

// Year-on-Year Growth
new Chart(document.getElementById("growthChart"), {
  type: "line",
  data: {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [{
      label: "YoY Growth (%)",
      data: [5, 8, 12, 15, 18],
      borderColor: "#ff6600",
      fill: false,
      tension: 0.4
    }]
  },
  options: {
    responsive: true
  }
});

// Global Market Share
new Chart(document.getElementById("globalChart"), {
  type: "pie",
  data: {
    labels: ["Asia", "North America", "Europe", "India", "Others"],
    datasets: [{
      label: "Market Share (%)",
      data: [35, 25, 18, 8.5, 13.5],
      backgroundColor: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099"]
    }]
  },
  options: {
    responsive: true
  }
});