import React, { useState, useEffect } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import Header from "../components/Header";

import UploadTech from "../components/data/Uploader/UploadTech";

import Upload from "../assets/projects/Upload/Upload.png";
import upload1 from "../assets/projects/Upload/upload1.png";
import snap1 from "../assets/projects/Upload/snapshots/snap1.png";
import snap2 from "../assets/projects/Upload/snapshots/snap2.png";
import snap3 from "../assets/projects/Upload/snapshots/snap3.png";
import snap4 from "../assets/projects/Upload/snapshots/snap4.png";
import snap5 from "../assets/projects/Upload/snapshots/snap5.png";

const projectImages = [Upload, upload1];

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
  <div className="p-1 md:p-6 bg-[#fff9f9] mb-4 rounded-lg flex justify-center items-center my-8 shadow-lg shadow-gray-200 dark:shadow-gray-900 dark:bg-gray-800 duration-300 hover:-translate-y-1">
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

const CodeSnippet = ({ title, language, snap, onOpenImageModal }) => (
  <div className="bg-[#6f7481] text-white rounded-lg p-4 shadow-md">
    <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-2">
      {snap.map((snap, index) => (
        <img
          key={index}
          src={snap}
          alt={`snap ${index + 1}`}
          className="w-full md:max-w-[200px] h-auto cursor-pointer duration-300 hover:-translate-y-1"
          onClick={() => onOpenImageModal(snap)}
        />
      ))}
    </div>
    <p className="text-xs text-gray-400 mt-2">Language: {language}</p>
  </div>
);

const ImageUpload = () => {
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
      <Header />
      <div className="bg-white py-28 px-12">
        <h1 className="text-3xl font-semibold mb-2 text-black text-center">
          Snapshots
        </h1>
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
      <UploadTech />
      <section className="bg-white  text-white py-12">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-4 text-black">
            Code Snippets
          </h2>
          <div className="flex justify-center flex-wrap gap-6">
            <CodeSnippet
              snap={[snap1, snap2, snap3, snap4, snap5]}
              onOpenImageModal={openImageModal}
            />
          </div>
          <Link
            to="/#contact"
            type="button"
            className="bg-[#1d1d1c] text-gray-100 mt-4 md:mt-6 w-full md:w-1/6 p-2 md:p-4 rounded-lg text-center hover:bg-orange-700 transition duration-300 ease-in-out"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ImageUpload;
