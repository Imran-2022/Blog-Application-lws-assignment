import React, { useEffect, useState } from 'react';

const Like_Saved = ({ id, likes, isSaved }) => {
    const [like, setLike] = useState(null)
    const [saved, setSaved] = useState(false)

    useEffect(() => {
        setSaved(isSaved)
    }, [isSaved])

    useEffect(() => {
        setLike(likes)
    }, [id])

    const handleLike = async () => {
        setLike(pre => pre + 1)
        const response = await fetch(`http://localhost:9000/blogs/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                likes: like + 1,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const dt = await response.json();
        console.log("dt", dt);
    }


    const hanldeSaved=async()=>{
        setSaved(true)
        const response = await fetch(`http://localhost:9000/blogs/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                isSaved: true,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const dt = await response.json();
        console.log("dt", dt);

    }
    const hanldeUnSaved=async()=>{
        setSaved(false)
        const response = await fetch(`http://localhost:9000/blogs/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                isSaved: false,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const dt = await response.json();
        console.log("dt", dt);
    }

    return (
        <div className="btn-group">
            {/* <!-- handle like on button click --> */}
            <button className="like-btn" id="lws-singleLinks" onClick={handleLike}>
                <i className="fa-regular fa-thumbs-up"></i> {like}
            </button>
            {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
            {
                saved ?
                    <button className="active save-btn" id="lws-singleSavedBtn" onClick={hanldeUnSaved}>
                        <i className="fa-regular fa-bookmark"></i> Saved
                    </button>
                    :
                    <button className="save-btn" id="lws-singleSavedBtn" onClick={hanldeSaved}>
                        <i className="fa-regular fa-bookmark"></i> Save
                    </button>
            }

        </div>
    );
};

export default Like_Saved;