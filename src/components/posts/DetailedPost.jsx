import React from 'react';
import Like_Saved from './Like_Saved';

const DetailedPost = ({ video }) => {
  const { id, description, image, isSaved, likes, tags, title } = video;
  return (
    <main className="post">
      <img src={image} alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {
            tags?.map(tag => <span>{tag}, </span>)
          }
        </div>
        <Like_Saved id={id} likes={likes} isSaved={isSaved} />
        <div className="mt-6">
          <p>
            {description}
          </p>
        </div>
      </div>
    </main>
  );
};

export default DetailedPost;