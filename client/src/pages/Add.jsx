import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const Add = () => {
  const [book,setbook] = useState({
    title: "",
    desc:"",
    cover:""
  })
 const navigate = useNavigate();
  const handleChange = (e) => {
    setbook(prev=>({...prev, [e.target.name]: e.target.value }))
  };
  const handleClick = async(e) => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/books",book)
      navigate("/")
    }catch(err){
      console.log(err);
      
    }
  }
  console.log(book)
  return (
    <div className='form'>
      <h1>add product</h1>
      <input type='text' placeholder='title' onChange={handleChange} name='title'/> 
      <br />
      <input type='desc' placeholder='desc' onChange={handleChange}  name='desc'/> 
      <br />
      <input type='cover' placeholder='cover' onChange={handleChange} name='cover'/> 
      <hr />
      <button onClick={handleClick}> Home</button>
    </div>
  )
}

export default Add