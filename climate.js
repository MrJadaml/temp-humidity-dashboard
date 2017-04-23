$(function() {
  var socket = io();
  var ctx = document.getElementById("myChart");
  var data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
          {
              label: "Temperature",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [0, 0, 0, 0, 0, 0, 0],
              spanGaps: false,
          }, {
              label: "Humidity",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(161, 164, 227, 1.00)",
              borderColor: "rgba(161, 164, 227, 1.00)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [0, 0, 0, 0, 0, 0, 0],
              spanGaps: false,
          }
      ]
  };

  var myLineChart = new Chart(ctx, {
      type: 'line',
      data: data,
  });

  socket.on('climate data', function(climateData) {
    myLineChart.data.datasets[0].data.shift();
    myLineChart.data.datasets[0].data.push(climateData.tempCel);
    data.datasets[1].data.shift();
    data.datasets[1].data.push(climateData.humidity);
    myLineChart.update(400)
  });
});
