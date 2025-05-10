import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
   doc,
   getDoc,
   collection,
   query,
   where,
   getDocs,
   limit,
} from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { Badge } from "../ui/badge";
import Container from "../Container";
import ArticleCard from "./ArticleCard";
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Article {
   id: string;
   title: string;
   subtitle: string;
   image?: string;
   date: string;
   content: string;
   category: string;
}

const ArticleDetail = () => {
   const { id } = useParams();
   const [article, setArticle] = useState<Article | null>(null);
   const [related, setRelated] = useState<Article[]>([]);

   useEffect(() => {
      if (!id) return;

      const fetchArticle = async () => {
         const ref = doc(firestore, "blog-posts", id);
         const snapshot = await getDoc(ref);
         if (snapshot.exists()) {
            const data = snapshot.data();
            const formatted: Article = {
               id: snapshot.id,
               title: data.title,
               subtitle: data.subtitle,
               image: data.image,
               date: data.date?.toDate().toISOString() ?? "",
               content: data.content,
               category: data.category,
            };
            setArticle(formatted);

            const q = query(
               collection(firestore, "blog-posts"),
               where("category", "==", data.category),
               limit(3)
            );
            const relatedSnap = await getDocs(q);
            const relatedPosts = relatedSnap.docs
               .filter((doc) => doc.id !== snapshot.id)
               .map((doc) => {
                  const r = doc.data();
                  return {
                     id: doc.id,
                     title: r.title,
                     subtitle: r.subtitle,
                     image: r.image,
                     date: r.date?.toDate().toISOString() ?? "",
                     content: r.content,
                     category: r.category,
                  };
               });
            setRelated(relatedPosts);
         }
      };

      fetchArticle();
   }, [id]);

   if (!article) return null;

   return (
      <section className='py-10'>
         <Container>
            <Breadcrumb className='mb-2'>
               <BreadcrumbList>
                  <BreadcrumbItem>
                     <BreadcrumbLink href='/'>Inicio</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                     <BreadcrumbLink href='/components'>
                        {article.category}
                     </BreadcrumbLink>
                  </BreadcrumbItem>
               </BreadcrumbList>
            </Breadcrumb>

            <h1 className='text-4xl font-bold mb-2'>{article.title}</h1>
            <p className='text-xl mb-2'>{article.subtitle}</p>
            <div className='flex items-center gap-4 text-sm text-gray-500 mb-4'>
               <Badge>{article.category}</Badge>
               <span>
                  Artículo publicado el{" "}
                  {new Date(article.date).toLocaleDateString()}
               </span>
            </div>
            {article.image && (
               <img
                  src={article.image}
                  alt={article.title}
                  className='w-full ratio-16/9 object-cover rounded mb-6'
               />
            )}
            <div className='grid grid-cols-6 gap-10 relative'>
               <div className='col-span-4'>
                  <div
                     className='prose dark:prose-invert'
                     dangerouslySetInnerHTML={{ __html: article.content }}
                  />
               </div>

               {related.length > 0 && (
                  <div className='col-span-2 sticky top-6 h-fit'>
                     <h2 className='text-2xl font-semibold mb-4'>
                        Artículos relacionados
                     </h2>
                     <div className='flex flex-col'>
                        {related.map((post) => (
                           <ArticleCard key={post.id} {...post} />
                        ))}
                     </div>
                  </div>
               )}
            </div>
         </Container>
      </section>
   );
};

export default ArticleDetail;
