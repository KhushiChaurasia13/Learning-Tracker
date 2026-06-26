import React from 'react'

const NonEmpty = ({topics , setTopics}) => {
  return (
   <>
   <div>
    <span>Tasks</span>
    <p>No of task : {topics.length}</p>
   </div>
   <div>
    <span>Pending</span>
   {/* pending code ignore it */}
   </div>
   <div></div>
   </>
  )
}

export default NonEmpty