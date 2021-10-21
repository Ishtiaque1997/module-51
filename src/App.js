import logo from './logo.svg';
import './App.css';
// import Card from './Components/Card/News';
import { Button, Col, Row, Spinner} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Article from './Components/Article/Article';

function App() {

const[news,setNews]=useState([])
useEffect(()=>{
 fetch('https://newsapi.org/v2/everything?q=Apple&from=2021-10-21&sortBy=popularity&apiKey=3025022114b64353b51a53d9676aedbb')
 .then(res=>res.json())
 .then(data=>setNews(data.articles))
},[])
  
  return (
   // bootstrap demo
   <div className="App">
   <Row xs={1} md={2} className="g-4">
    {
      news.map(nw=><Article news={nw}></Article>)
    }
</Row>
    
  </div>
  
  
  

  );
}

export default App;
