import React from 'react'

export default function Alert(props) {
  return (
   
       props.sap&& <div className="alert alert-success" role="alert">
  
  <strong><p>{props.sap.type}</p><p>{props.sap.msg}</p></strong>
</div>
  )
}
