import { useState } from "react"

function JobForm({ addJob }) {

  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("Frontend")

  const handleSubmit = (e) => {
    e.preventDefault()

    const newJob = {
      id: Date.now(),
      title,
      company,
      description,
      category
    }

    addJob(newJob)

    setTitle("")
    setCompany("")
    setDescription("")
  }

  return (
    <div id="post-job" className="card">

      <h2>Create New Job</h2>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Job title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <input
          placeholder="Company"
          value={company}
          onChange={(e)=>setCompany(e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />

        <select
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
        >
          <option>Frontend</option>
          <option>Backend</option>
          <option>Design</option>
          <option>Marketing</option>
        </select>

        <button type="submit">Add Job</button>

      </form>

    </div>
  )
}

export default JobForm