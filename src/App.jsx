import { useState, useEffect } from "react";
import JobInfo from "./JobInfo";
import Button from "./Button";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <Button
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />

      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
}

export default App;
