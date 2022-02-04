d3.select('tr:nth-child(4) .char')
        .html('<strong>Evil</strong')
    .append('span')
        .html(' Surprise!');

d3.select('h1')
        .style('color', 'red');


d3.selectAll('tr')
    .insert('td', ':first-child')
    .append('input')
        .attr('type', 'checkbox')
        .property('checked' , 'true');