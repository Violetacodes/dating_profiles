import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

  const [person, setPerson] = useState(0);
  const {id, name, description, age, image} = data[person];

  const PreviousPerson = () => {
   setPerson((person => {
     person --;
     if (person < 0) {
       return data.length -1;
     }
     return person;
   }))
  }

  const NextPerson = () => {
   setPerson((person => {
     person ++;
     if (person > data.length - 1) {
      person = 0;
    }
     return person;
   }))
  }

  return(
    <div>
        <div className='container'>
          <h1>Dating profiles</h1>
        </div>
        <div className="container">
          <img alt='photoofprofile' width="300px" src={image} />
        </div>
        <div className="container">
           <h2>{id} - {name}</h2>
        </div>
        <div className="container">
           <h3>{description}</h3>
        </div>
        <div className="container">
           <h3>{age} years old</h3>
        </div>
        <div className='btn container'>
          <button onClick={PreviousPerson}>Previous</button>
          <button onClick={NextPerson}>Next</button>
        </div>
    </div>
  )
}

export default App;
