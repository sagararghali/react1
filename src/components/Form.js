import React,{useState} from 'react'

export default function Form(props) {
  const[count, setCount]=useState();
   

  const change=(event)=>{
    console.log(onchange);
    setCount(event.target.value);
  }
  
const upcaseclick=()=>{
let newtext=count.toUpperCase();
setCount(newtext);
props.hi("converted to uppercase","success");
}

const downcaseclick=()=>{
  let newtext=count.toLowerCase();
  setCount(newtext);
  props.hi("converted to lowercase","success");

  }
  const extspace=()=>{
    let newtext=count.split(/[ ]+/);
    setCount(newtext.join(" "));
    props.hi("extra emty space has been removed","success");

    }
 

  
  return (
  <>
  <div className={`whole text-${props.mood==='light'?'dark':'light'}`}>
    <div className="container" >
  <h1>{props.head}</h1>
<textarea placeholder='Any suggestion?' onChange={change} value={count} className='form-control'  rows="10" style={{ backgroundColor:props.mood==='light'?'white':'gray', color:props.mood==='light'?'black':'white'}}></textarea>
    <button className="btn btn-primary "  onClick={upcaseclick} >convert to uppercase</button>
    <button className="btn btn-primary mx-2"  onClick={downcaseclick} >convert to lowercase</button>
    <button className="btn btn-primary mx-2"  onClick={extspace} >remove extra space</button>


    
    </div>
 <div className="container my-3">
<h3>hello here is your word and characters couter</h3>
{/* <p>{count.length} letters and {count.split(" ").length} words</p>
<p>{0.008* count.split(" ").length} minutes to read</p> */}
<h4>preview all text:</h4>
<p>{count}</p>
</div>
</div>
 </>
  )
}
  

