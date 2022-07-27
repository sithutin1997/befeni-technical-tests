import { useState } from 'react';
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
      <button>Submit</button>
      <p>This is Answer!!!!!!!!!</p>
      <p>{answer}</p>
    </div>  
  );
}

export default App;
