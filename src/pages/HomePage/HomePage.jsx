import BlogCard from "../../components/BlogCard/BlogCard";
import style from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={style["main_container"]}>
      <BlogCard />
      <BlogCard />
    </div>
  );
}

export default HomePage;
