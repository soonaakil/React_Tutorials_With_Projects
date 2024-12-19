import React, { useState } from 'react';

const ResumeUploaderUI = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setError('Please select a file');
      return;
    }

    if (selectedFile.type !== 'application/pdf' && selectedFile.type !== 'application/msword' && selectedFile.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      setError('Only PDF, DOC and DOCX files are allowed');
      return;
    }

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setUploaded(true);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 100);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Resume Uploader</h2>
      <div className="flex justify-center mb-4">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 flex justify-center items-center cursor-pointer">
          <input
            className="opacity-0 absolute w-full h-full cursor-pointer"
            type="file"
            onChange={handleFileChange}
          />
          {selectedFile ? (
            <p className="text-sm text-gray-500">{selectedFile.name}</p>
          ) : (
            <p className="text-sm text-gray-500">Drag and drop or click to upload</p>
          )}
        </div>
      </div>
      {error && (
        <p className="text-sm text-red-500 mt-2">{error}</p>
      )}
      <button
        className="block w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500 mt-4"
        onClick={handleUpload}
      >
        Upload Resume
      </button>
      {progress > 0 && (
        <div className="w-full bg-gray-200 rounded-lg mt-4">
          <div
            className="bg-blue-500 text-white text-sm p-2 rounded-lg"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
      )}
      {uploaded && (
        <p className="text-sm text-green-500 mt-4">Resume uploaded successfully</p>
      )}
    </div>
  );
};

export default ResumeUploaderUI;
