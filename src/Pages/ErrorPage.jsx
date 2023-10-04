import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  const goBackToPortfolio = () => {
    navigate("/Portfolio");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-300">
      <div className="text-center text-white">
        <h1 className="text-4xl font-extrabold mb-4">
          Oops... An error occurred!
        </h1>
        <p className="text-lg mb-8">Sorry, we couldn't find this page.</p>
        <button
          className="bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-100 hover:text-blue-600 transition duration-300"
          onClick={goBackToPortfolio}
        >
          Go Back
        </button>
      </div>
    </main>
  );
}

export default ErrorPage;
