import React from 'react'
import NonEmpty from './NonEmpty'
import Empty from './Empty'

const Home = ({topics , setTopics}) => {

  return (
   <>
    {(topics.length)?<NonEmpty topics={topics} setTopics={setTopics}/>:<Empty setTopics={setTopics}/>}
   </>
  )
}

export default Home