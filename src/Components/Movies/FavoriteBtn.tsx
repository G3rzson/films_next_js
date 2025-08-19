"use client";

import { updateFavoriteMovie } from "@/Functions/updateFavoriteMovie";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

type Props = {
  isFavorite: boolean;
  id: string;
};

export default function FavoriteBtn({ isFavorite, id }: Props) {
  function handleClick() {
    updateFavoriteMovie(id, isFavorite);
  }

  return (
    <button
      className="flex items-center justify-end w-full mt-2"
      onClick={() => handleClick()}
    >
      {isFavorite ? (
        <IoMdHeart className="cursor-pointer" color="orangered" size={24} />
      ) : (
        <IoIosHeartEmpty
          className="cursor-pointer"
          color="orangered"
          size={24}
        />
      )}
    </button>
  );
}
