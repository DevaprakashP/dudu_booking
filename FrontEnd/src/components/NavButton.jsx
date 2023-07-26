import React from "react";

export default function NavButton({ name1, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center text-sm bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-9 border border-blue-500 hover:border-transparent rounded"
    >
      {name1}
    </button>
  );
}
