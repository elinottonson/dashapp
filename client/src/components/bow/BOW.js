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
import InputText from './InputText'

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
            loading: false,
            input: "",
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
        else if(action==4){
            this.state.input = listBOW
        }

    }
    render(){
        return (
            <div style={{width: "calc(100% - 210px)", float: "right"}}>
                <div style={{width: "100%"}}>
                        <ToolBox handler = {this.handler}/>
                </div>
                <div class="bow" style={{width: "90%"}}>
                    <LoadingOverlay
                        active={this.state.loading}
                        spinner
                        text='Tokenizing in the cloud...'
                        >
                        <ImportFiles handler = {this.handler}/>
                    </LoadingOverlay>
                </div>
                 <div class="bowView" style={{width: "90%"}}>
                 <p1 class="directions">3. View, Export, and Visualize your Bag of Words:</p1>
                        <ShowBOW handler = {this.handler}/>
                    <ExportBOW handler = {this.handler}/>
                    <Wordcloud handler = {this.handler}/>
                </div>
                
                
                <script src="https://gist.github.com/elinottonson/82cf68a63ddb6318e3c1c638a784151a.js"></script>
            </div>
        )
    }
}

export default BOW;
