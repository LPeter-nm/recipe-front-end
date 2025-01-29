'use client';

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { CgAdd, CgArrowLeftO } from "react-icons/cg";
import { handleSubmit } from "./server_form_criar";
import { LuCookingPot } from "react-icons/lu";

const CriarForm = () => {
  const router = useRouter();
  const [dificuldade, setDificuldade] = useState(0);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    formdata.set("dificuldade", ['FACIL', 'MEDIO', 'DIFICIL'][dificuldade - 1] || "");
    await handleSubmit(formdata);
    router.push("/home");
  };

  const handleCancel = () => {
    router.push("/home");
  };

  const handleDificuldade = (nivel: number) => {
    setDificuldade(nivel);
  };

  return (
    <div className="min-h-[774px] flex justify-center items-center bg-amber-100">
      <form
        className="flex p-5 w-full max-w-lg rounded-xl flex-col gap-4 bg-amber-200 border-black border-2"
        onSubmit={handleFormSubmit}
      >
        <h1 className="text-2xl justify-center flex">Adicione uma nova receita!</h1>
        <input
          name="titulo"
          type="text"
          className="bg-gray-100 rounded-lg p-2 border border-gray-300"
          placeholder="Título"
        />
        <input
          name="descricao"
          className="bg-gray-100 rounded-lg p-2 border border-gray-300"
          placeholder="descrição"
        />
        <input
          name="ingredientes"
          className="bg-gray-100 rounded-lg p-2 border border-gray-300"
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
        </select>
        <input
          name="tempoPreparo"
          type="number"
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
