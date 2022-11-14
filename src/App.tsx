import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import JobListSection from "./layouts/JobListSection";

import { jobDatas } from "./models/data";

const App = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <JobListSection jobData={jobDatas} />
      <Footer />
    </div>
  );
};

export default App;
