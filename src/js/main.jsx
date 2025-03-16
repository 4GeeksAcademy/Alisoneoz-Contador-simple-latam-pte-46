import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

function SimpleCounter(props){
  return (
  <div className="container">
    <div>🕔</div> 
     <div>{props.digitoCuatro}</div>
     <div>{props.digitoTres}</div>
     <div>{props.digitoDos}</div>
     <div>{props.digitoUno}</div>
  </div>
  
  )
}

SimpleCounter.propTypes={
  digitoCuatro:PropTypes.number,
  digitoTres:PropTypes.number,
  digitoDos:PropTypes.number,
  digitoUno:PropTypes.number,

}

let counter = 0;

setInterval(function(){
  const cuatro = Math.floor(counter/1000);
  const tres = Math.floor(counter/100);
  const dos = Math.floor(counter/10);
  const uno = Math.floor(counter/1);

  counter++

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <SimpleCounter digitoCuatro={cuatro} digitoTres={tres} digitoDos={dos} digitoUno={uno}/>    
    </React.StrictMode>,)

}, 1000)



