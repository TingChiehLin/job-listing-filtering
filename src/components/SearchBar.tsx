import { ChangeEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { searchFieldActions } from "../store/searchField";

import Tag from "../models/Tag.model";

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const SearchBar: FC = () => {
  const dispatch = useDispatch();
  const [tags, setTags] = useState<Tag[]>([]);
  const [searchText, setsearchText] = useState<string>("");
  const [isTriger, setIsTriger] = useState<boolean>(false);

  const searchJobListHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    dispatch(searchFieldActions.searchFieldTextHandler(inputValue));
    setsearchText(inputValue);
    setIsTriger(true);
  };

  const clearJobListHandler = () => {
    setsearchText("");
  };

  const switchIconHanlder = () => {
    setIsTriger(!isTriger);
  };

  window.addEventListener("keypress", (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      setTags([...tags, { id: Math.random.toString(), searchText }]);
    }
  });

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
      <div className=""></div>
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
