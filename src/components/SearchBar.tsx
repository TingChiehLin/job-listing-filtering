import { ChangeEvent, FC, useState } from "react";

import Tag from "../models/Tag.model";

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const SearchBar: FC = () => {
  const [isTriger, setIsTriger] = useState<boolean>(false);
  const searchJobListHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    console.log(inputValue);
  };

  const clearJobListHandler = () => {};

  const switchIconHanlder = () => {
    setIsTriger(!isTriger);
  };

  window.addEventListener("keypress", (event: KeyboardEvent) => {
    if (event.key === "Enter") {
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
      />
      <ul
        className="absolute top-[62px] right-[12.5%] -mt-10 cursor-pointer"
        onClick={switchIconHanlder}
      >
        {isTriger ? (
          <AiOutlineClose size={"1.5rem"} />
        ) : (
          <AiOutlineSearch size={"1.5rem"} />
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
