function JobCard({job}){

  return(
    <div className="card">

      <h3>{job.title}</h3>

      <p>{job.company}</p>

      <p>{job.description}</p>

      <span>{job.category}</span>

      <button>Delete</button>

    </div>
  )
}

export default JobCard