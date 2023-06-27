import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

function App() {
  return (
    <>
  <Navbar tittle= 'TextUtils'/>
  <div className='container my-3' >
  <Textarea heading="Enter the Text"/>
  </div>
    </>
  );
}

export default App;
