import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../features/posts/postsSlice";
import filterSlice from "../features/filter/filterSlice";
import relatedPostsSlice from "../features/relatedPosts/relatedPostsSlice";
import singlePostSlice from "../features/post/singlePostSlice";

export const store = configureStore({
    reducer: {
        posts: postsSlice,
        singlePost:singlePostSlice,
        filter:filterSlice,
        relatedPosts:relatedPostsSlice,
    },
});
