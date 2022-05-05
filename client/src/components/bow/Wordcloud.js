import React from 'react';
import {render} from 'react-dom'
import WordCloud from 'react-d3-cloud';


function Wordcloud(props) {
    var words = []
    var listForCloud = props.handler([], 2).list  
    console.log("here") 
    var wordcloudAmount = 0
    if(listForCloud.length<=500){
        wordcloudAmount = listForCloud.length
    }
    else{
        wordcloudAmount = 500
    }
    for(var i=0; i<wordcloudAmount; i++){
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
        spiral: "archimedean",
        transitionDuration: 1000
      };
    return (
        <div className='wordcloud' styles={{width:"100%", float: "right"}}>
             <p1 class="directions" >WordCloud (click on a word to google it):</p1>
            <WordCloud data={words} width={300}
    height={300}
    font="Times"
    fontStyle="italic"
    fontWeight="bold"
    fontSize={(word) => Math.log2(word.value) * 5}
    spiral="rectangular"
    rotate={(word) => word.value % 360}
    padding={5}
    random={Math.random}
    onWordClick={(event, d) => {
        window.open('https://www.google.com/search?q='+d.text+'', '_blank').focus();
    }}
    onWordMouseOver={(event, d) => {
      console.log(`onWordMouseOver: ${d.text}`);
    }}
    onWordMouseOut={(event, d) => {
      console.log(`onWordMouseOut: ${d.text}`);
    }}/>
        </div>
    );
}

export default Wordcloud;

