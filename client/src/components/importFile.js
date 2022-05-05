
import {useDropzone} from 'react-dropzone';
import React, {useCallback} from 'react'
import axios from 'axios'
import styled from 'styled-components';

function ImportFiles(props){
      var inputText = "";
      const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
          props.handler([], 3);
          const reader = new FileReader()
          var tokenizer = props.handler([], 2).tokenizer

          var punct_option = props.handler([], 2).punct
          var punct = 'n'
          if(punct_option){
            punct = 'y'
          }
          else{
            punct = 'n'
          }

          var stop_option = props.handler([], 2).stop
          var stop = 'n'
          if(stop_option){
            stop = 'y'
          }
          else{
            stop = 'n'
          }

          var cap_option = props.handler([], 2).cap
          var cap = 'n'
          if(cap_option){
            cap = 'y'
          }
          else{
            cap = 'n'
          }

          reader.onabort = () => console.log('file reading was aborted')
          reader.onerror = () => console.log('file reading has failed')
          reader.onload = () => {
            const binaryStr = reader.result
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
              props.handler(sortable, 1)
              props.handler([], 2).loading = false
            }).catch((err) => console.log(err.response.data));
          }
          reader.readAsText(file)
        })
        
      }, [])
      const {getRootProps, getInputProps} = useDropzone({onDrop, accept: '.txt'})


  return (
    <section className="file-drop" ><p1 class="directions">2. Input a .txt File or Enter in Text:</p1>
      <div className="drop_container" {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <div class="or">OR</div>
    </section>
  );
}

export default ImportFiles;