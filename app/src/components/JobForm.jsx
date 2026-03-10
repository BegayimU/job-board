import { useState } from "react"

function JobForm({ addJob }) {
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("Frontend")

  const handleSubmit = (e) => {
    e.preventDefault()
    const newJob = { id: Date.now(), title, company, description, category }
    addJob(newJob)
    setTitle("")
    setCompany("")
    setDescription("")
  }

  return (
    <div id="post-job" className="card">
      <h2>Create New Job</h2>

      <form onSubmit={handleSubmit}>

        <div className="field-group">
          <label>Job Title</label>
          <div className="input-group">
            <input
              placeholder="e.g. Senior React Developer"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div className="field-group">
          <label>Company</label>
          <div className="input-group">
            <input
              placeholder="e.g. Tech Corp"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
        </div>

        <div className="field-group">
          <label>Description</label>
          <div className="input-group">
            <textarea
              placeholder="Job description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="field-group">
          <label>Category</label>
          <div className="input-group select-wrapper">
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option>Frontend</option>
              <option>Backend</option>
              <option>Design</option>
              <option>Marketing</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn-add">+ Add Job</button>

      </form>
    </div>
  )
}

export default JobForm