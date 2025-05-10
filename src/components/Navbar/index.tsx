import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import Container from "../Container";

const Navbar = () => {
   return (
      <nav>
         <Container>
            <div className='w-full px-4 py-2 flex items-center justify-between border-b'>
               <div className='text-xl font-bold'>Dr. Tagliero</div>

               {/* Desktop Links */}
               <div className='hidden md:flex items-center gap-4'>
                  <a href='/' className='text-sm font-medium'>
                     Inicio
                  </a>
                  <a href='/servicios' className='text-sm font-medium'>
                     Servicios
                  </a>
                  <a href='/blog' className='text-sm font-medium'>
                     Blog
                  </a>
                  <a
                     href='/contacto'
                     className='px-4 py-2 text-sm font-medium border rounded-md hover:bg-accent transition-colors'
                  >
                     Contacto
                  </a>
               </div>

               {/* Mobile Drawer */}
               <div className='md:hidden'>
                  <Drawer>
                     <DrawerTrigger>
                        <Menu className='h-6 w-6' />
                     </DrawerTrigger>
                     <DrawerContent className='p-6 space-y-4'>
                        <a href='/' className='block text-sm font-medium'>
                           Inicio
                        </a>
                        <a
                           href='/servicios'
                           className='block text-sm font-medium'
                        >
                           Servicios
                        </a>
                        <a href='/blog' className='block text-sm font-medium'>
                           Blog
                        </a>
                        <a
                           href='/contacto'
                           className='block w-full px-4 py-2 text-sm font-medium border rounded-md text-center hover:bg-accent transition-colors'
                        >
                           Contacto
                        </a>
                     </DrawerContent>
                  </Drawer>
               </div>
            </div>
         </Container>
      </nav>
   );
};

export default Navbar;
