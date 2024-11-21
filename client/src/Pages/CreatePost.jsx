import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      await axios.post("https://instagram-clone-tghv.onrender.com/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Post created successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to create post.");
    }
  };

  return (

    <form className="createForm" onSubmit={handleSubmit}>
      <div className="createCard">
      <div>
        <label htmlFor="title">Title:</label>
        <input className="form-control cardInput" type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />

      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input className="form-control cardInput" type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
  <label htmlFor="image">Image:</label>
  <input 
    className="form-control cardInput" 
    type="file" 
    id="image" 
    onChange={(e) => setImage(e.target.files[0])} 
    required 
  />
  <label htmlFor="image">Choose a file</label>
  <div className="file-name">{image ? image.name : "No file chosen"}</div>
</div>
<div className="submitButtonContainer">
      <button type="submit">Submit Post</button>
    </div>
      </div>
    </form>
  );
};

export default CreatePost;
