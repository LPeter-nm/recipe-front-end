"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CgAdd, CgArrowLeftO } from "react-icons/cg";

type Recipe = {
  id: string;
  title: string;
  description: string;
  ingredients: string;
  preparation_time: number;
  difficulty: string;
  category: string;
  imagem_url: string;
};

const UpdateForm = ({ recipe }: { recipe: Recipe }) => {
  const [formData, setFormData] = useState(recipe);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCancel = (recipe_id : string) => {
    router.push(`/receita/${recipe_id}`);
  };

  return (
    <div className="min-h-[774px] flex justify-center items-center bg-amber-100">
      <form
        className="flex p-5 w-full max-w-lg rounded-xl flex-col gap-4 bg-amber-200 border-black border-2"
      >
        <h1 className="text-2xl justify-center flex">Atualize sua receita!</h1>
        <input
          name="title"
          type="text"
          className="bg-gray-100 rounded-lg p-2 border border-gray-300"
          placeholder="Título"
          value={formData.title}
          onChange={handleInputChange}
        />
        <input
          name="description"
          className="bg-gray-100 rounded-lg p-2 border border-gray-300"
          placeholder="Descrição"
          value={formData.description}
          onChange={handleInputChange}
        />
        <input
          name="ingredients"
          className="bg-gray-100 rounded-lg p-2 border border-gray-300"
          placeholder="Ingredientes"
          value={formData.ingredients}
          onChange={handleInputChange}
        />
        <input
          name="imagem_url"
          type="text"
          className="bg-gray-100 rounded-lg p-2 border border-gray-300"
          placeholder="Link da Foto"
          value={formData.imagem_url}
          onChange={handleInputChange}
        />
        <select
          name="category"
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
          name="preparation_time"
          type="number"
          className="bg-gray-100 rounded-lg p-2 border border-gray-300"
          placeholder="Tempo de Preparação em minutos"
          value={formData.preparation_time}
          onChange={handleInputChange}
        />
        <div className="flex justify-around mt-4">
          <button
            onClick={() => handleCancel(recipe.id)}
            type="button"
            className="bg-red-500 w-1/3 rounded-xl text-white p-2 flex items-center justify-center gap-2"
          >
            <CgArrowLeftO /> CANCELAR
          </button>
          <button
            type="submit"
            className="bg-green-500 w-1/3 rounded-xl text-white p-2 flex items-center justify-center gap-2"
          >
            <CgAdd /> ATUALIZAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
