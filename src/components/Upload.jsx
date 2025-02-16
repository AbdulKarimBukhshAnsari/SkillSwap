import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function Upload() {
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("images");
  const [status, setStatus] = useState("public");
  const [projectPrice, setProjectPrice] = useState("");

  // Handle file drop
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      )
    );
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*,video/*,.pdf",
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 p-6 gap-6">
      {/* Left: Drag and Drop Section */}
      <div
        {...getRootProps()}
        className="w-full md:w-1/2 p-6 border-2 border-green-500 border-dashed rounded-lg flex flex-col items-center justify-center bg-white cursor-pointer"
      >
        <input {...getInputProps()} />
        <p className="text-gray-600 text-lg text-center">Drag & Drop files here or click to select</p>

        {/* Show uploaded files */}
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {files.map((file, index) => (
            <div key={index} className="relative w-24 h-24 border rounded overflow-hidden">
              {file.type.startsWith("image") ? (
                <img src={file.preview} alt="Preview" className="w-full h-full object-cover" />
              ) : file.type.includes("video") ? (
                <video src={file.preview} className="w-full h-full object-cover" controls />
              ) : (
                <p className="text-center text-sm">{file.name}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right: Form Section */}
      <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-700 mb-4 text-center md:text-left">Upload Details</h2>

        <input
          type="text"
          placeholder="Add Title"
          className="border border-gray-300 p-3 rounded w-full mb-3 focus:ring-2 focus:ring-green-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Add Description"
          className="border border-gray-300 p-3 rounded w-full mb-3 focus:ring-2 focus:ring-green-400 h-24"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <input
          type="text"
          placeholder="Add Tags (comma separated)"
          className="border border-gray-300 p-3 rounded w-full mb-3 focus:ring-2 focus:ring-green-400"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <select
          className="border border-gray-300 p-3 rounded w-full mb-3 focus:ring-2 focus:ring-green-400"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="images">Images</option>
          <option value="videos">Videos</option>
          <option value="documents">Documents</option>
          <option value="snippets">Snippets</option>
        </select>

        <select
          className="border border-gray-300 p-3 rounded w-full mb-3 focus:ring-2 focus:ring-green-400"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="paid">Paid</option>
        </select>

          {status === "paid" ?
            <input
              type="number"
              placeholder="Project Price (if applicable)"
              className="border border-gray-300 p-3 rounded w-full mb-3 focus:ring-2 focus:ring-green-400"
              value={projectPrice}
              onChange={(e) => setProjectPrice(e.target.value)}
            /> : ""

          }

        <button className="bg-green-500 text-white px-6 py-3 rounded-full w-full text-lg font-semibold hover:bg-green-600 transition">
          Upload
        </button>
      </div>
    </div>
  );
}
