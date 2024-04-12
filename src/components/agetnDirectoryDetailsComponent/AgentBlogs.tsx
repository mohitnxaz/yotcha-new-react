import BlogCard from "./BlogCard";
import blogImage from "../../../public/Video.jpg";

const AgentBlogs = () => {
  return (
    <div className="grid gap-11">
      <BlogCard
        title={"This is a temp Blog"}
        date={"2024/4/28"}
        linkTo={"/"}
        image={blogImage}
      />
      <BlogCard
        title={"This is a temp Blog"}
        date={"2024/4/28"}
        linkTo={"/"}
        image={blogImage}
      />
      <BlogCard
        title={"This is a temp Blog"}
        date={"2024/4/28"}
        linkTo={"/"}
        image={blogImage}
      />
      <BlogCard
        title={"This is a temp Blog"}
        date={"2024/4/28"}
        linkTo={"/"}
        image={blogImage}
      />
    </div>
  );
};

export default AgentBlogs;
