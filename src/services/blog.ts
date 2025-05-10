// src/services/blog.ts
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

export type BlogPost = {
   id: string;
   title: string;
   subtitle: string;
   image: string;
   date: string;
   content: string;
   category: string;
};

export async function getAllBlogPosts(): Promise<BlogPost[]> {
   const ref = collection(firestore, "blog-posts");
   const q = query(ref, orderBy("date", "desc"));
   const snapshot = await getDocs(q);

   return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
         id: doc.id,
         title: data.title,
         subtitle: data.subtitle,
         image: data.image,
         content: data.content,
         date: data.date?.toDate().toISOString() ?? "",
         category: data.category,
      };
   });
}
