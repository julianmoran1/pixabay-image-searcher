import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ImageList from "./components/ImageList";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const apiCall = async () => {
      if (search === "") return;
      const imagesPerPage = 30;
      const key = "25442632-39285359a55ce3d3028c035dd";
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}&page=${currentPage}`;

      const response = await fetch(url);
      const result = await response.json();
      setImages(result.hits);

      const calculateTotalPages = Math.ceil(result.totalHits / imagesPerPage);
      setTotalPages(calculateTotalPages);

      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({behavior: "smooth"})
    };
    apiCall();
  }, [search, currentPage]);

  const previousPage = () => {
    const newCurrentPage = currentPage - 1;
    if (newCurrentPage < 1) return;
    setCurrentPage(newCurrentPage);
  };

  const nextPage = () => {
    const newCurrentPage = currentPage + 1;
    if (newCurrentPage > totalPages) return;

    setCurrentPage(newCurrentPage);
  };
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Image searcher</p>
        <Form setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <ImageList images={images} />
        {currentPage > 1 && (
          <button className="btn btn-info mr-1 mb-5" onClick={previousPage}>
            &lt;&lt; Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button className="btn btn-info ml-1 mb-5" onClick={nextPage}>
            Next &gt;&gt;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
