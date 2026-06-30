import React, { useEffect, useState } from 'react'

const Form = ({setShowForm , setTopics , topic ,mode}) => {
  const [question , setQuestion] = useState("")
  const [blank , setBlank] = useState("")
  const [qBlank , setQBlank] = useState("")
  const [formData , setFormData] = useState({
    title : "",
    status : "Not Started",
    questions : [],
    date: new Date().toLocaleString(),
    id : Date.now()
  })  

 useEffect(()=>{
  if(mode==="edit" && topic){
      setFormData(topic)
    }
 },[mode , topic])

  const addQuestion = () => {
    if(question.trim() === ""){
      setQBlank("Question is required")
      return
    }
    setFormData(prev =>({...prev , questions : [...prev.questions , question]}))
    setQuestion("")
  }


  const Save = () => {
    if(formData.title.trim() === ""){
     setBlank("Title is required")
      return
    }
    if(mode==="add"){
      setTopics(prev => [...prev , formData])
    }else{
      setTopics(prev => prev.map(t => t.id === formData.id ? formData : t))
    }

    setShowForm(false);
  }

 
  return (
    <div className="container mt-4">
      <div className="card shadow p-4 text-start">
  
        <h3 className="mb-4">
          {mode === "add" ? "Add Topic" : "Edit Topic"}
        </h3>
  
        <form>
  
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              className="form-control"
              type="text"
              value={formData.title}
              onChange={(e) =>{
                setFormData(prev => ({ ...prev, title: e.target.value }))
              }}
            />
            {blank && <div className="text-danger form-text text-center">{blank}</div>}
          </div>
  
          <div className="mb-3">
            <label className="form-label">Status</label>
  
            <select
              className="form-select"
              value={formData.status}
              onChange={(e) =>
                setFormData(prev => ({ ...prev, status: e.target.value }))
              }
            >
              <option value="Not Started">Not Started</option>
              <option value="Learning">Learning</option>
              <option value="Completed">Completed</option>
              <option value="Practicing">Practicing</option>
              <option value="Revising">Revising</option>
            </select>
          </div>
  
          <div className="mb-3 ">
            <label className="form-label">Question</label>
  
            <input
              className="form-control"
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            {qBlank && <div className="text-danger form-text text-center">{qBlank}</div>}
          </div>
  
          <div className="d-flex gap-2">
  
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={addQuestion}
            >
              Add Question
            </button>
  
            <button
              type="button"
              className="btn btn-success"
              onClick={Save}
            >
              Save
            </button>
  
          </div>
  
        </form>
      </div>
    </div>
  );
}

export default Form