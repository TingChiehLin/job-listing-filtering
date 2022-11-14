import { FC } from "react";

import TestIcon from "../assets/images/manage.png";

interface dataItemPropType {
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

const JobListItem: FC<dataItemPropType> = ({
  id,
  company,
  logo,
  news,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  return (
    <div className="w-4/5 mx-auto bg-white shadow-md hover:border-l-4 border-Dark-Cyan flex justify-between px-12 py-16">
      <div className="flex items-center">
        <img className="mr-6" alt={company} src={TestIcon} />
        <div>
          <div className="flex justify-between flex-col gap-4">
            <div className="flex  items-center gap-2">
              <p className="text-md">{company}</p>
              {news && (
                <div className="px-2 text-center bg-Dark-Cyan rounded-full font-bold text-white">
                  NEW!
                </div>
              )}
              {featured && (
                <div className="px-2 text-center bg-Very-Dark-Grayish-Cyan rounded-full text-white font-bold">
                  FEATURED
                </div>
              )}
            </div>
          </div>
          <p className="text-xl font-bold text-Dark-Cyan">{position}</p>
          <div className="flex items-center gap-2 text-Dark-Grayish-Cyan">
            <p>{postedAt}</p>
            <p>•</p>
            <p>{contract}</p>
            <p>•</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className="cursor-pointer flex justify-center items-center gap-4">
        {languages.map((item, index) => (
          <div
            key={index}
            className="px-4 py-2 text-center rounded-md bg-teal-100  hover:bg-Dark-Cyan  text-Dark-Cyan hover:text-white font-bold"
          >
            {item}
          </div>
        ))}
        {tools.map((item, index) => (
          <div
            key={index}
            className="px-4 py-2 text-center rounded-md bg-teal-100 hover:bg-Dark-Cyan text-Dark-Cyan hover:text-white font-bold"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListItem;
