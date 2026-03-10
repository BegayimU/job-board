import { useState } from "react"
import Header from "./components/Header"
import JobForm from "./components/JobForm"
import JobFilter from "./components/JobFilter"
import JobList from "./components/JobList"

function App() {
  const [jobs, setJobs] = useState([])
  const addJob = (newJob) => {
  setJobs([...jobs, newJob])
}

  return (
    <div>

      <Header />

      <div className="container">

        <div className="grid">

          <JobForm addJob={addJob} />

          <div>
            <JobFilter />
            <JobList jobs={jobs} />
          </div>

        </div>

      </div>

    </div>
  )
}

export default App