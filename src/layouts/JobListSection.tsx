import { FC, useEffect, useState } from "react";
import JobListItem from "../components/JobListItem";
import SearchBar from "../components/SearchBar";

interface JobInfo {
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
  tools: string[];
}

type Props = { jobData: JobInfo[] };

const JobListSection: FC<Props> = ({ jobData }) => {
  const [tags, setTags] = useState<string[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<JobInfo[]>(jobData);

  useEffect(() => {
    if (tags.length === 0) {
      setFilteredJobs(jobData);
      return;
    }
    const lowerCasedTags = tags.map((t) => t.toLocaleLowerCase());
    setFilteredJobs(
      jobData.filter((job) => {
        const lowerCasedLanguages = job.languages.map((l) =>
          l.toLocaleLowerCase()
        );

        const lowerCasedTools = job.tools.map((t) => t.toLocaleLowerCase());

        const lowerCasedPositions = job.position.toLocaleLowerCase();

        const isLanguagesMatched = lowerCasedLanguages.some((l) =>
          lowerCasedTags.includes(l)
        );
        const isToolsMatched = lowerCasedTools.some((t) =>
          lowerCasedTags.includes(t)
        );
        const isPositionMatched = lowerCasedTags.some((p) =>
          lowerCasedPositions.includes(p)
        );

        return isLanguagesMatched || isToolsMatched || isPositionMatched;
      })
    );
  }, [tags, jobData]);

  return (
    <div className="mt-16 pb-28">
      <SearchBar
        tags={tags}
        onAddTag={(tag) => {
          if (tags.includes(tag)) {
            return;
          }
          setTags([...tags, tag]);
        }}
        onRemoveTag={(tag) => {
          setTags(tags.filter((t) => t !== tag));
        }}
        onClearTags={() => {
          setTags([]);
        }}
      />
      {filteredJobs.map((post) => (
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
