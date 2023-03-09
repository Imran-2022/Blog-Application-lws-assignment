import React, { useEffect } from 'react';
import DetailedPost from './DetailedPost';
import RelatedPostsContainer from './RelatedPostsContainer';
import { useDispatch, useSelector } from 'react-redux'
import { fetchvideo } from '../../features/post/singlePostSlice';
import { useParams } from 'react-router-dom';

const PostContainer = () => {
    const dispatch = useDispatch();
    const { videoId } = useParams();

    const { video, isLoading, isError, error } = useSelector(
        (state) => state.video
    );

    useEffect(() => {
        dispatch(fetchvideo(videoId));
    }, [dispatch,videoId]);



    return (
        <section className="post-page-container">
            <DetailedPost  video={video}/>
            <RelatedPostsContainer video={video} />
        </section>
    );
};

export default PostContainer;