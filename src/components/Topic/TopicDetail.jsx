import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Form from '../Form/Form';

const TopicDetail = ({topics , setTopics}) => {
    const [showForm , setShowForm] = useState(false);
    const {id} = useParams();
    const topic = topics.find((t)=>t.id===Number(id))
    const navigate = useNavigate()
    const del = () => {
      setTopics(prev => prev.filter(t => t.id !== topic.id))
      navigate('/')
    }

   if(!topic) {
    return (
      <>
        <h1 className="text-center m-5">Topic not found</h1>
        <button onClick={() => navigate("/topics")} className="btn btn-outline-primary d-block mx-auto">
          ← Back 
        </button>
      </>
    );
  }  

  return (
    <div className="container mt-4">
  
      <button className="btn btn-outline-primary mb-3" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {showForm? <Form setShowForm={setShowForm} setTopics={setTopics} topic={topic} mode="edit" /> : (
  
      <div className="card shadow-sm p-5">
  
        <h2 className="mb-2  fs-1 p-2 text-capitalize">{topic.title}</h2>
  
        <span className="badge bg-secondary mb-3 p-2 fs-3 w-25">
          {topic.status}
        </span>
  
        <p className="text-muted">
          Date: {topic.date}
        </p>
  
        <hr />
  
        {topic.questions.length > 0 && 
          <>
            <h5>Questions</h5>
  
            <ul className="list-group list-group-numbered mb-3">
              {topic.questions.map((q, i) => (
                <li className="list-group-item text-capitalize" key={i}>
                  {q}
                </li>
              ))}
            </ul>
          </>
        }
        <div className="d-flex gap-2">
  
          <button className="btn btn-warning" onClick={()=>{setShowForm(true)}}>
            Edit
          </button>
  
          <button className="btn btn-danger" onClick={del}>
            Delete
          </button>
  
        </div>
  
      </div>
      )}
    </div>
  );
}

export default TopicDetail