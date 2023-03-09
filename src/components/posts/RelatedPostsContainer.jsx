import React, { useEffect } from 'react';
import { fetchrelatedVideos } from '../../features/relatedVideos/relatedVideosSlice';
import RelatedPost from './RelatedPost';
import { useDispatch, useSelector } from 'react-redux'

const RelatedPostsContainer = ({video}) => {
  const {tags,id}=video;
  const dispatch = useDispatch()
  const { relatedVideos, isLoading, isError, error } = useSelector(state => state.relatedVideos)
  useEffect(() => {
    dispatch(fetchrelatedVideos({ tags, id }))
  }, [dispatch, tags, id])

  // decide what to render 

  let content = null;
  if (isLoading) content = <p>Loading !</p>
  if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
  if (!isError && !isLoading && relatedVideos.length === 0) content = <div className="col-span-12">No related videos Found</div>
  if (!isError && !isLoading && relatedVideos.length > 0) {
    content = relatedVideos.map(video => <RelatedPost key={video.id} video={video} />)
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