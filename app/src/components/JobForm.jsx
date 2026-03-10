function JobForm(){

  return(
    <div className="card">

      <h2>Create New Job</h2>

      <input placeholder="Job title"/>

      <input placeholder="Company"/>

      <textarea placeholder="Description"></textarea>

      <select>
        <option>Frontend</option>
        <option>Backend</option>
        <option>Design</option>
        <option>Marketing</option>
      </select>

      <button>Add Job</button>

    </div>
  )
}

export default JobForm