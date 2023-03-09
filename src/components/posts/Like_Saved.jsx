import React from 'react';

const Like_Saved = ({ id, likes, isSaved }) => {

    return (
        <div className="btn-group">
            {/* <!-- handle like on button click --> */}
            <button className="like-btn" id="lws-singleLinks">
                <i className="fa-regular fa-thumbs-up"></i> {likes}
            </button>
            {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
            {
                isSaved ?
                    <button className="active save-btn" id="lws-singleSavedBtn">
                        <i className="fa-regular fa-bookmark"></i> Saved
                    </button>
                    :
                    <button className="active save-btn" id="lws-singleSavedBtn">
                        <i className="fa-regular fa-bookmark"></i> Save
                    </button>
            }

        </div>
    );
};

export default Like_Saved;