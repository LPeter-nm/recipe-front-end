"use client";
import { redirect } from "next/navigation";
import { useState } from "react";

const ClientForm = ({ handleSubmit }: { handleSubmit: (formdata: FormData) => Promise<void> }) => {
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const email = formdata.get("email");
    const password = formdata.get("password");
    const name = formdata.get("name");

    if (!email || !password || !name) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    await handleSubmit(formdata);
    redirect("/"); 
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-amber-100">
      <form
        className="flex flex-col p-24 max-w-sm rounded-xl justify-center items-center bg-amber-200 gap-3 border-black border-2"
        onSubmit={onSubmit}
      >
        <input
          name="name"
          type="text"
          className="bg-amber-100 rounded-lg p-2"
          placeholder="Nome"
        />
        <input
          name="email"
          type="email"
          className="bg-amber-100 rounded-lg p-2"
          placeholder="Email"
        />
        <input
          name="password"
          type="password"
          className="bg-amber-100 rounded-lg p-2 mb-3"
          placeholder="Senha"
        />
        {error && <p className="text-red-600 w-80 mb-3 text-center">{error}</p>}
        <button
          type="submit"
          className="bg-amber-500 w-full rounded-xl p-2 text-white"
        >
          CRIAR
        </button>
      </form>
    </div>
  );
};

export default ClientForm;
