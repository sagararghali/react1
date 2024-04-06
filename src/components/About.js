import React,{useState} from 'react'

export default function About() {

    
const[count, setCount]=useState(
    {
        color:'black',
        backgroundColor:'white' 
        
        }
)
const[chbar, setChbar]=useState('dark mode')

const mode=()=>{
  if(count.color==='white'){
setCount({
    color:'black',
    backgroundColor:'white' ,
    border:'1px solid black'

    
 })
 setChbar('dark mode')
  }
  else{
    setCount({
        color:'white',
        backgroundColor:'black',
        border:'1px solid white'
        
     })
     setChbar('light mode')
  }

}

    

  return (
            <div className='mainbox' style={count}>
                <h2 className="hello my-3">About Us</h2>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={count} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={count}>
<p>hello</p>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={count} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={count}>
<p>hiii</p>            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={count} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={count}>
<p>byeeeeee</p>            </div>
            </div>
        </div>
        </div>
        <div className="cont my-2">
        <button type="button" className="btn btn-primary" onClick={mode} >{chbar}</button>
        </div>
            </div>
  )
}
