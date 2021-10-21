import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';
import { Button, Spinner} from 'react-bootstrap';

function App() {
  
  return (
   // bootstrap demo
   <div className="App">
     <Button variant="primary">Do it</Button>
     <Spinner animation="border" role="status">
         <span className="visually-hidden">Loading...</span>
     </Spinner>
  </div>
  
  
  

  );
}

export default App;
