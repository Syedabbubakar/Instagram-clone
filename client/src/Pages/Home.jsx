import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://instagram-clone-tghv.onrender.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  }, []);

  // Delete a post
  const deletePost = async (id) => {
    try {
      await axios.delete(`https://instagram-clone-tghv.onrender.com/posts${id}`);
      setPosts(posts.filter((post) => post._id !== id)); // Update state to remove deleted post
      alert("Post deleted successfully!");
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete the post. Please try again.");
    }
  };

  console.log(posts);
  return (
    <>
      {posts.map((post) => (
        <div className="card" key={post._id}>
          <div className="profile">
            <h4>Syed</h4>
            <h5>Somewhere</h5>
            <h6>Follow</h6>
            <img src="https://picsum.photos/200/300" alt="Profile" />
            <span>.</span>
            <i
              className="bi bi-three-dots-vertical fa-2x"
              style={{ color: "gray" }}
            ></i>
          </div>
          <div className="post">
            <img src={post.imagePath} alt="Post" />
          </div>
          <div className="icons">
            <i id="like" className="bi bi-heart fa-2x"></i>
            <i className="bi bi-chat-left fa-2x"></i>
            <i className="bi bi-arrow-up-right-square fa-2x"></i>
            <Link to={`/edit/${post._id}`}><i id="edit" className="bi bi-pencil-square fa-2x"></i></Link>            
            <i className="bi bi-trash fa-2x" onClick={() => deletePost(post._id)}></i>
          </div>
          <div className="about-post">
            <h4>
              <img src="https://picsum.photos/id/26/20" alt="Liked by" /> Liked
              by Gandijuha and 104,424 others
            </h4>
            <h4 className="name_caption">{post.title}</h4>
            <span id="caption">{post.description}</span>
            {/* <h5 style={{ marginTop: "-20px" }}>View all 69 comments</h5> */}
            <h4>
              {/* <img src="https://picsum.photos/id/19/19" alt="Commenter" />
          <input
            type="text"
            placeholder="add a comment                                           &#128512;&#128516;&#128525;&#128151;"
            style={{ marginTop: "-10px" }}
          /> */}
            </h4>
            <h6>{post.agoTime}</h6>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
