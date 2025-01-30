'use client';
import cookie from 'js-cookie';
import { redirect } from 'next/navigation';
import { IoSearchOutline } from "react-icons/io5";
import { RxTextAlignJustify } from "react-icons/rx";
import logo from '../../assets/images/logo_any_recipe.png';

const Navbar_Home = () => {
  const handleSignOut = async () => {
    cookie.remove('JWT');
    redirect("/")
  };
  const handleHome = () => {
    redirect("/home")
  }

  return (
    <div className="bg-amber-200 h-13 border-b-2 border-slate-900">
      <div className='flex content-center gap-60 justify-between'>
        <div className="flex justify-start items-center">
          <img src={logo.src} alt="Any-Recipe-Logo" className='h-[80px] ' />
        </div>
        <div className='relative'>
        <RxTextAlignJustify className='absolute size-9 left-3 p-2 bg-amber-200 rounded-[40px] top-1/2 transform -translate-y-1/2 text-black'/>
          <input type="text" placeholder='Pesquise por nome ou ingredientes' className='p-3 pl-14 border-2 w-[400px] border-black rounded-[30px] my-6 bg-amber-500 text-black placeholder-black' />
          <IoSearchOutline className="absolute size-9 right-3 p-2 bg-amber-200 rounded-[40px] top-1/2 transform -translate-y-1/2 text-black" />
        </div>
        <div className="flex justify-end items-center p-4 gap-8">
          <button onClick={handleHome} className="bg-amber-500 border-slate-950 border-solid border-2 h-8 w-16 rounded-xl  text-amber-100">
            Home
          </button>
          <button
            className="bg-amber-500 border-slate-950 border-solid border-2 h-8 w-16 rounded-xl text-amber-100"
            onClick={handleSignOut}
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar_Home;
