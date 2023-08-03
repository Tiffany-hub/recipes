import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../index.css'; // Import styles

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <form onSubmit={submitHandler} className="search-container">
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder="Search..."
          className="search-bar"
        />
      </div>
    </form>
  );
}

export default Search;
