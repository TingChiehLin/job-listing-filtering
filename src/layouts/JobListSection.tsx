import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";
import JobListItem from "../components/JobListItem";
import SearchBar from "../components/SearchBar";

interface dataType {
  id: number;
  company: string;
  logo: string;
  news: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: any[];
}

type Props = { jobData: dataType[] };

const JobListSection: FC<Props> = ({ jobData }) => {
  const searchText = useSelector((state: RootState) => state.searchField.text);
  const filterJobListing = jobData.filter((job) => {
    const lowerCasedSearchText = searchText.toLocaleLowerCase();
    if (lowerCasedSearchText.length === 0) return true;
    const filterJobPost =
      job.languages
        .map((language) => language.toLocaleLowerCase())
        .includes(lowerCasedSearchText) ||
      job.tools
        .map((tool) => tool.toLocaleLowerCase())
        .includes(lowerCasedSearchText);
    return filterJobPost;
  });

  return (
    <div className="-mt-10">
      <SearchBar />
      {filterJobListing.map((post) => (
        <JobListItem
          key={post.id}
          id={post.id}
          company={post.company}
          logo={post.logo}
          news={post.news}
          featured={post.featured}
          position={post.position}
          role={post.role}
          level={post.level}
          postedAt={post.postedAt}
          contract={post.contract}
          location={post.location}
          languages={post.languages}
          tools={post.tools}
        />
      ))}
    </div>
  );
};

export default JobListSection;
