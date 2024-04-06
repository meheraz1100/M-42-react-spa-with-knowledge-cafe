import PropTypes from "prop-types";
import { BsBookmarks } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 space-y-4">
      <img
        className="w-full mb-8 rounded-xl"
        src={cover}
        alt={`cover picture of the title ${title}`}
        title={title}
      />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button 
          className="ml-2 text-2xl text-red-600" 
          onClick={() => handleAddToBookmark(blog)}>
          <BsBookmarks />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">Title: {title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>{" "}
          </span>
        ))}
      </p>
      <button 
        className="text-purple-800 font-bold underline" 
        onClick={() => handleMarkAsRead(reading_time)}
      >Mark As Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired
};

export default Blog;