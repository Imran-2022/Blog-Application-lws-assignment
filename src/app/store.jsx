import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../features/posts/postsSlice";
import videoSlice from "../features/post/singlePostSlice";

export const store = configureStore({
    reducer: {
        posts: postsSlice,
        video:videoSlice,
    },
});
