import { useEffect, useState } from "react";
import { getAllBlogPosts, BlogPost } from "@/services/blog";
import Container from "../Container";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
   const [posts, setPosts] = useState<BlogPost[]>([]);

   useEffect(() => {
      getAllBlogPosts().then(setPosts);
   }, []);

   return (
      <section className='py-10'>
         <Container>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
               {posts.map((post) => (
                  <ArticleCard
                     key={post.id}
                     id={post.id}
                     title={post.title}
                     subtitle={post.subtitle}
                     image={post.image}
                     date={post.date}
                     category={post.category}
                  />
               ))}
            </div>
         </Container>
      </section>
   );
};

export default ArticlesList;
