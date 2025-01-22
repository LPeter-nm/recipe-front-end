"use client"

import { signIn } from "next-auth/react";

const MyForm = () => {
  async function handleSubmit(formdata:FormData) {

    const email = formdata.get("email")
    const password = formdata.get("password")
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/home",
    });
  }

  return (
    <div className="min-h-[860px] flex justify-center items-center bg-amber-100">

      <div className="flex p-4 h-[400px] w-[350px] rounded-xl justify-center items-center bg-amber-200 flex-col border-black border-2 mb-40">
        
        <form action={handleSubmit} 
        className="flex-col flex justify-center items-center gap-3">

          <input name="email" type="email" className="bg-amber-100 rounded-xl" placeholder="Email" />
          <input name="password" type="password" className="bg-amber-100 rounded-xl" placeholder="Senha" />
          <button type="submit" className="bg-amber-500 w-40 rounded-xl text-white">ENTRAR</button>
        </form>
        <div className="flex gap-1 justify-items translate-y-16">
          <p>Não tem conta na ***? Crie</p>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
