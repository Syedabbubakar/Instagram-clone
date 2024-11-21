import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`)
      .then(response => {
        setTitle(response.data.title);
        setDescription(response.data.description);
      })
      .catch(error => console.error(error));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) formData.append('image', image);

    try {
      await axios.put(`http://localhost:3000/posts/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Post updated successfully!');
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Failed to update post.');
    }
  };

  return (
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
    //       <input  type="file" onChange={(e) => setImage(e.target.files[0])} />
    //     </div>
    //     <div className="file-path-wrapper">
    //       <input className="file-path validate" type="text" />
    //     </div>
    //   </div>
    //   <button
    //     className="btn waves-effect waves-light #64b5f6 blue darken-1"
    //     type="submit"
        
    //   >
    //     Update post
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

export default EditPost;
