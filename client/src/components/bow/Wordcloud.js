import React from 'react';
import ReactWordcloud from 'react-wordcloud';


function Wordcloud(props) {
    var words = []
    var listForCloud = props.handler([], 2)   
    for(var i=0; i<listForCloud.length; i++){
        words.push({
            text: listForCloud[i][0],
            value: listForCloud[i][1],
        })
    }
    const options = {
        colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
        enableTooltip: true,
        deterministic: false,
        fontFamily: "impact",
        fontSizes: [5, 60],
        fontStyle: "normal",
        fontWeight: "normal",
        padding: 1,
        rotations: 3,
        rotationAngles: [0, 90],
        scale: "sqrt",
        spiral: "archimedean",
        transitionDuration: 1000
      };
    return (
        <div className='wordcloud'>
            <ReactWordcloud options={options} words={words} />
        </div>
    );
}
export default Wordcloud;

