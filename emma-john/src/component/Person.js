import React from 'react';

function Person(props) {
  
    const personStyle={
        border:'2px solid grey',
        margin:'10px',
        padding:'5px',
        backgroundColor:'grey',
        borderRadius:'5px',
        boxShadow:'1px 1px 10px grey'
      }
      const nameHighlight={
        color:'white',
        textTransform:'uppercase'

      }
      const image={
        height:'100px',
        width:'200px'
      }
      return(
        <div style={personStyle}>
          <h2 style={nameHighlight}>I am {props.name}</h2>
          <h3 >I am {props.age} Years old</h3>
          <img style={image} src={props.image} alt="" srcset="" />
          <h4>This is my {props.girls}</h4>
        </div>
      )
    }
    export default Person;