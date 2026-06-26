import React from 'react'
import Form from '../Form/Form'
import {Link} from "react-router-dom"

const Topic = ({topics , setTopics}) => {
  const [showForm , setShowForm] = React.useState(false)  
  return (
    <>
      <ul>
        {topics.map((topic)=>{
          return (<li key={topic.id}>
            <Link to={`/topics/${topic.id}`}>
              {topic.title}
            </Link>
          </li>)
        })}
      </ul>
      <button onClick={()=>{setShowForm(true)}}>+Add</button>
      {showForm && <Form setShowForm={setShowForm}  setTopics={setTopics} mode="add"/>}
    </>
  )
}

export default Topic