import React from "react";

export default function Error({ message }) {
  return (
    <p className="my-3 p-4 text-center alert alert-primary">
      {message}
    </p>
  );
}
