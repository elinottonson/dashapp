import React from 'react';
import ExportBOW from './ExportBOW';
import ImportFiles from '../importFile';
import ShowBOW from './ShowBOW';
import Wordcloud from './Wordcloud';


class BOW extends React.Component{
    constructor(props) {
        super(props)
        this.handler = this.handler.bind(this)
        this.state ={
            list: [],
            option: ""
        }
    }
    
    handler(listBOW, action) {
        if(action==1){
            this.state.list = listBOW;
            console.log(this.state.list)
            this.forceUpdate();
        }
        else if(action==2){
            return this.state.list;
        }
    }
    render(){
        return (
            <div className='bow'>
                <ImportFiles handler = {this.handler}/>
                <ShowBOW handler = {this.handler}/>
                <ExportBOW handler = {this.handler}/>
                <Wordcloud handler = {this.handler}/>
            </div>
        )
    }
}

export default BOW;
