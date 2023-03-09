import React from 'react';
import git from "../../assets/images/git.webp"
import { Link } from "react-router-dom"
const PostCard = ({ post = {} }) => {
    const { createdAt, id, image, isSaved, likes, tags, title } = post;
    return (
        <div className="lws-card">
            <Link to="/posts"><img src={image} className="lws-card-image" alt="" /></Link>

            <div className="p-4">
                <div className="lws-card-header">
                    <p className="lws-publishedDate">{createdAt}</p>
                    <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>{likes}</p>
                </div>

                <Link to="/posts" className="lws-postTitle">{title}</Link>

                <div className="lws-tags">{
                    tags.map(tag => <span>{tag}</span>)
                }</div>

                <div className="flex gap-2 mt-4">
                    <span className="lws-badge"> {isSaved} </span>
                </div>
            </div>
        </div>
    );
};

export default PostCard;