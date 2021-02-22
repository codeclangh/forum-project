import styles from "../styles/post.module.css";
import { Image } from "react-bootstrap";
const Post = ({ post }) => {
  return (
    <div className={styles.postContainer}>
      <Image
        className={` ${styles.avatar}`}
        alt={post.author.username}
        src={post.author.avatar}
      />
      <div>
        <div className={styles.userinfo}>
          <span className={`${styles.name} `}>
            <strong>{post.author.name}</strong>
          </span>
          <span className={`${styles.username}`}>@{post.author.username}</span>
          <strong className={styles.date}>
            {new Date().toLocaleDateString()}
          </strong>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            minima aperiam beatae vel minus, recusandae, quod blanditiis eveniet
            in facilis eaque animi veniam? Dolor sit repellat assumenda
            voluptatum? Molestiae ad inventore aliquid cupiditate aspernatur
            distinctio eum id, nam voluptatum commodi?
          </p>
          <div className={styles.reactions}>
            <span className={`${styles.upvotes} mr-3`}>
              <i className="bi bi-hand-thumbs-up"></i> {post.upvotes}
            </span>
            <span className={`${styles.downvotes} mr-3`}>
              <i className="bi bi-hand-thumbs-down"></i> {post.downvotes}
            </span>
            <span className={`${styles.comments} mr-3`}>
              <i className="bi bi-chat-square-text"></i> {post.comments.length}
            </span>
            <span className={`${styles.share} mr-3`}>
              <i className="bi bi-share"></i> {}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.more}>
        {" "}
        <i className="bi bi-three-dots-vertical"></i>
      </div>
    </div>
  );
};

export default Post;
