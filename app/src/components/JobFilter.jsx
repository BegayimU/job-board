// function JobFilter({ search, setSearch }) {
//   return (
//     <div className="card">
//       <h3>Search & Filter</h3>

//       <input
//         type="text"
//         placeholder="Search jobs..."
//         value={search}
//         onChange={e => setSearch(e.target.value)}
//       />

//       <select>
//         <option>All</option>
//         <option>Frontend</option>
//         <option>Backend</option>
//         <option>Design</option>
//         <option>Marketing</option>
//       </select>
//     </div>
//   )
// }

// export default JobFilter;

// JobFilter.jsx
function JobFilter({ search, setSearch, categoryFilter, setCategoryFilter }) {
  return (
    <div className="card filter-card">
      <h3>Search & Filter</h3>
      <div className="filter-row">
        <div className="search-input">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by job title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option>All Categories</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>Design</option>
          <option>Marketing</option>
        </select>
      </div>
    </div>
  );
}

export default JobFilter;