import React, { useState } from "react";

const DownloadButton = ({ fileName, downloadUrl }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    try {
      setIsDownloading(true);

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = fileName;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error downloading file:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className={`download-button transform ${
        isDownloading ? "opacity-70" : "opacity-100"
      } bg-blue-500 hover:bg-blue-400 text-white px-4 sm:px-6 py-3 rounded-lg font-bold tracking-wider w-full sm:w-1/4 mt-4 sm:mt-8`}
      disabled={isDownloading}
    >
      <div className="flex justify-center items-center relative">
        <div className="svg-container">
          <svg
            className="download-icon"
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="download-arrow"
              d="M10 6L7 9M7 9L4 6M7 9V1"
              stroke="#F2F2F2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 13V14C1 14.7956 1.31607 15.5587 1.87868 16.1213C2.44129 16.6839 3.20435 17 4 17H10C10.7956 17 11.5587 16.6839 12.1213 16.1213C12.6839 15.5587 13 14.7956 13 14V13"
              stroke="#F2F2F2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {isDownloading ? (
            <div className="download-loader text-white">Downloading...</div>
          ) : (
            <svg
              className="check-svg hidden"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.4429 5.8571C11.758 5.54199 11.758 5.00882 11.4429 4.69371C11.1278 4.3786 10.5946 4.3786 10.2795 4.69371L6.293 8.68024L5.06415 7.45139C4.74904 7.13628 4.21587 7.13628 3.90076 7.45139C3.58565 7.7665 3.58565 8.29967 3.90076 8.61478L5.75824 10.4723C6.07335 10.7874 6.60652 10.7874 6.92163 10.4723L11.4429 5.8571Z"
                fill="white"
              />
            </svg>
          )}
        </div>
        <div className="button-copy pl-2 leading-none uppercase text-xs">
          {isDownloading ? "Downloading..." : "Download CV"}
        </div>
      </div>
    </button>
  );
};

export default DownloadButton;
