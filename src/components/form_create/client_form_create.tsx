'use client';

import { FormEvent, useState } from "react";
import { CgAdd, CgArrowLeftO } from "react-icons/cg";
import { handleSubmit } from "./server_form_criar";
import { LuCookingPot } from "react-icons/lu";
import { redirect } from "next/navigation";

const CriarForm = () => {
  const [dificuldade, setDificuldade] = useState(1);
  const [error, setError] = useState("");

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    formdata.set("dificuldade", ['FACIL', 'MEDIO', 'DIFICIL'][dificuldade - 1]);

    if (!validateForm(formdata)) {
      return;
    }

    await handleSubmit(formdata);
    redirect("/home");
  };

  const handleCancel = () => {
    redirect("/home");
  };

  const handleDificuldade = (nivel: number) => {
    setDificuldade(nivel);
  };

  const validateForm = (formdata: FormData) => {
    const requiredFields = ["titulo", "descricao", "ingredientes", "linkFoto", "categoria", "tempoPreparo"];
    for (const field of requiredFields) {
      if (!formdata.get(field)) {
        setError("Por favor, preencha todos os campos.");
        return false;
      }
    }
    setError("");
    return true;
  };

  return (
    <div className="min-h-[774px] flex justify-center items-center bg-amber-100">
      <form
        className="flex p-5 w-full max-w-lg rounded-xl flex-col gap-4 bg-amber-200 border-black border-2"
        onSubmit={handleFormSubmit}
      >
        <h1 className="text-2xl justify-center flex">Adicione uma nova receita!</h1>
        {error && <p className="text-red-600">{error}</p>}
        <input
          name="titulo"
          type="text"
          className="bg-gray-100 rounded-lg p-2 border border-gray-300"
          placeholder="Título"
        />
        <textarea
          name="descricao"
          className="bg-gray-100 rounded-lg p-2 border border-gray-300 h-24"
          placeholder="Descrição"
        />
        <textarea
          name="ingredientes"
          className="bg-gray-100 rounded-lg p-2 border border-gray-300 h-24"
          placeholder="Ingredientes"
        />
        <input
          name="linkFoto"
          type="text"
          className="bg-gray-100 rounded-lg p-2 border border-gray-300"
          placeholder="Link da Foto"
        />
        <select
          name="categoria"
          className="bg-gray-100 rounded-lg p-2 border border-gray-300"
        >
          <option value="">Selecione uma Categoria</option>
          <option value="Aperitivo">Aperitivo</option>
          <option value="Entrada">Entrada</option>
          <option value="Prato Principal">Prato Principal</option>
          <option value="Sobremesa">Sobremesa</option>
          <option value="Bebida">Bebida</option>
          <option value="Café da Manhã">Café da Manhã</option>
          <option value="Lanche">Lanche</option>
          <option value="Jantar">Jantar</option>
        </select>
        <input
          name="tempoPreparo"
          type="number"
          min="1"
          className="bg-gray-100 rounded-lg p-2 border border-gray-300"
          placeholder="Tempo de Preparação em minutos"
        />
        <h1 className="flex justify-center text-lg">Dificuldade</h1>
        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={() => handleDificuldade(1)}
            className={dificuldade >= 1 ? "text-orange-600" : ""}
          >
            <LuCookingPot size={25} />
          </button>
          <button
            type="button"
            onClick={() => handleDificuldade(2)}
            className={dificuldade >= 2 ? "text-orange-600" : ""}
          >
            <LuCookingPot size={25} />
          </button>
          <button
            type="button"
            onClick={() => handleDificuldade(3)}
            className={dificuldade >= 3 ? "text-orange-600" : ""}
          >
            <LuCookingPot size={25} />
          </button>
        </div>
        <div className="flex justify-around mt-4">
          <button
            onClick={handleCancel}
            type="button"
            className="bg-red-500 w-1/3 rounded-xl text-white p-2 flex items-center justify-center gap-2"
          >
            <CgArrowLeftO /> CANCELAR
          </button>
          <button
            type="submit"
            className="bg-green-500 w-1/3 rounded-xl text-white p-2 flex items-center justify-center gap-2"
          >
            <CgAdd /> ADICIONAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default CriarForm;
