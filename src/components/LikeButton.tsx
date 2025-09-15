"use client";

import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  }
    return (
    <button
      onClick={handleLike}
      className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
    >
      <FaThumbsUp />
      <span>{likes} Curtidas</span>
    </button>
  );
}