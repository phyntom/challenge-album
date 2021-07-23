import { Link, useLocation } from 'react-router-dom';
export default function NavigationBar() {
   let location = useLocation();
   if (location.pathname.substring(1) === 'withTailwind')
      return (
         <nav className='bg-gray-800'>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
               <div className='flex items-center justify-center h-16'>
                  <div className='flex items-center justify-center sm:items-stretch sm:justify-start'>
                     <div className='hidden sm:block sm:ml-6'>
                        <div className='flex space-x-4'>
                           <Link
                              to='home'
                              className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium uppercase'
                           >
                              custom CSS
                           </Link>
                           <Link
                              to='/withTailwind'
                              className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase'
                           >
                              tailwindcss
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </nav>
      );
   else
      return (
         <div className='header'>
            <nav className='nav'>
               <Link to='/home' className='uppercase'>
                  Custom CSS
               </Link>
               <Link to='/withTailwind' className='uppercase'>
                  Tailwindcss
               </Link>
            </nav>
         </div>
      );
}
