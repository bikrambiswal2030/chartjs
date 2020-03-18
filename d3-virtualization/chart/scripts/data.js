let lineData = {
  type: "line",
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

let lineChart = draw(lineData);

let barData = {
  type: "bar",
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

let barChart = draw(barData);
