import { FC } from "react";

import { AiOutlineClose } from "react-icons/ai";

interface TagProps {
  id: string;
  text: string;
  removeJobItemHandler: (tagId: string) => void;
}

const TagBox: FC<TagProps> = ({ id, text, removeJobItemHandler }) => {
  return (
    <div className="flex justify-center items-center bg-Light-Grayish-Cyan">
      <p className="text-Dark-Cyan font-bold mx-2">{text}</p>
      <AiOutlineClose
        size={"2rem"}
        className="px-1 py-1 font-bold text-white bg-Dark-Cyan hover:bg-Very-Dark-Grayish-Cyan"
        onClick={() => removeJobItemHandler(id)}
      />
    </div>
  );
};

export default TagBox;
