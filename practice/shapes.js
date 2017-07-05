var dataArray = [5, 11, 18];
var svg = d3.select('body').append('svg').attr('height', '100%').attr('width', '100%');
// d = datapoint (so 5, 11, 18); i = index of datapoint in array (so i = 0, 1, 2)


/*RECTANGLES*/
svg.selectAll('rect')
    .data(dataArray)
    .enter().append('rect')
            .attr('height', function(d, i) { return d * 10; })
            .attr('width','50')
            .attr('fill', 'pink')
            .attr('x', function(d, i) { return 60 * i; })
            .attr('y', function(d, i) { return 300 - d * 10; });

/*CIRCLES*/
var newX = 300;
svg.selectAll('circle.pink-circles')
    .data(dataArray)
    .enter().append('circle')
            .attr('class', 'pink-circles')
            .attr('cx', function(d, i) {
                newX += d*3 + i*20
                return newX;
            })
            .attr('cy', "100")
            .attr('r', function(d, i) { return d*3; })
            .attr('fill', 'red');

/*ELIPSES*/
var newX = 600;
svg.selectAll('ellipse')
    .data(dataArray)
    .enter().append('ellipse')
            .attr('class', 'green-ellipses')
            .attr('cx', function(d, i) {
                newX += d*3 + i*20
                return newX;
            })
            .attr('cy', "100")
            .attr('rx', function(d, i) { return d*3; })
            .attr('ry', function(d, i) { return 30 })
            .attr('fill', 'green');

/*ELIPSES*/
var newX = 900;
svg.selectAll('line')
    .data(dataArray)
    .enter().append('line')
            .attr('class', 'blue')
            .attr('x1', newX)
            .attr('y1', function(d, i) { return 80 + i*20 })
            .attr('x2', function(d, i) { return newX + d*15; })
            .attr('y2', function(d, i) { return 80 + i*20 });
            //.style('stroke', 'blue') // OR .attr('stroke', 'blue')
            //.style('stroke-width', '2') // OR .attr('stroke-width', '2')

/*TEXT*/
var textArray = ['start', 'middle', 'end']
svg.append('text').selectAll('tspan')
    .data(textArray)
    .enter().append('tspan')
        .attr('x', newX)
        .attr('y', function(d, i) { return 150 + i*30 })
        .attr('fill', "none")
        .attr('stroke', "blue")
        .attr('stroke-width', "2")
        .attr('font-size', "30")
        .attr('text-anchor', function(d) { return d; })
        .attr('dominant-baseline', 'middle')
        .text(function(d) { return d; });

/*LINE TO SEE TEXT ALIGNMENT*/
svg.append('line')
    .attr('class', 'orange')
    .attr('x1', newX)
    .attr('y1', '150')
    .attr('x2', newX)
    .attr('y2', "210");
