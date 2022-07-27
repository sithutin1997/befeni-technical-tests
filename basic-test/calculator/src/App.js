import { useState } from 'react';
import {handleAnswer} from './Helper'
function App() {
  const [instruction,setInstruction] = useState('');
  const [answer,setAnswer] = useState('');
  return (
    <div className="App">
      <input 
        type="text"
        value={instruction}
        onChange={e=>setInstruction(e.target.value)}
      />
      <button onClick={()=>handleAnswer(instruction,setInstruction,setAnswer)}>Submit</button>
      <p>This is Answer!!!!!!!!!</p>
      <p>{answer}</p>
    </div>  
  );
}

export default App;
