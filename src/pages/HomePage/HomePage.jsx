import BlogCard from "../../components/BlogCard/BlogCard";
import style from "./HomePage.module.css";
import { useContext } from "react";
import StoreContext from "../../store/store-context";

function HomePage() {
  const { allPost, userData } = useContext(StoreContext);
  
  const data = allPost.map((userObj) => (
    <BlogCard allPost={userObj} key={userObj.id} uid={userData?.uid} />
  ));

  return (
    <div className={style["main_container"]}>
      {data}
    </div>
  );
}

export default HomePage;
