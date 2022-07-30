import React,{useRef} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import '../../asset/css/custom.css'
const Home = () => {
  const urlRef = useRef();
  const navigate = useNavigate();
  const handleUrl = () => {
    navigate(urlRef.current.value);
    // console.log(urlRef)
  }
  return (
    <div className="card" style={{width: "18rem"}}>
      <div className="card-body" >
        <label htmlFor="usr">URL:</label>
        <input type="text" ref={urlRef} className="form-control mb-4" id="usr" />
        <button type="button" class="btn btn-primary" onClick={()=>handleUrl()}>Submit</button>
      </div> 
    </div>
  )
}

export default Home