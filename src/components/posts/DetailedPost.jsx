import React from 'react';
import Like_Saved from './Like_Saved';

const DetailedPost = ({ singlePost }) => {
  const { id, description, image, isSaved, likes, tags, title } = singlePost;
  return (
    <main className="post">
      <img src={image} alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {
            tags?.map((tag,idx) => <span key={idx}>{tag}, </span>)
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