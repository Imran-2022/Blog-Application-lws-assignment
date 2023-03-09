import React, { useEffect } from 'react';
import DetailedPost from './DetailedPost';
import RelatedPostsContainer from './RelatedPostsContainer';
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../../features/post/singlePostSlice';
import { useParams } from 'react-router-dom';

const PostContainer = () => {
    const dispatch = useDispatch();
    const { postId } = useParams();

    const { singlePost, isLoading, isError, error } = useSelector(
        (state) => state.singlePost
    );

    useEffect(() => {
        dispatch(fetchPost(postId));
    }, [dispatch,postId]);



    return (
        <section className="post-page-container">
            <DetailedPost  singlePost={singlePost}/>
            <RelatedPostsContainer singlePost={singlePost} />
        </section>
    );
};

export default PostContainer;