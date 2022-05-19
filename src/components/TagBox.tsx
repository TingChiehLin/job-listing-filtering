import { FC } from "react";

import { AiOutlineClose } from "react-icons/ai";

interface TagProps {
  tag: string;
  onDelete: (tag: string) => void;
}

const TagBox: FC<TagProps> = ({ tag, onDelete }) => {
  return (
    <div className="flex justify-center items-center bg-Light-Grayish-Cyan">
      <p className="text-Dark-Cyan font-bold mx-2">{tag}</p>
      <AiOutlineClose
        size={"2rem"}
        className="px-1 py-1 font-bold text-white bg-Dark-Cyan hover:bg-Very-Dark-Grayish-Cyan"
        onClick={() => onDelete(tag)}
      />
    </div>
  );
};

export default TagBox;
