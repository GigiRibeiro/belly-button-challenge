d3.json('https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json').then(function(data)
{
    
let samplesData = data
console.log(samplesData);

let samplesID = samplesData.names
console.log(samplesID[0]);

let samplesDemographics =samplesData.metadata
console.log(samplesDemographics[0]);

let samplesPlotData = samplesData.samples
console.log(samplesPlotData[0]);

let sampleLabels = samplesPlotData[0].otu_ids.map(element => `OTU ${element}`)
let sampleValues = samplesPlotData[0].sample_values

let traceBar = {
    x: sampleValues.slice(0,10).reverse(),
    y: sampleLabels.slice(0,10).reverse(),
    type: 'bar',
    orientation: 'h',
    width: 0.8,
    text: samplesPlotData[0].otu_labels
}

// console.log(sampleValues.slice(0,10))
// console.log(samplesPlotData[0])


let layoutBar = {
    xaxis:{automargin:true},
    width: 500,
    height: 500
}


Plotly.newPlot('bar', [traceBar],layoutBar)

});


    

