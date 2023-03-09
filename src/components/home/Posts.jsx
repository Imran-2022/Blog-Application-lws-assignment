import React, { useEffect } from 'react';
import { fetchBlogs } from '../../features/posts/postsSlice';
import PostCard from './PostCard';
import { useDispatch, useSelector } from 'react-redux'

const Posts = () => {
    const dispatch = useDispatch();

    const { posts, isLoading, isError, error } = useSelector(
        (state) => state.posts
    );

    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    // decide what to render
    let content="hi";

    if (isLoading) content = <p>Loading wait....</p>;
    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isError && !isLoading && posts?.length === 0) {
        content = <div className="col-span-12">No posts found!</div>;
    }

    if (!isError && !isLoading && posts?.length > 0) {
        content = posts.map((post) => (
            <PostCard key={post.id} post={post} />
        ));
    }
    return (
        <main className="post-container" id="lws-postContainer">
            {
                content
            }
        </main>
    );
};

export default Posts;