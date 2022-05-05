import React from 'react';
import axios from 'axios'

class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Please write an essay about your favorite DOM element.'
      };
      this.handler = props.handler;
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
     this.handler(event.target.value, 4);
    }
  
    handleSubmit(event) {
        this.handler([], 3);
        var tokenizer = this.handler([], 2).tokenizer

        var punct_option = this.handler([], 2).punct
        var punct = 'n'
        if(punct_option){
          punct = 'y'
        }
        else{
          punct = 'n'
        }

        var stop_option = this.handler([], 2).stop
        var stop = 'n'
        if(stop_option){
          stop = 'y'
        }
        else{
          stop = 'n'
        }

        var cap_option = this.handler([], 2).cap
        var cap = 'n'
        if(cap_option){
          cap = 'y'
        }
        else{
          cap = 'n'
        }
          const binaryStr =  this.handler([], 2).input
          console.log(binaryStr)
          const loader = document.querySelector('#loader')
          console.log(punct)
          axios.post('/getBOW', 
          {
            'text':(binaryStr.toString()),
            'tokenizer':(tokenizer.toString()), 
            'cap':(cap.toString()), 
            'stop':(stop.toString()),
            'punct':(punct.toString())
          }).then((res) => { 
            var sortable=[];
            for(var key in res.data)
              if(res.data.hasOwnProperty(key))
                sortable.push([key, res.data[key]]); // each item is an array in format [key, value]
            
            // sort items by value
            sortable.sort(function(a, b)
            {
              var x=a[1],
                y=b[1];
              return x>y ? -1 : x<y ? 1 : 0;
            });
            console.log(sortable);
            this.handler(sortable, 1)
            this.handler([], 2).loading = false
          }).catch((err) => console.log(err.response.data));
        }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default EssayForm;