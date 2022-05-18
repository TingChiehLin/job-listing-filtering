import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import JobListSection from "./layouts/JobListSection";

import data from "./models/data";

const App = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <JobListSection jobData={data} />
      <Footer />
    </div>
  );
};

export default App;
