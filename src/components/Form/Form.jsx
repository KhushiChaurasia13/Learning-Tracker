import React, { useEffect, useState } from 'react'

const Form = ({setShowForm , setTopics , topic ,mode}) => {
  const [question , setQuestion] = useState("")
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
    setFormData(prev =>({...prev , questions : [...prev.questions , question]}))
    setQuestion("")
  }

  const Save = () => {
    if(mode==="add"){
      setTopics(prev => [...prev , formData])
    }else{
      setTopics(prev => prev.map(t => t.id === formData.id ? formData : t))
    }
  }
 
  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
  
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
              onChange={(e) =>
                setFormData(prev => ({ ...prev, title: e.target.value }))
              }
            />
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
  
          <div className="mb-3">
            <label className="form-label">Question</label>
  
            <input
              className="form-control"
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
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
              onClick={() => {
                setShowForm(false);
                Save();
              }}
            >
              Save
            </button>
  
          </div>
  
        </form>
  
        {formData.questions.length > 0 && (
          <>
            <hr />
  
            <h5>Questions</h5>
  
            <ul className="list-group">
              {formData.questions.map((q, i) => (
                <li className="list-group-item" key={i}>
                  {q}
                </li>
              ))}
            </ul>
          </>
        )}
  
      </div>
    </div>
  );
}

export default Form