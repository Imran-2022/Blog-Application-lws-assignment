import React from 'react';
import mern from "../../assets/images/mern.webp"
import Like_Saved from './Like_Saved';

const DetailedPost = () => {
  return (
    <main className="post">
      <img src={mern} alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          MERN stack for Web Development
        </h1>
        <div className="tags" id="lws-singleTags">
          <span>#python,</span> <span>#tech,</span> <span>#git</span>
        </div>
        <Like_Saved />
        <div className="mt-6">
          <p>
            A MERN stack comprises a collection of four frameworks (MongoDB,
            ExpressJs, ReactJs and NodeJs) used to develop full-stack
            javascript solutions for rapid, scalable, and secure applications.
            Each framework serves a different purpose in creating successful
            web applications. It is an excellent choice for companies looking
            to develop high-quality responsive applications quickly using just
            one language.
          </p>
        </div>
      </div>
    </main>
  );
};

export default DetailedPost;