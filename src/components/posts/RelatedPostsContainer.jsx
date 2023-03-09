import React from 'react';
import RelatedPost from './RelatedPost';

const RelatedPostsContainer = () => {
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
      <div className="space-y-4 related-post-container">
        <RelatedPost />
        <RelatedPost />
        <RelatedPost />
      </div>
    </aside>
  );
};

export default RelatedPostsContainer;