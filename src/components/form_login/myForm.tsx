"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

const MyForm = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const email = formdata.get("email");
    const password = formdata.get("password");
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return false;
    }

    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/home",
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-amber-100 p-4">
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col p-24 w-full max-w-sm rounded-xl justify-center items-center bg-amber-200 gap-3 border-black border-2"
      >
        {error && <p className="text-red-600">{error}</p>}
        <input name="email" type="email" className="bg-amber-100 rounded-lg p-2" placeholder="Email" />
        <input name="password" type="password" className="bg-amber-100 rounded-lg p-2" placeholder="Senha" />
        <button type="submit" className="bg-amber-500 w-full rounded-xl p-2 text-white">ENTRAR</button>
      </form>
    </div>
  );
};

export default MyForm;
