import React, { useState } from "react";
import Error from "./Error";

export default function Form({setSearch}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false);

  const onChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    console.log("submit");
    setSearch(searchTerm)
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search an image"
            onChange={onChange}
          />
        </div>
        <div className="form-group col-md-4">
          <button type="submit" className="btn btn-lg btn-danger btn-block">
            Search
          </button>
        </div>
      </div>
      {error && <Error message="Add a search term" />}
    </form>
  );
}
