import { useState } from 'react'

function App() {

  const [ job, setJob ] = useState()
  const [ jobs, setJobs ] = useState(() => {
    const listJobs = JSON.parse(localStorage.getItem('jobs'))
    return listJobs
  })

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
      <ul>
        {jobs.map((job,index) =>
          (<li key={index}>{job} <button onClick ={() => handleDelete(job)}>Delete</button></li>)
        )}
      </ul>
    </div>
  )
}

export default App;
