import React from "react";
import { useSelector } from "react-redux";

const Post = () => {

    let post = useSelector((state) => state.selected);

    
    return (
        <div className="mainCart">
            {
                post &&
                <div className="details" key={post.id}>
                    <div className="data-details">
                    <h1> Post Number #  {post.id}</h1>
                    <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title}></img>
                    </div>
                    <div className="deta">
                        <div className="btn">
                           <button className="details-btn">Details</button>
                           <button className="userinfo-btn"> User Info</button>
                        </div>
                       <p><strong>User ID : </strong> {post.userId}</p>
                       <p><strong>Title : </strong> {post.title}</p>
                       <blockquote><strong>Body : </strong> <p>{post.body}</p></blockquote>
                    </div>
                </div>
            }
        </div>
    )
}

export default Post;