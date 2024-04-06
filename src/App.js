
import './App1.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import { useState } from 'react';
// import About from './components/About';

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

  const[mode,setMode]=useState('light');
 const click=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='black';
    showalert("darkmode on ","success");
 }

 else{  
  setMode('light');
  document.body.style.backgroundColor='white';
  showalert("darkmode off","success");


}}
  return ( 
  
    <> 
        <Navbar title="Sagar" link="connect with" homepage="HOME" mood={mode}  click={click}/>
        <Alert sap={alert}/>
        <Form hi={showalert} head="enter your thought" mood={mode} />
{/* <About/> */}
    </>
  );
}

export default App;
