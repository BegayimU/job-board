import Header from "./components/Header"
import JobForm from "./components/JobForm"
import JobFilter from "./components/JobFilter"
import JobList from "./components/JobList"

function App() {

  return (
    <div>

      <Header />

      <div className="container">

        <div className="grid">

          <JobForm />

          <div>
            <JobFilter />
            <JobList />
          </div>

        </div>

      </div>

    </div>
  )
}

export default App