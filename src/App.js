import { useEffect, useState } from 'react'
import { useMemo } from 'react'



const ExpecsiveFuntion = (num) => {
  console.log('Start')
  const start = new Date()
  while((new Date() - start) < 3000)
  console.log('End', new Date() - start,' ms')
  return num * num
}

function App() {

  const [ job, setJob ] = useState()
  const [ jobs, setJobs ] = useState([])
  const [ count, setCount ] = useState(0)

  const number = useMemo(() =>{
    return ExpecsiveFuntion(10)
  },[])

  const handleClick = () => {
      setJobs(prev => {
        const newJobs = [...prev, job]
        localStorage.setItem('jobs', JSON.stringify(newJobs))
        return newJobs
      })
      setJob('')
  }

  const handleDelete = (id) => {
    setJobs(() => {
      const List = jobs.filter((item) => item !== id)
      localStorage.setItem('jobs', JSON.stringify(List))
      return List
    })
  }
  
  return(
    <div>
      <input value={job} onChange={(e) => setJob(e.target.value)}/>
      <button onClick ={handleClick}>ADD</button>
        <button onClick={() => setCount(count + 1)}>Click</button>
        <p>{count}</p>
        <p>{number}</p>
      <ul>
        {jobs.map((job,index) =>
          (<li key={index}>{job} <button onClick ={() => handleDelete(job)}>Delete</button></li>)
        )}
      </ul>
    </div>
  )
}

export default App;
