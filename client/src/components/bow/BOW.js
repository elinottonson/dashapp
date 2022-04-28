import React from 'react';
import ExportBOW from './ExportBOW';
import ImportFiles from '../importFile';
import ShowBOW from './ShowBOW';
import Wordcloud from './Wordcloud';
import Tokenizer from './Tokenizer'
import Punctuation from './Punctuation'
import Stopwords from './Stopwords';
import Cap from './Cap'
import LoadingOverlay from 'react-loading-overlay';
import {
    makeStyles,
  } from "@material-ui/core";
import ToolBox from './Toolbox'

class BOW extends React.Component{
    constructor(props) {
        super(props)
        this.handler = this.handler.bind(this)
        this.state ={
            list: [],
            tokenizer: "word",
            punct: false,
            stop: false,
            cap: false,
            loading: false
        }
    }
    handler(listBOW, action) {
        if(action==1){
            this.state.list = listBOW;
            console.log(this.state.list)
            this.state.loading = false
            this.forceUpdate();
        }
        else if(action==2){
            return this.state;
        }
        else if(action==3){
            this.state.loading = true
            this.forceUpdate();
        }
    }
    render(){
        return (
            <div style={{width: "calc(100% - 203px)"}}>
                <div style={{width: "70%", float: "left"}}>
                    <LoadingOverlay
                        active={this.state.loading}
                        spinner
                        text='Tokenizing in the cloud...'
                        >
                        <ImportFiles handler = {this.handler}/>
                        <ShowBOW handler = {this.handler}/>
                    </LoadingOverlay>
                    <ExportBOW handler = {this.handler}/>
                    </div>
                {/* <Wordcloud handler = {this.handler}/> */}
                <script src="https://gist.github.com/elinottonson/82cf68a63ddb6318e3c1c638a784151a.js"></script>
                <div style={{width: "15%", float: "right"}}>
                    <ToolBox handler = {this.handler}/>
                </div>
            </div>
        )
    }
}

export default BOW;
