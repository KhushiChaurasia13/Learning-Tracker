import React, { useState } from 'react'
import Form from '../Form/Form'

const Empty = ({setTopics}) => {
  const [showForm , setShowForm] = useState(false)
  return (
    <>
    {showForm ? (<Form setShowForm={setShowForm} setTopics={setTopics} mode="add"/>):(
      <>
        <h1>No Task added yet</h1>
        <h3>Click on Add </h3>
        <button onClick={()=>{setShowForm(true)}}>+Add</button>
      </>
    )}
    </>
  )
}

export default Empty