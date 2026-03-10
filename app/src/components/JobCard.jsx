function JobCard({job, deleteJob }){

  return(
    <div className="card">

      <h3>{job.title}</h3>

      <p>{job.company}</p>

      <p>{job.description}</p>

      <span className="category">{job.category}</span>

      <button onClick={() => deleteJob(job.id)}>Delete</button>

    </div>
  )
}

export default JobCard