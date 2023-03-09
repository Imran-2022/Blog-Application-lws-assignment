import React, { useEffect } from 'react';
import { fetchBlogs } from '../../features/posts/postsSlice';
import PostCard from './PostCard';
import { useDispatch, useSelector } from 'react-redux'

const Posts = () => {
    const dispatch = useDispatch();

    const { posts, isLoading, isError, error } = useSelector(
        (state) => state.posts
    );
    const { status, sort } = useSelector(
        (state) => state.filter
    );

    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);



    // filter before showing in home page start
    const filterByStatus = (dt) => {

        if (status === 'all') {
            return true;
        } else if (status === 'saved') {
            return dt.isSaved;
        }
        return true;
        
    }


    // filter before showing in home page end

    // decide what to render
    let content = "hi";

    if (isLoading) content = <p>Loading wait....</p>;
    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isError && !isLoading && posts?.length === 0) {
        content = <div className="col-span-12">No posts found!</div>;
    }

    if (!isError && !isLoading && posts?.length > 0) {
        content = posts
            .filter(filterByStatus)
            .map((post) => (
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