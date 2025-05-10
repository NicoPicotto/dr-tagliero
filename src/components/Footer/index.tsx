import Container from "../Container";
import { Button } from "@/components/ui/button";

const Footer = () => {
   return (
      <footer className='w-full border-t py-8 mt-16 bg-muted'>
         <Container>
            <div className='flex items-center flex-col justify-between md:flex-row'>
               <div className='max-w-sm'>
                  <h3 className='font-semibold mb-2'>Dr. Tagliero</h3>
               </div>
               <div className='flex'>
                  <Button variant='link'>Sobre Mí</Button>
                  <Button variant='link'>Artículos</Button>
                  <Button variant='link'>Preguntas Frecuentes</Button>
                  <Button variant='link'>Contacto</Button>
               </div>
               <div className='flex gap-2'>
                  <Button variant='ghost' size='icon'>
                     Logo
                  </Button>
                  <Button variant='ghost'>Logo</Button>
               </div>
            </div>
         </Container>
      </footer>
   );
};

export default Footer;
