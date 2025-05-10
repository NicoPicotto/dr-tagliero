import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "../Container";
import { ModeToggle } from "../mode-toggle";
import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <nav className='w-full py-4 border-b'>
         <Container>
            <div className=' flex items-center justify-between'>
               <div className='text-xl font-bold'>Dr. Tagliero</div>

               {/* Desktop Links */}
               <div className='hidden md:flex items-center gap-2'>
                  <Link to='/'>
                     <Button variant='link'>Inicio</Button>
                  </Link>

                  <Button variant='link'>Sobre Mí</Button>
                  <Button variant='link'>Artículos</Button>
                  <Button variant='link'>Preguntas Frecuentes</Button>
                  <Button>Contacto</Button>
                  <ModeToggle />
               </div>

               {/* Mobile Drawer */}
               <div className='md:hidden'>
                  <Drawer>
                     <DrawerTrigger>
                        <Menu className='h-6 w-6' />
                     </DrawerTrigger>
                     <DrawerContent className='p-6 space-y-4'>
                        <Button variant='link'>Inicio</Button>
                        <Button variant='link'>Sobre Mí</Button>
                        <Button variant='link'>Artículos</Button>
                        <Button variant='link'>Preguntas Frecuentes</Button>
                        <Button>Contacto</Button>
                     </DrawerContent>
                  </Drawer>
               </div>
            </div>
         </Container>
      </nav>
   );
};

export default Navbar;
