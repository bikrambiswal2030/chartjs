var lineData = {
  type: "line",
  top: 20,
  bottom: 80,
  left: 30,
  right: 10,
  width: 800,
  height: 500,
  lineColor: "blue",
  value: [
    {
      xAxis: "veg soup",
      yAxis: 200
    },
    {
      xAxis: "veg curry",
      yAxis: 600
    },
    {
      xAxis: "veg pasta",
      yAxis: 300
    },
    {
      xAxis: "veg burger",
      yAxis: 700
    },
    {
      xAxis: "veg surprise",
      yAxis: 900
    }
  ]
};

var lineChart = Graph.drawGraph(lineData);

var columnData = {
  type: "column",
  top: 20,
  bottom: 80,
  left: 30,
  right: 10,
  width: 800,
  height: 500,
  columnColor: "orange",
  value: [
    {
      xAxis: "veg soup",
      yAxis: 200
    },
    {
      xAxis: "veg curry",
      yAxis: 600
    },
    {
      xAxis: "veg pasta",
      yAxis: 300
    },
    {
      xAxis: "veg burger",
      yAxis: 700
    },
    {
      xAxis: "veg surprise",
      yAxis: 900
    }
  ]
};

var columnChart = Graph.drawGraph(columnData);

var pieData = {
  type: "pie",
  top: 350,
  bottom: 70,
  left: 350,
  right: 10,
  width: 900,
  height: 800,
  inLabel: 130,
  value: [
    {
      xAxis: "veg soup",
      yAxis: 200
    },
    {
      xAxis: "veg curry",
      yAxis: 600
    },
    {
      xAxis: "veg pasta",
      yAxis: 300
    },
    {
      xAxis: "veg burger",
      yAxis: 700
    },
    {
      xAxis: "veg surprise",
      yAxis: 900
    }
  ]
};

var pieChart = Graph.drawGraph(pieData);

var barData = {
  type: "bar",
  top: 15,
  bottom: 20,
  left: 60,
  right: 25,
  width: 800,
  height: 500,
  barColor: "green",
  value: [
    {
      yAxis: "veg soup",
      xAxis: 200
    },
    {
      yAxis: "veg curry",
      xAxis: 600
    },
    {
      yAxis: "veg pasta",
      xAxis: 300
    },
    {
      yAxis: "veg burger",
      xAxis: 700
    },
    {
      yAxis: "veg surprise",
      xAxis: 900
    }
  ]
};

var barChart = Graph.drawGraph(barData);
