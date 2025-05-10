import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleCardProps {
   id: string;
   title: string;
   subtitle: string;
   image?: string;
   date: string;
   category: string;
}

const ArticleCard = ({
   id,
   title,
   subtitle,
   image,
   date,
   category,
}: ArticleCardProps) => {
   return (
      <article
         key={id}
         className='border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'
      >
         {image && (
            <div className='relative'>
               <img
                  src={image}
                  alt={title}
                  className='w-full h-64 object-cover'
               />
               <Badge className='absolute top-2 right-2'>{category}</Badge>
            </div>
         )}
         <div className='p-4'>
            <h2 className='text-xl font-bold mb-1'>{title}</h2>
            <p className='text-sm text-muted-foreground mb-2'>{subtitle}</p>
            <span className='block text-xs text-gray-500 mb-4'>
               {new Date(date).toLocaleDateString()}
            </span>
            <Link to={`/articulo/${id}`}>
               <Button variant='secondary'>
                  Leer artículo <ArrowRight />
               </Button>
            </Link>
         </div>
      </article>
   );
};

export default ArticleCard;
