import React from 'react';

const Like_Saved = () => {
    return (
        <div class="btn-group">
            {/* <!-- handle like on button click --> */}
            <button class="like-btn" id="lws-singleLinks">
                <i class="fa-regular fa-thumbs-up"></i> 100
            </button>
            {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
            <button class="active save-btn" id="lws-singleSavedBtn">
                <i class="fa-regular fa-bookmark"></i> Saved
            </button>
        </div>
    );
};

export default Like_Saved;