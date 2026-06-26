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
   <>
    <form>
        <input type="text" value={formData.title} onChange={(e)=>setFormData(prev =>({...prev , title:e.target.value}))} />
        <select  onChange={(e)=>setFormData(prev =>({...prev , status:e.target.value}))} value={formData.status}>
            <option value="notStarted">Not Started</option>
            <option value="learning">Learning</option>
            <option value="complete">Completed</option>
            <option value="practice">Practicing</option>
            <option value="revising">Revising</option>
        </select>
        <input type="text" value={question} onChange={(e)=> setQuestion(e.target.value)} />
        <button  type="button" onClick={addQuestion}>Add Question</button>
        <button type="button" onClick={()=>{
          setShowForm(false)
          Save()
          }
          }>Save</button>
    </form>
   </>
  )
}

export default Form