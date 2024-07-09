
import './App1.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import { useState } from 'react';
import About from './components/About';
 

function App() {
  const [alert, setAlert] = useState(null);
  const showalert=(message,type)=>{
setAlert({
  msg:message,
})
setTimeout(() => {
  setAlert(null);
}, 1500);
  }
 
  
const [changecolor, setchangecolor] = useState("darkmode");

  const[mode,setMode]=useState('light');
 const click=()=>{
  if(mode==='light'){
    if(changecolor==='darkmode'){
    setMode('dark');
    document.body.style.backgroundColor='black';
    showalert("darkmode on ","success");
    setchangecolor("greenmode")
    }
 }
 else if(mode==='dark'){  
  setMode('green');
  document.body.style.backgroundColor='green';
  showalert("greenmode on","success");
  setchangecolor("redmode")

}
 else if(mode==='green'){  
  setMode('red');
  document.body.style.backgroundColor='red';
  showalert("redmode on","success");
  setchangecolor("Orangemode")

}

else if(mode==='red'){  
  setMode('orange');
  document.body.style.backgroundColor='orange';
  showalert("orangemode on","success");
  setchangecolor("Lightmode")

}
else{
  setMode('light');
  document.body.style.backgroundColor='white';
  showalert("whitemode on","success");
  setchangecolor("darkmode")

}
}
  return ( 
  
    <> 
        <Navbar title="Sagar" link="About" homepage="HOME" mood={mode} click={click} hi={changecolor}/>
        <Alert sap={alert}/>
        <Form hi={showalert} head="enter your thoughts" mood={mode} />
 <About/> 
 <p>hello</p>
 
    </>
  );
}

export default App;
