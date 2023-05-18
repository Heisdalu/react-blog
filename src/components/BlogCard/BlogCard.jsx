import style from "./BlogCard.module.css";

function BlogCard() {
  return (
    <section className={style["section___card"]}>
      <h1 className={style.title}>Big text</h1>
      <p className={style.text}>
        orem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
        molestias alias maiores harum repudiandae totam quo aut amet, illo
        suscipit, provident repellendus ex ab vel officiis nemo esse dolorem
        possimus corrupti? Ducimus reprehenderit tempora dolore amet impedit
        quam similique aliquam. Qui non assumenda molestiae repudiandae quaerat.
        Totam, cumque doloremque adipisci nulla optio natu
      </p>

      <p className={style.author}>@Divine Obi</p>
    </section>
  );
}

export default BlogCard;
