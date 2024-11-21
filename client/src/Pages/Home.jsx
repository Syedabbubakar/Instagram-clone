import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  }, []);

  // Delete a post
  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      setPosts(posts.filter((post) => post._id !== id)); // Update state to remove deleted post
      alert("Post deleted successfully!");
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete the post. Please try again.");
    }
  };

  console.log(posts);

  // return (
  //   <div>
  //     <h1>All Posts</h1>
  //     <div>
  //       {posts.map(post => (
  //         <div className="card home-card" key={post._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
  //           <img src={`http://localhost:5000/${post.imagePath}`} alt={post.title} style={{ width: '100%' }} />
  //           <h3>{post.title}</h3>
  //           <p>{post.description}</p>
  //           <Link to={`/edit/${post._id}`}>Edit</Link>
  //           <button onClick={() => deletePost(post._id)}>Delete</button>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  // return (
  // <div className="home">
  //     {
  //         posts.map(item=>{
  //             return(
  //                 <div className="card home-card" key={item._id}>
  //                      <h5 style={{padding:"5px"}}>
  //                     <i className="material-icons" style={{
  //                          float:"right"
  //                      }}
  //                      onClick={()=>deletePost(item._id)}
  //                      >delete</i>

  //                      </h5>
  //                      <div className="card-image">
  //                          <img src={`http://localhost:5000/${item.imagePath}`}/>
  //                      </div>
  //                      <div className="card-content">
  //                      {/* <i className="material-icons" style={{color:"red"}}>favorite</i>
  //                      {item.likes.includes(state._id)
  //                      ?
  //                       <i className="material-icons"
  //                              onClick={()=>{unlikePost(item._id)}}
  //                        >thumb_down</i>
  //                      :
  //                      <i className="material-icons"
  //                      onClick={()=>{likePost(item._id)}}
  //                      >thumb_up</i>
  //                      } */}

  //                          {/* <h6>{item.likes.length} likes</h6> */}
  //                          {/* <h6>{item.title}</h6>
  //                          <p>{item.description}</p> */}
  //                          {/* {
  //                              item.comments.map(record=>{
  //                                  return(
  //                                  <h6 key={record._id}><span style={{fontWeight:"500"}}>{record.postedBy.name}</span> {record.text}</h6>
  //                                  )
  //                              })
  //                          }
  //                          <form onSubmit={(e)=>{
  //                              e.preventDefault()
  //                              makeComment(e.target[0].value,item._id)
  //                          }}>
  //                            <input type="text" placeholder="add a comment" />
  //                          </form> */}

  //                      </div>
  //                  </div>
  //             )
  //         })
  //     }

  // </div>
  //         <div className="feed">

  // <section className="username">
  //   <div className="image">
  //     <a href="https://www.instagram.com/kentury_/">
  //       <img
  //         src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
  //         alt="User Profile"
  //       />
  //     </a>
  //   </div>
  //   <div className="id">
  //     <a href="https://www.instagram.com/kentury_/">kentury_</a>
  //   </div>
  // </section>
  // <section className="post">
  //   <img
  //   src={`http://localhost:5000/${post.imagePath}`}
  //     alt="Post"
  //   />
  // </section>
  // <section className="btn-group">
  //   <button type="button" className="btn-love">
  //     <i className="far fa-heart fa-lg"></i>
  //   </button>
  //   <button type="button" className="btn-comment">
  //     <i className="far fa-comment fa-lg"></i>
  //   </button>
  //   <button type="button" className="btn-share">
  //     <i className="fas fa-share fa-lg"></i>
  //   </button>
  //   <button type="button" className="btn-bookmark">
  //     <i className="far fa-bookmark fa-lg"></i>
  //   </button>
  // </section>
  // <section className="caption">
  //   <p className="like">20 likes</p>
  //   <p>
  //     <b>
  //       <a className="id" href="https://www.instagram.com/kentury_/">
  //         kentury_
  //       </a>
  //     </b>{" "}
  //     dhasdgsahjd
  //   </p>
  //   <p className="time">5 minutes ago</p>
  // </section>

  //       </div>
  //   <div>
  //   {posts.map((post)=>{

  //   <div className="feed"  style={{
  //     width: '30%',
  //     height: 'auto',
  //     backgroundColor: '#FFFFFF',
  //     margin: '80px auto',
  //     paddingBottom: '10px',
  //   }}>
  //   <section className="username">
  //     <div className="image">
  //       <a href="https://www.instagram.com/kentury_/">
  //         <img
  //           src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
  //           alt="User Profile"
  //         />
  //       </a>
  //     </div>
  //     <div className="id">
  //       <a href="https://www.instagram.com/kentury_/">kentury_</a>
  //     </div>
  //   </section>
  //   <section className="post">
  //     <img
  //       src="https://i0.wp.com/myadventuresacrosstheworld.com/wp-content/uploads/2018/03/rice-fields-bali-spa-1-e1522157798920.jpg?resize=1000%2C667&ssl=1"
  //       alt="Post"
  //     />
  //   </section>
  //   <section className="btn-group">
  //     <button type="button" className="btn-love">
  //       <i className="far fa-heart fa-lg"></i>
  //     </button>
  //     <button type="button" className="btn-comment">
  //       <i className="far fa-comment fa-lg"></i>
  //     </button>
  //     <button type="button" className="btn-share">
  //       <i className="fas fa-share fa-lg"></i>
  //     </button>
  //     <button type="button" className="btn-bookmark">
  //       <i className="far fa-bookmark fa-lg"></i>
  //     </button>
  //   </section>
  //   <section className="caption">
  //     <p className="like">20 likes</p>
  //     <p>
  //       <b>
  //         <a className="id" href="https://www.instagram.com/kentury_/">
  //           kentury_
  //         </a>
  //       </b>{" "}
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum,
  //       purus ut consequat convallis, nulla nisl tincidunt nulla, sed pulvinar.
  //     </p>
  //     <p className="time">5 minutes ago</p>
  //   </section>
  // </div>
  //   })}
  //   </div>

  // )

  // return (
  //   <div className="feed">
  //     <h1>All Posts</h1>
  //     {posts.map((post) => (
  //       <div className="post-card" key={post._id} style={{ margin: '20px', border: '1px solid #ccc', borderRadius: '8px', padding: '15px' }}>
  //         {/* User Info Section */}
  //         <section className="username" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
  //           <div className="image" style={{ marginRight: '10px' }}>
  //             <img
  //               src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
  //               alt="User Profile"
  //               style={{ width: '40px', height: '40px', borderRadius: '50%' }}
  //             />
  //           </div>
  //           <div className="id">
  //             <Link to={`/user/${post.userId}`} style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>
  //               {post.username || 'Anonymous'}
  //             </Link>
  //           </div>
  //         </section>

  //         {/* Post Image Section */}
  //         <section className="post" style={{ marginBottom: '10px' }}>
  //           <img
  //             src={`http://localhost:5000/${post.imagePath}`}
  //             alt={post.title}
  //             style={{ width: '100%', borderRadius: '8px', maxHeight: '400px', objectFit: 'cover' }}
  //           />
  //         </section>

  //         {/* Post Actions */}
  //         <section className="btn-group" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
  //           <button type="button" className="btn-love">
  //             <i className="far fa-heart fa-lg"></i> Like
  //           </button>
  //           <button type="button" className="btn-comment">
  //             <i className="far fa-comment fa-lg"></i> Comment
  //           </button>
  //           <button type="button" className="btn-share">
  //             <i className="fas fa-share fa-lg"></i> Share
  //           </button>
  //           <button type="button" className="btn-delete" onClick={() => deletePost(post._id)}>
  //             <i className="far fa-trash-alt fa-lg"></i> Delete
  //           </button>
  //         </section>

  //         {/* Post Caption */}
  //         <section className="caption">
  //           <p className="like" style={{ fontWeight: 'bold' }}>{post.likes?.length || 0} likes</p>
  //           <p>
  //             <b>{post.username || 'Anonymous'}:</b> {post.description || 'No description provided.'}
  //           </p>
  //           <p className="time" style={{ fontSize: '0.8rem', color: '#777' }}>
  //             {new Date(post.createdAt).toLocaleString()}
  //           </p>
  //         </section>
  //       </div>
  //     ))}
  //   </div>
  // );

  return (
    <>
      {posts.map((post) => (
        //     <div className="feed">
        //     <div className="post-card" key={post._id} style={{ paddingBottom: '10px' }}>
        //       {/* User Info Section */}
        //       <section className="username">
        //         <div className="image">
        //           <img
        //             src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
        //             alt="User Profile"
        //           />
        //         </div>
        //         <div className="id">
        //           <Link to={`/user/${post.userId}`}>{post.username || 'Anonymous'}</Link>
        //         </div>
        //       </section>

        //       {/* Post Image Section */}
        //       <section className="post">
        //         <img
        //           src={`http://localhost:5000/${post.imagePath}`}
        //           alt={post.title}
        //         />
        //       </section>

        //       {/* Post Actions */}
        //       <section className="btn-group">
        //         <button type="button" className="btn-love">
        //           <i className="far fa-heart fa-lg"></i>
        //         </button>
        //         <button type="button" className="btn-comment">
        //           <i className="far fa-comment fa-lg"></i>
        //         </button>
        //         <button type="button" className="btn-share">
        //           <i className="fas fa-share fa-lg"></i>
        //         </button>
        //         <button type="button" className="btn-delete" onClick={() => deletePost(post._id)}
        //           style={{ position: 'relative', right:'20px'}}
        //           >
        //           <i className="far fa-trash-alt fa-lg"></i> Delete
        //         </button>
        //       </section>

        //       {/* Post Caption */}
        //       <section className="caption">
        //         <p className="like">{post.likes?.length || 0} likes</p>
        //         <p>
        //           {post.description || 'No description provided.'}
        //         </p>
        //         <p className="time">
        //           {new Date(post.createdAt).toLocaleString()}
        //         </p>
        //       </section>
        //     </div>
        // </div>
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
            <img src={`http://localhost:3000/${post.imagePath}`} alt="Post" />
          </div>
          <div className="icons">
            <i id="like" className="bi bi-heart fa-2x"></i>
            <i className="bi bi-chat-left fa-2x"></i>
            <i className="bi bi-arrow-up-right-square fa-2x"></i>
            <Link to={`/edit/${post._id}`}><i id="edit" className="bi bi-pencil-square fa-2x"></i></Link>
            {/* <button onClick={() => deletePost(post._id)}></button> */}
            
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
