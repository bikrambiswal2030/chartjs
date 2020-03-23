var line = {
  type: "line",
  top: 20,
  bottom: 80,
  left: 30,
  right: 10,
  width: 800,
  height: 500,
  inLabel: 10,
  value: [
    {
      name: "veg soup",
      orders: 200
    },
    {
      name: "veg curry",
      orders: 600
    },
    {
      name: "veg pasta",
      orders: 300
    },
    {
      name: "veg burger",
      orders: 700
    },
    {
      name: "veg surprise",
      orders: 900
    }
  ]
};

var lineChart = draw(line);

var bar = {
  type: "bar",
  top: 20,
  bottom: 80,
  left: 30,
  right: 10,
  width: 800,
  height: 500,
  inLabel: 10,
  value: [
    {
      name: "veg soup",
      orders: 200
    },
    {
      name: "veg curry",
      orders: 600
    },
    {
      name: "veg pasta",
      orders: 300
    },
    {
      name: "veg burger",
      orders: 700
    },
    {
      name: "veg surprise",
      orders: 900
    }
  ]
};

var barChart = draw(bar);

var pie = {
  type: "pie",
  top: 350,
  bottom: 80,
  left: 350,
  right: 10,
  width: 900,
  height: 800,
  inLabel: 10,

  value: [
    {
      name: "veg soup",
      orders: 200
    },
    {
      name: "veg curry",
      orders: 600
    },
    {
      name: "veg pasta",
      orders: 300
    },
    {
      name: "veg burger",
      orders: 700
    },
    {
      name: "veg surprise",
      orders: 900
    }
  ]
};

var pieChart = draw(pie);
