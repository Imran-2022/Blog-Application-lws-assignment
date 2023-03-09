import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../features/posts/postsSlice";
import videoSlice from "../features/post/singlePostSlice";
import filterSlice from "../features/filter/filterSlice";
import relatedVideosSlice from "../features/relatedVideos/relatedVideosSlice";

export const store = configureStore({
    reducer: {
        posts: postsSlice,
        video:videoSlice,
        filter:filterSlice,
        relatedVideos:relatedVideosSlice,
    },
});
