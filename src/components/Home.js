import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from "../redux/actions/postAction";
import { selectedPost } from "../redux/actions/selectedPost.action";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { loading, data, error } = useSelector(state => state.posts);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])


    function clickHandle(post){
        dispatch(selectedPost(post))
        navigate(`/item/${post.id}`)
    }


    return (
        <div className="container">
            <div id="header">
              <span id="heading">Social Media For Travellers</span>
            </div>
            <div id="search">
                <input type="text" placeholder="Search here..."/>
            </div>
            {
                loading &&
                <div className="load-holder">
                    <div className="load">
                    </div>
                </div>
            }
            {
                error &&
                <div className="error">
                    <h1>{error}</h1>
                </div>
            }
            {
                data.length > 0 &&
                data.map(post => (
                    <div className="card" key={post.id} onClick={()=>{clickHandle(post)}}>
                     <img className="images" src={`https://picsum.photos/200?random=${post.id}`} alt={post.title}></img>
                      <div className="cards-details">
                        <div className="data">
                          <p><strong>User ID : </strong> {post.userId}</p>
                          <p><strong>Title : </strong> {post.title.length>18?post.title.substring(0,18)+'...':post.title}</p>
                          <p><strong>Body : </strong> <span>{post.body.length>60?<span>{post.body.substring(0,60)}, <span style={{ color: "rgba(240, 90, 34, 1)"}}>Read more...</span></span>:post.body}</span></p>
                        </div>
                        <div className="arrow">
                          <img src={require("./arrow.png")}/>
                      </div>
                      </div>
                    </div>
                ))

            }
        </div>
    )
}

export default Home;