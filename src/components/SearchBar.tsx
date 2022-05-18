import { ChangeEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { searchFieldActions } from "../store/searchField";

import Tag from "../models/Tag.model";

import TagBox from "../components/TagBox";

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const SearchBar: FC = () => {
  const dispatch = useDispatch();
  const [tags, setTags] = useState<Tag[]>([]);
  const [searchText, setsearchText] = useState<string>("");
  const [isTriger, setIsTriger] = useState<boolean>(false);

  const searchJobListHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    window.addEventListener("keypress", (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        setTags([
          ...tags,
          { id: Math.random().toString(), searchText: inputValue },
        ]);
        setsearchText("");
      }
    });
    setsearchText(inputValue);
    dispatch(searchFieldActions.searchFieldTextHandler(inputValue));
    setIsTriger(true);
  };

  const removeJobItemHandler = (tagId: string) => {
    if (tags.length === 0) return;
    setTags((prevTags) => prevTags.filter((tag) => tag.id !== tagId));
    dispatch(searchFieldActions.searchFieldTextHandler(searchText));
  };

  const clearJobListHandler = () => {
    setTags([]);
    setsearchText("");
  };

  const switchIconHanlder = () => {
    setIsTriger(!isTriger);
  };

  return (
    <div className="relative">
      <input
        className=" 
                    border
                    shadow-md
                    block
                    w-4/5
                    h-16
                    mx-auto
                    mb-12 
                    pl-12
                    text-gray-700
                    rounded-md
                    outline-none
                  "
        type={"search"}
        placeholder={"Please type search word"}
        onChange={searchJobListHandler}
        value={searchText}
      />
      <div className="flex justify-center items-center gap-6 absolute top-4 left-[28rem]">
        {tags.map((tag: Tag) => (
          <TagBox
            key={tag.id}
            id={tag.id}
            text={tag.searchText}
            removeJobItemHandler={removeJobItemHandler}
          />
        ))}
      </div>
      <ul
        className="absolute top-[62px] right-[12.5%] -mt-10 cursor-pointer"
        onClick={switchIconHanlder}
      >
        {isTriger ? (
          <AiOutlineClose size={"1.5rem"} onClick={clearJobListHandler} />
        ) : (
          <AiOutlineSearch size={"1.5rem"} onClick={clearJobListHandler} />
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
