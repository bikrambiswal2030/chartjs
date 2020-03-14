Chart.defaults.global.defaultFontFamily = "Times New Roman";
Chart.defaults.global.defaultFontSize = 30;
Chart.defaults.global.defaultFontColor = "black";

//Create a bar chart
var bar = document.getElementById("bar-chart").getContext("2d");
var barChart = new Chart(bar, {
  type: "bar",
  data: {
    labels: [
      "BJP",
      "SHIVA SENA",
      "JDU",
      "LJP",
      "SAD",
      "AD(S)",
      "AJSU",
      "MNF",
      "RLTP",
      "AIDMK",
      "NDPP",
      "NPP",
      "CONGRESS",
      "DMK",
      "NCP",
      "IUML",
      "JKNC",
      "KCM",
      "RCP",
      "IND",
      "JMM",
      "VCK",
      "JDS",
      "TMC",
      "BJD",
      "BSP",
      "SP"
    ],
    datasets: [
      {
        label: "Sits Own in Indian Parliament",
        data: [
          303,
          18,
          16,
          6,
          2,
          2,
          1,
          1,
          1,
          1,
          1,
          1,
          52,
          23,
          5,
          3,
          3,
          1,
          1,
          1,
          1,
          1,
          1,
          22,
          12,
          10,
          5
        ],
        backgroundColor: [
          "#f4c430",
          "red",
          "green",
          "#1d1d1d",
          "orange",
          "black",
          "#1d1d1d",
          "#00008b",
          "#1d1d1d",
          "#adff2f",
          "pink",
          "orange",
          "#498fcd",
          "orange",
          "#020072",
          "green",
          "red",
          "orange",
          "red",
          "grey",
          "#1d1d1d",
          "#1d1d1d",
          "#1d1d1d",
          "#83c700",
          "#00b61d",
          "blue",
          "red"
        ]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Lok shaba Election 2019",
      fontSize: 30
    }
  }
});

//create a line chart
var Line = document.getElementById("line-chart").getContext("2d");
var lineChart = new Chart(Line, {
  type: "line",
  responsive: "false",
  data: {
    labels: [
      "1984",
      "1989",
      "1991",
      "1996",
      "1998",
      "1999",
      "2004",
      "2009",
      "2014",
      "2019"
    ],
    datasets: [
      {
        label: "Lok Shabha Sits",
        data: [2, 85, 120, 161, 182, 182, 138, 116, 282, 303],
        backgroundColor: "#f4c430"
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Journey of BJP in Lok shabha",
      fontSize: 30
    }
  }
});
