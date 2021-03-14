import React, {useEffect} from 'react';
import './App.css';
import axios from 'axios';
// import axios from ''

function App() {
  const [text, setText] = React.useState({});
  useEffect(() => {
          // .then(res => res.json())

      // .then(res => setText(res.text));

    // axios.get('http://localhost:8080/main/hello')
    //   .then()

    async function fetchData() {
      const responce = await fetch('http://localhost:8080/main/hello');
      const data = await responce.json();
      setText(data.text);
    } 
    fetchData();
  }, [])
    return (
    <div className="App">
      <h1>{text}</h1>
    </div>
  );
}

export default App;
