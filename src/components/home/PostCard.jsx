import React from 'react';
import git from "../../assets/images/git.webp"
import {Link} from "react-router-dom"
const PostCard = () => {
    return (
        <div class="lws-card">
            <Link to="/posts"><img src={git} class="lws-card-image" alt="" /></Link>
            <div class="p-4">
                <div class="lws-card-header">
                    <p class="lws-publishedDate">2023-05-01</p>
                    <p class="lws-likeCount"><i class="fa-regular fa-thumbs-up"></i>100</p>
                </div>
                <Link to="/posts" class="lws-postTitle">Top Github Alternatives</Link>
                <div class="lws-tags"><span>#python,</span> <span>#tech,</span> <span>#git</span></div>
                {/* <!-- Show this element if post is saved --> */}
                <div class="flex gap-2 mt-4">
                    <span class="lws-badge"> Saved </span>
                </div>
                {/* <!-- Show this element if post is saved Ends --> */}
            </div>
        </div>
    );
};

export default PostCard;