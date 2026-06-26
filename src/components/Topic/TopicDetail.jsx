import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Form from '../Form/Form';

const TopicDetail = ({topics , setTopics}) => {
    const [showForm , setShowForm] = useState(false);
    const {id} = useParams();
    const topic = topics.find((t)=>t.id===Number(id))
    const Navigate = useNavigate()
    const del = () => {
      setTopics(prev => prev.filter(t => t.id !== topic.id))
      Navigate('/')
    }

   if(!topic) {
    return (
      <>
        <h1>Topic not found</h1>
        <button onClick={() => Navigate("/")}>
          ← Back to Home
        </button>
      </>
    );
  }  

  return (
   <>
   <button onClick={() => Navigate("/topics")}>←</button>
   {showForm? <Form setShowForm={setShowForm} setTopics={setTopics} topic={topic} mode="edit" /> : (
    <>
      <h1>{topic.title}</h1>
      <span>Status : {topic.status}</span>
     <div>Date : {topic.date}</div>
      {(topic.questions.length>0) && 
        <>
         <div>Questions: </div>
          <ul>
            {(topic.questions).map((q)=>(
              <li>{q}</li>
            ))}
          </ul>
        </>
      }
      <button type="button"  onClick={()=>{setShowForm(true)}}>Edit</button>
      <button type="button" onClick={del}>Delete</button>
    </>
   )}
   </>
  )
}

export default TopicDetail