import React, { useEffect } from 'react';
import RelatedPost from './RelatedPost';
import { useDispatch, useSelector } from 'react-redux'
import { fetchrelatedPosts } from '../../features/relatedVideos/relatedPostsSlice';

const RelatedPostsContainer = ({singlePost}) => {
  const {tags,id}=singlePost;
  const dispatch = useDispatch()
  const { relatedPosts, isLoading, isError, error } = useSelector(state => state.relatedPosts)
  useEffect(() => {
    dispatch(fetchrelatedPosts({ tags, id }))
  }, [dispatch, tags, id])

  // decide what to render 

  let content = null;
  if (isLoading) content = <p>Loading !</p>
  if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
  if (!isError && !isLoading && relatedPosts.length === 0) content = <div className="col-span-12">No related videos Found</div>
  if (!isError && !isLoading && relatedPosts.length > 0) {
    content = relatedPosts.map(dt => <RelatedPost key={dt.id} post={dt} />)
  }

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
      <div className="space-y-4 related-post-container">
        {
          content
        }
      </div>
    </aside>
  );
};

export default RelatedPostsContainer;