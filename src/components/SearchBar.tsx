import { ChangeEvent, FC, useState } from "react";
import { searchFieldActions } from "../store/searchField";

import Tag from "../models/Tag.model";

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
    <div className="relative">
      <ul className="absolute top-[62px] left-52 -mt-10 cursor-pointer">
        {searchText.length > 0 ? (
          <AiOutlineClose
            size={"1.5rem"}
            onClick={() => {
              setSearchText("");
            }}
          />
        ) : (
          <AiOutlineSearch size={"1.5rem"} onClick={() => {}} />
        )}
      </ul>
      <input
        className="
                    border
                    shadow-md
                    block
                    w-4/5
                    h-16
                    mx-auto
                    mb-12
                    pl-16
                    text-gray-700
                    rounded-md
                    outline-none
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
      <div className="flex justify-center items-center gap-6 absolute top-4 left-[28rem]">
        {tags.map((tag: string, index) => (
          <TagBox key={`tag-${index}`} tag={tag} onDelete={onRemoveTag} />
        ))}
      </div>
      <ul className="absolute top-[62px] right-[12.5%] -mt-10 cursor-pointer">
        {tags.length > 0 && <button onClick={onClearTags}>CLEAR</button>}
      </ul>
    </div>
  );
};

export default SearchBar;
