import { useState, useEffect } from "react";
import Header from "./components/Header";
import JobForm from "./components/JobForm";
import JobFilter from "./components/JobFilter";
import JobList from "./components/JobList";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import JobCard from "./components/JobCard";

 function App() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  // Загрузка вакансий из Firestore
  useEffect(() => {
    const fetchJobs = async () => {
      const querySnapshot = await getDocs(collection(db, "jobs"));
      const jobsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setJobs(jobsData);
    };
    fetchJobs();
  }, []);

  // Добавление вакансии
  const addJob = async (newJob) => {
    const docRef = await addDoc(collection(db, "jobs"), newJob);
    setJobs([...jobs, { ...newJob, id: docRef.id }]);
  };

  // Удаление вакансии
  const deleteJob = async (id) => {
    await deleteDoc(doc(db, "jobs", id));
    setJobs(jobs.filter(job => job.id !== id));
  };

  // Фильтрация по поиску и категории
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === "All" || job.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Header />
      

      <div className="container">
        <div className="grid">
          
          <JobForm addJob={addJob} />

          <div>
            <JobFilter search={search} setSearch={setSearch} />

            <JobList jobs={filteredJobs} deleteJob={deleteJob} />
            
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;