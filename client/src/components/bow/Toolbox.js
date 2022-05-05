import React from 'react';
import Tokenizer from './Tokenizer'
import Punctuation from './Punctuation'
import Stopwords from './Stopwords';
import Cap from './Cap'
import LoadingOverlay from 'react-loading-overlay';
import {
    makeStyles,
  } from "@material-ui/core";

function get_toolbox(props){
      return (
        <div class="toolbox" style={{width: "90%", borderColor: "purple"}}>
            <Tokenizer  handler = {props.handler}/>
            <Punctuation handler = {props.handler}/>
            <Stopwords  handler = {props.handler}/>
            <Cap handler = {props.handler}/>
        </div>
      )
}
export default get_toolbox