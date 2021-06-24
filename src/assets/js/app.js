import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

google.charts.load("current", {packages:["corechart"]});

// Draw the pie chart for In Progress
google.charts.setOnLoadCallback(drawInProgress);

// Draw the pie chart for Completed
google.charts.setOnLoadCallback(drawCompleted);

// Draw the pie chart for Completed
google.charts.setOnLoadCallback(drawCompleted2);

function drawInProgress() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Complete',  77],
    ['Remaining', 43],
  ]);

  var options = {
    legend: 'none',
    pieHole: 0.4,
    colors:['#00B501','#CDCDCD'],
    fontName: 'Raleway'
  };

  var chart = new google.visualization.PieChart(document.getElementById('drawInProgress'));
  chart.draw(data, options);
}

function drawCompleted() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Complete',  100]
  ]);

  var options = {
    legend: 'none',
    pieHole: 0.4,
    colors:['#00B501','#CDCDCD'],
    fontName: 'Raleway'
  };

  var chart = new google.visualization.PieChart(document.getElementById('drawCompleted'));
  chart.draw(data, options);
}

function drawCompleted2() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Complete',  100]
  ]);

  var options = {
    legend: 'none',
    pieHole: 0.4,
    colors:['#00B501','#CDCDCD'],
    fontName: 'Raleway'
  };

  var chart = new google.visualization.PieChart(document.getElementById('drawCompleted2'));
  chart.draw(data, options);
}