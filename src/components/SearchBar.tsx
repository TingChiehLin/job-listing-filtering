import { FC, useState } from "react";

import TagBox from "../components/TagBox";

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

interface SearchBarProps {
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
  onClearTags: () => void;
}

const SearchBar: FC<SearchBarProps> = ({
  tags,
  onAddTag,
  onRemoveTag,
  onClearTags,
}) => {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <div
      className="
                  flex 
                  items-center
                  border
                  shadow-md
                  w-4/5
                  h-16
                  mx-auto
                  mb-12
                  pr-6
                  rounded-md
      "
    >
      <div className="px-6 cursor-pointer">
        {searchText.length > 0 ? (
          <AiOutlineClose
            size={"2rem"}
            onClick={() => {
              setSearchText("");
            }}
          />
        ) : (
          <AiOutlineSearch size={"2rem"} onClick={() => {}} />
        )}
      </div>
      <div className="w-full flex items-center justify-between">
        <input
          className=" 
                    outline-none
                    w-4/5
                    h-full                    
                    text-gray-700
                  "
          type={"search"}
          placeholder={"Please type search word"}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              onAddTag(searchText);
              setSearchText("");
            }
          }}
          value={searchText}
        />
        <div className="flex justify-center items-center gap-4">
          {tags.map((tag: string, index) => (
            <TagBox key={`tag-${index}`} tag={tag} onDelete={onRemoveTag} />
          ))}
        </div>
      </div>
      <div className="ml-4 cursor-pointer">
        {tags.length > 0 && <button onClick={onClearTags}>CLEAR</button>}
      </div>
    </div>
  );
};

export default SearchBar;
