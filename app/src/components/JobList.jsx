import { jobs } from "../data/fakeJobs"
import JobCard from "./JobCard"

function JobList(){

  return(
    <div>

      <h2>Available Jobs</h2>

      {jobs.map(job => (
        <JobCard key={job.id} job={job}/>
      ))}

    </div>
  )
}

export default JobList