import React, { useState, useEffect } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import AnimalTech from "../components/data/Animal/AnimalTech";
import HomeButton from "../components/helper/HomeButton";

import adopt from "../assets/projects/Animal/adopt.png";
import AnimalShelter from "../assets/projects/Animal/AnimalShelter.png";
import Donate from "../assets/projects/Animal/Donate.png";
import shelter from "../assets/projects/Animal/shelter.png";

const projectImages = [adopt, AnimalShelter, Donate, shelter];

const ImageModal = ({ src, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-10 bg-gray-100 p-10 px-12 backdrop-blur">
    <div className="relative max-w-screen-md mx-auto">
      <button
        className="absolute top-0 right-0 p-2 text-red-500 text-2xl"
        onClick={onClose}
      >
        <AiFillCloseSquare />
      </button>
      <img
        alt="modal"
        className="max-w-full max-h-screen"
        src={src}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  </div>
);

const GalleryItem = ({ src, onClick }) => (
  <div className="p-1 md:p-6 bg-[#ebebeb] mb-4 rounded-lg flex justify-center items-center my-8 shadow-lg shadow-gray-200 dark:shadow-gray-900 dark:bg-gray-800 duration-300 hover:-translate-y-1">
    <div
      className="h-60 w-full rounded-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <img
        alt="gallery"
        className="block h-full w-full object-cover object-center cursor-zoom-in"
        src={src}
      />
    </div>
  </div>
);

const Animal = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (src) => {
    setSelectedImage(src);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setIsImageModalOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isImageModalOpen) {
        if (!event.target.closest(".max-w-screen-md")) {
          closeImageModal();
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isImageModalOpen]);

  return (
    <div className="min-h-screen">
      <HomeButton />
      <div className="bg-orange-200 py-16 px-12">
        <h1 className="text-3xl font-semibold mb-4 text-black">Snapshots</h1>
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projectImages.map((src, index) => (
            <GalleryItem
              key={index}
              src={src}
              onClick={() => openImageModal(src)}
            />
          ))}
        </div>
      </div>
      {isImageModalOpen && (
        <ImageModal src={selectedImage} onClose={closeImageModal} />
      )}
      <AnimalTech />
      <section className="bg-orange-200  text-white py-12">
        <div className="container mx-auto flex flex-col items-center">
          <Link
            to="/#contact"
            type="button"
            className="bg-[#755e1f] text-gray-100 mt-4 md:mt-6 w-full md:w-1/6 p-2 md:p-4 rounded-lg text-center hover:bg-orange-700 transition duration-300 ease-in-out"
          >
            Contact Me
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Animal;
