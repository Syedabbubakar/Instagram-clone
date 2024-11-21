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
      await axios.post("http://localhost:5000/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Post created successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to create post.");
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label>Title:</label>
    //     <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
    //   </div>
    //   <div>
    //     <label>Description:</label>
    //     <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
    //   </div>
    //   <div>
    //     <label>Image:</label>
    //     <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
    //   </div>
    //   <button type="submit">Create Post</button>
    // </form>
    // <form onSubmit={handleSubmit}>
    // <div
    //   className="card input-filed"
    //   style={{
    //     margin: "30px auto",
    //     maxWidth: "500px",
    //     padding: "20px",
    //     textAlign: "center",
    //   }}
    // >
    //   <input
    //     type="text"
    //     placeholder="Title"
    //     value={title}
    //     onChange={(e) => setTitle(e.target.value)}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Description"
    //     value={description}
    //     onChange={(e) => setDescription(e.target.value)}
    //   />
    //   <div className="file-field input-field">
    //     <div className="btn #64b5f6 blue darken-1">
    //       <span>Uplaod Image</span>
    //       <input type="file" onChange={(e) => setImage(e.target.files[0])} />
    //     </div>
    //     <div className="file-path-wrapper">
    //       <input className="file-path validate" type="text" />
    //     </div>
    //   </div>
    //   <button
    //     className="btn waves-effect waves-light #64b5f6 blue darken-1"
    //     type="submit"
        
    //   >
    //     Submit post
    //   </button>
    // </div>
    // </form>

    <form className="createForm" onSubmit={handleSubmit}>
      <div className="createCard">
      <div>
        <label for="title">Title:</label>
        <input className="form-control cardInput" type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />

      </div>
      <div>
        <label for="description">Description:</label>
        <input className="form-control cardInput" type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
  <label for="image">Image:</label>
  <input 
    className="form-control cardInput" 
    type="file" 
    id="image" 
    onChange={(e) => setImage(e.target.files[0])} 
    required 
  />
  <label for="image">Choose a file</label>
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
