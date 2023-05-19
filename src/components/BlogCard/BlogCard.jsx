/* eslint-disable react/prop-types */
import { usePost } from "../../hooks/usePost";
import style from "./BlogCard.module.css";

function BlogCard({ allPost, uid }) {
  const userCanDeletePost = uid === allPost?.uid;
  const { deletePost, getPost } = usePost();

  const deleteFunc = () => {
    deletePost(allPost.id);
    getPost();
  };

  return (
    <section className={style["section___card"]}>
      <h1 className={style.title}>{allPost?.title}</h1>
      <p className={style.text}>{allPost?.content}</p>
      <p className={style.author}>@{allPost?.author}</p>
      {userCanDeletePost && (
        <button onClick={deleteFunc} className={style.deleteBtn}>
          delete
        </button>
      )}
    </section>
  );
}

export default BlogCard;
