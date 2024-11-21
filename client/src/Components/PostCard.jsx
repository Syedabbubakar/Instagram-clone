import React from "react";

const PostCard = () => {
  return (
    <div className="card">
      <div className="profile">
        <h4>Tejash Vaishnav</h4>
        <h5>Somewhere</h5>
        <h6>Follow</h6>
        <img src="https://picsum.photos/200/300" alt="Profile" />
        <span>.</span>
        <i className="bi bi-three-dots-vertical fa-2x" style={{ color: "gray" }}></i>
      </div>
      <div className="post">
        <img src="https://picsum.photos/400/400" alt="Post" />
      </div>
      <div className="icons">
        <i id="like" className="bi bi-heart fa-2x"></i>
        <i className="bi bi-chat-left fa-2x"></i>
        <i className="bi bi-arrow-up-right-square fa-2x"></i>
        <i id="save" className="bi bi-bookmark fa-2x"></i>
      </div>
      <div className="about-post">
        <h4>
          <img src="https://picsum.photos/id/26/20" alt="Liked by" /> Liked by Gandijuha and 104,424 others
        </h4>
        <h4 className="name_caption">
          Tejash Vaishnav{" "}
          <span id="caption">The real test is not whether you avoid this failure, because you won't.....</span>
        </h4>
        <h5 style={{ marginTop: "-20px" }}>View all 69 comments</h5>
        <h4>
          <img src="https://picsum.photos/id/19/19" alt="Commenter" />
          <input
            type="text"
            placeholder="add a comment &#128512;&#128516;&#128525;&#128151;"
            style={{ marginTop: "-10px" }}
          />
        </h4> 
        <h6>26 minutes ago</h6>
      </div>
    </div>
  );
};

export default PostCard;
