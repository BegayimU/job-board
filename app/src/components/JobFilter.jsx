function JobFilter(){

  return(
    <div className="card">

      <h3>Search & Filter</h3>

      <input placeholder="Search jobs"/>

      <select>
        <option>All</option>
        <option>Frontend</option>
        <option>Backend</option>
        <option>Design</option>
        <option>Marketing</option>
      </select>

    </div>
  )
}

export default JobFilter