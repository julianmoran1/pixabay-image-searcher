import React from "react";

export default function Image({ image }) {
  const { largeImageURL, likes, previewURL, tags, views } = image;

  // largeImageURL  likes previewURL
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">{likes} likes</p>
          <p className="card-text">{views} views</p>
        </div>
        <div className="card-footer">
          <a
            href={largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-block"
          >
            View image
          </a>
        </div>
      </div>
    </div>
  );
}
