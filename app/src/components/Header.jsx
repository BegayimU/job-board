function Header({ search, setSearch }) {
  return (
    <header className="header">

      <div className="logo">
        <div className="logo-icon">💼</div>
        <span>Job Board</span>
      </div>

      <nav>
        <a href="#jobs" className="nav-link">Find Jobs</a>
        <a href="#" className="nav-link">Categories</a>
        <a href="#footer" className="nav-link">Contacts</a>
        <a href="#post-job" className="nav-link nav-btn">Post Job</a>
      </nav>

      <div className="header-search">
        <span className="search-icon">🔍</span>
        <input
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

    </header>
  )
}

export default Header