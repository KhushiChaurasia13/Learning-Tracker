import { useEffect, useState } from 'react'
import {BrowserRouter , Route , Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Topic from './components/Topic/Topic';
import TopicDetail from './components/Topic/TopicDetail';

function App() {
  const [topics , setTopics] = useState(()=>{
    return JSON.parse(localStorage.getItem("topics")) || []
  });
  
    useEffect(()=>{
      localStorage.setItem("topics" , JSON.stringify(topics));
    },[topics , setTopics])

  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Layout/>}>
          <Route index element={<Home topics={topics} setTopics={setTopics}/>}/>
          <Route path='topics' element={<Topic topics={topics} setTopics={setTopics}/>} />
          <Route path='topics/:id'element={<TopicDetail topics={topics} setTopics={setTopics} />}/>
         </Route>
        </Routes>
      </BrowserRouter>
    </>
)
}
export default App
