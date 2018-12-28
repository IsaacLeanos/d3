

var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500; var svgHeight=300; var barPadding = 5;
var barWidth = (svgWidth / dataset.length);  //=55


var svg = d3.select('svg')
    // .stroke('red')
    .attr("stroke","blue")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
    
var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
         return svgHeight - d 
    })
    .attr("height", function(d) { 
        return d; 
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0]; 
        return "translate("+ translate +")";
    });

var text=svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d){return d;})
    .attr("y", function(d) {
        return svgHeight - d - 4
   })
   .attr("x", function(d, i) {
    return barWidth * i+12;
    })








// select(), selectAll(), enter(),
// append(), style(), attr(), text(), data()