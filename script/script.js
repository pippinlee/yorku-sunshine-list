// This file sets up the dyanmic charts for the York Sunshine List
// This file works with Chart.js

var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
var lineChartData = {
  labels : ["2009","2010","2011","2012","2013"],
  datasets : [
    {
      label: "York Sunshine List",
      fillColor : "rgba(220,220,220,0.2)",
      strokeColor : "rgba(220,220,220,1)",
      pointColor : "rgba(220,220,220,1)",
      pointStrokeColor : "#fff",
      pointHighlightFill : "#fff",
      pointHighlightStroke : "rgba(220,220,220,1)",
      data : [478073.13,480029.76,479262.32,478851.66,478405.94]
    }
  ]
};

// Load chart for sunshine list
window.onload = function(){
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myLine = new Chart(ctx).Line(lineChartData, {
    // Make sunshine list responsive
    responsive: true
  });
};

// Dynamic chart for Momdouh Shoukri
$('#one').mouseover(function() {
    var lineChartData = {
    labels : ["2009","2010","2011","2012","2013"],
    datasets : [
      {
        label: "Distribution of pi",
        fillColor : "rgba(220,220,220,0.2)",
        strokeColor : "rgba(220,220,220,1)",
        pointColor : "rgba(220,220,220,1)",
        pointStrokeColor : "#fff",
        pointHighlightFill : "#fff",
        pointHighlightStroke : "rgba(220,220,220,1)",
        data : [478073.13,480029.76,479262.32,478851.66,478405.94]
      }
    ]
  };
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myLine = new Chart(ctx).Line(lineChartData, {
    responsive: true
  });
});

// Dynamic chart for Dezso Horvath
$('#two').mouseover(function() {
    var lineChartData = {
    labels : ["2009","2010","2011","2012","2013"],
    datasets : [
      {
        label: "Distribution of pi",
        fillColor : "rgba(220,220,220,0.2)",
        strokeColor : "rgba(220,220,220,1)",
        pointColor : "rgba(220,220,220,1)",
        pointStrokeColor : "#fff",
        pointHighlightFill : "#fff",
        pointHighlightStroke : "rgba(220,220,220,1)",
        data : [418981.77, 432374.38, 464302.27, 475261.83, 475261.83]
      }
    ]
  };
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myLine = new Chart(ctx).Line(lineChartData, {
    responsive: true
  });
});

// Dynamic chart for James McKellar
$('#three').mouseover(function() {
    var lineChartData = {
    labels : ["2009","2010","2011","2012","2013"],
    datasets : [
      {
        label: "Distribution of pi",
        fillColor : "rgba(220,220,220,0.2)",
        strokeColor : "rgba(220,220,220,1)",
        pointColor : "rgba(220,220,220,1)",
        pointStrokeColor : "#fff",
        pointHighlightFill : "#fff",
        pointHighlightStroke : "rgba(220,220,220,1)",
        data : [235577.62, 279102.55, 296807.40, 272807.39, 357203.55]
      }
    ]
  };
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myLine = new Chart(ctx).Line(lineChartData, {
    responsive: true
  });
});