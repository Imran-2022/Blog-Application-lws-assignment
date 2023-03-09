import React from 'react';
import DetailedPost from './DetailedPost';
import RelatedPostsContainer from './RelatedPostsContainer';

const PostContainer = () => {
    return (
        <section class="post-page-container">
            <DetailedPost />
            <RelatedPostsContainer />
        </section>
    );
};

export default PostContainer;