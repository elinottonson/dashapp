import React, { Component } from 'react'
import Select from 'react-select'

function bow_options(props){
    const options = [
        { value: 'word', label: 'Word' },
        { value: 'wordPunct', label: 'Word Punctuation' },
        { value: 'sentance', label: 'Sentance' },
        { value: 'tree', label: 'Penn Tree Bank' }
      ]

      const customStyles = {
        option: (provided, state) => ({
          ...provided,
          borderBottom: '1px dotted pink',
          color: state.isSelected ? 'red' : 'blue',
          padding: 20,
        }),
        control: () => ({
          width: 200,
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
      }

      const handleChange = (e) =>{
            props.handler([], 2).tokenizer = e.value
      }
      return (
          <div>
              Select Tokenizer:
              <Select onChange= {(e)=> handleChange(e)} styles={customStyles} options={options} />
          </div>
      )
}
export default bow_options