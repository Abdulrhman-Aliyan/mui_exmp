import React, { useState } from 'react';
import Box from '@mui/material/Box';

const FileUpload = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    setSelectedFiles(files);
  };

  return (
    <Box
      sx={{
        border: isDragOver ? '2px dashed #aaa' : '2px dashed #ccc',
        borderRadius: '4px',
        padding: '20px',
        textAlign: 'center',
      }}
      onDragEnter={handleDragEnter}
      onDragOver={(e) => e.preventDefault()}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <p>Drag and drop files here</p>
      {selectedFiles.length > 0 && (
        <ul>
          {selectedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}
    </Box>
  );
};

export default FileUpload;
