import React from 'react'

export default function Alert(props) {
  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
  
    <div style= {{height: '50px'}}>
   { props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
         <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
</div>}
</div>


  )
}
// Here we are using new syntax that is  props.alert && = if props.alert is null then false means it will not go
// further if props.alert is true i.e. not null then further part executes succesfully
