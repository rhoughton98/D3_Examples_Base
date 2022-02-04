let svg = d3.select("#vis")
    .append("svg")
        .attr('width', 600)
        .attr('height', 400)
        .style('Background','#e1f7fa');

svg
    .append('circle')
        .attr('cx',100)
        .attr('cy',300)
        .attr('r', 100)
        .attr('fill','yellow');

d3.select('#vis svg')
    .append('rect')
        .attr('x',0)
        .attr('y',0)
        .attr('heigh',100)
        .attr('width',100)
        .attr('fill','black')