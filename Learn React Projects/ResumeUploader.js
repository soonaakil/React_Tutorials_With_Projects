import React, { useState } from 'react';

const ResumeUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState(null);

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

    setUploaded(true);
    setError(null);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Resume Uploader</h2>
      <input
        className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        type="file"
        onChange={handleFileChange}
      />
      {error && (
        <p className="text-sm text-red-500 mt-2">{error}</p>
      )}
      <button
        className="block w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500 mt-4"
        onClick={handleUpload}
      >
        Upload Resume
      </button>
      {uploaded && (
        <p className="text-sm text-green-500 mt-4">Resume uploaded successfully</p>
      )}
      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mt-4">
        {selectedFile && (
          <p className="text-sm text-gray-500 mt-2">{selectedFile.name}</p>
        )}
      </div>
    </div>
  );
};

export default ResumeUploader;
