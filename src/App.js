import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if(mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "light";
    }
  }
  return (
    <>
  <Navbar tittle= 'TextUtils' mode={mode} toggleMode={toggleMode}/>
  <div className='container my-3' >
  <Textarea heading="Enter the Text" mode={mode}/>
  {/* <About/> */}
  </div>
    </>
  );
}

export default App;
