import JobCard from "./JobCard"

function JobList({ jobs, deleteJob }) {
  return (
    <div id="jobs">
      <h2>Available Jobs</h2>
      {jobs.map(job => (
        <JobCard key={job.id} job={job} deleteJob={deleteJob} />
      ))}
    </div>
  )
}

export default JobList