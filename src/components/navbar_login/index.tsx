"use client";

import { useRouter } from 'next/navigation';
import logo from '../../assets/images/logo_any_recipe.png';

const Navbar = () => {
  const router = useRouter();

  async function handleLogin() {
    router.push('/');
  }

  async function handleCadastro() {
    router.push('/cadastro');
  }

  return (
    <div className="bg-amber-200 h-13 border-b-2 border-slate-900">
      <div className='flex content-center gap-60 justify-between'>
        <div className="flex justify-start items-center">
          <img src={logo.src} alt="Any-Recipe-Logo" className='h-[80px] ' />
        </div>
        <div className="flex justify-end items-center p-4 gap-8">
          <button className="bg-amber-500 border-slate-950 border-solid border-2 h-8 w-16 rounded-xl text-amber-100" onClick={handleLogin}>
            Login
          </button>
          <button className="bg-amber-500 border-slate-950 border-solid border-2 h-8 w-20 rounded-xl text-amber-100" onClick={handleCadastro}>
            Cadastro
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
