
/*============ MAKING AN AREA CHART ============*/

var dataArray2 = [11, 23, 1, 7, 97, 65, 98, 66, 45, 12, 30, 40, 50, 70, 100, 150, 180];
var dataYears = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'];

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

var height = 200;
var width = 500;

var area = d3.area()
                .x(function(d,i) { return i * 20; }) //better way of doing this, will see later.
                .y0(height) //distance from the top of the screen where y = 0 on the axis. Most people set y0 to the height of the charts. It stays constant
                .y1(function(d) { return height - d; }); //rpz the datapoint on the chart = it's the active variable (drawing the upper boundary of the area chart) It chanegs for every datapoint.

svg.append('path').attr('d', area(dataArray2));
