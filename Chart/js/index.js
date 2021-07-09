// GLOBAL VARIABLES
let chartTitle = '';
let xaxisTitle = '';
let yaxisTitle = '';
let xArray = [];
let yArray = [];
let xaxisRange = [0,];
let yaxisRange = [0,];

// FUNCTIONS
function titles() {
  chartTitle = document.getElementById('title').value;
  xaxisTitle = document.getElementById('xaxisTitle').value;
  yaxisTitle = document.getElementById('yaxisTitle').value;
  xaxisrange = document.getElementById('xaxisRange').value;
  yaxisrange = document.getElementById('yaxisRange').value;
  document.getElementById('essentials').style.display = 'none';
  document.getElementById('entireBody').style.display = 'flex';
  document.getElementById('formBtn').style.display = 'flex';

  return chartTitle,
  xaxisTitle,
  yaxisTitle,
  xaxisrange,
  yaxisrange;
}


function arrayInput() {
  let xValues = document.getElementById('xValues').value;
  let yValues = document.getElementById('yValues').value;

  xArray.push(xValues);
  yArray.push(yValues);
  document.getElementById('form').reset();
  console.log(xArray, yArray);

  document.getElementById('th1').innerHTML = xaxisTitle;
  document.getElementById('th2').innerHTML = yaxisTitle;

  document.getElementById('td1').innerHTML += `<td><tr>${xValues}</tr></td>`
  document.getElementById('td2').innerHTML += `<td><tr>${yValues}</tr></td>`
  return xArray,
  yArray;
}
function createChart() {

  xaxisRange.push(xaxisrange);
  yaxisRange.push(yaxisrange);
  var data = [{
    x: xArray,
    y: yArray,
    mode: "lines"
  }];

  // Define Layout
  var layout = {
    xaxis: {
      range: xaxisRange,
      title: `${xaxisTitle}`
    },
    yaxis: {
      range: yaxisRange,
      title: `${yaxisTitle}`
    },
    title: `${chartTitle}`
  };
  // Display using Plotly
  Plotly.newPlot("myPlot", data, layout);
  document.getElementById('footer').style.display = 'none';
}
