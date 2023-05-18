/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import style from "./CreatePost.module.css";
import { usePost } from "../../hooks/usePost";

function CreatePost({ userData }) {
  const titleRef = useRef(null);
  const posRef = useRef(null);
  const { addPost } = usePost();

  console.log({ ...userData });

  const [checkError, setCheckError] = useState(false);
  console.log(userData);

  const submitBtn = () => {
    if (titleRef.current.value.length > 1 && posRef.current.value.length > 1) {
      addPost({
        uid: userData.uid,
        author: userData.displayName,
        title: titleRef.current.value.trim(),
        content: posRef.current.value.trim(),
      });
      setCheckError(false);
    } else {
      setCheckError(true);
    }
  };

  return (
    <div className={style.mainPost}>
      <h1 className={style.header}>Create A Post</h1>

      <div className={style.postCard}>
        <div className={style.card}>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" id="title" ref={titleRef} />
        </div>

        <div className={style.card}>
          <label htmlFor="post">Post:</label>
          <textarea
            name=""
            id="title"
            cols="10"
            rows="5"
            ref={posRef}
          ></textarea>
        </div>
        <button type="submit" className={style.btn} onClick={submitBtn}>
          Submit Post
        </button>
        {checkError && <p className={style.error}>Must exceeed 3 character</p>}
      </div>
    </div>
  );
}
export default CreatePost;
