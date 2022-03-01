
import {useDropzone} from 'react-dropzone';
import React, {useCallback} from 'react'
import axios from 'axios'
import styled from 'styled-components';

function ImportFiles(props){
      const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
          const reader = new FileReader()
    
          reader.onabort = () => console.log('file reading was aborted')
          reader.onerror = () => console.log('file reading has failed')
          reader.onload = () => {
            const binaryStr = reader.result
            console.log(binaryStr)
            const loader = document.querySelector('#loader')
            loader.style.display = 'block'
            axios.post('http://localhost:3001/getBOW', {'text':(binaryStr.toString())}).then((res) => { 
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
              loader.style.display = 'none'
            }).catch((err) => console.log(err));
          }
          reader.readAsText(file)
        })
        
      }, [])
      const {getRootProps, getInputProps} = useDropzone({onDrop, accept: '.txt'})

  return (
    <section className="file-drop">
      <div className="drop_container" {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <div className='bow'>
      </div>
    </section>
  );
}

export default ImportFiles;