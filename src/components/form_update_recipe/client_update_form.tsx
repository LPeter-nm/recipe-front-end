"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CgAdd, CgArrowLeftO } from "react-icons/cg";
import Update_Recipe from "./server_update";
import { LuCookingPot } from "react-icons/lu";

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
  const [dificuldade, setDificuldade] = useState(1);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDificuldade = (level: number) => {
    setDificuldade(level);
  };

  const handleCancel = (recipe_id: string) => {
    router.push(`/receita/${recipe_id}`);
  };

  const validateForm = () => {
    const requiredFields = ["title", "description", "ingredients", "preparation_time", "category", "imagem_url"];
    for (const field of requiredFields) {
      if (!formData[field as keyof Recipe]) {
        setError("Por favor, preencha todos os campos.");
        return false;
      }
    }
    setError("");
    return true;
  };

  const handleUpdate = async () => {
    if (!validateForm()) {
      return;
    }

    const updatedFormData = {
      ...formData,
      difficulty: ['FACIL', 'MEDIO', 'DIFICIL'][dificuldade - 1] || "",
    };
    const updatedRecipe = await Update_Recipe(recipe.id, updatedFormData);
    if (updatedRecipe) {
      router.push(`/receita/${recipe.id}`);
    }
  };

  return (
    <div className="min-h-[774px] flex justify-center items-center bg-amber-100">
      <form
        className="flex p-5 w-full max-w-lg rounded-xl flex-col gap-4 bg-amber-200 border-black border-2"
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate();
        }}
      >
        <h1 className="text-2xl justify-center flex">Atualize sua receita!</h1>
        {error && <p className="text-red-600">{error}</p>}
        <input
          name="title"
          type="text"
          className="bg-gray-100 rounded-lg p-2 border border-gray-300"
          placeholder="Título"
          value={formData.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          className="bg-gray-100 rounded-lg p-2 border border-gray-300 h-24"
          placeholder="Descrição"
          value={formData.description}
          onChange={handleInputChange}
        />
        <textarea
          name="ingredients"
          className="bg-gray-100 rounded-lg p-2 border border-gray-300 h-24"
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
          value={formData.category}
          onChange={handleInputChange}
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
          name="preparation_time"
          type="number"
          className="bg-gray-100 rounded-lg p-2 border border-gray-300"
          placeholder="Tempo de Preparação em minutos"
          value={formData.preparation_time}
          onChange={handleInputChange}
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
