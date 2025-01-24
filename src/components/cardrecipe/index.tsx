import axios from "axios";
import { cookies } from "next/headers";
import { MdFavoriteBorder } from "react-icons/md";
import { redirect } from "next/navigation";

type Recipe = {
  id: string;
  title: string;
  description: string;
  ingredients: string;
  preparation_time: number;
  difficulty: string;
  category: string;
  imagem_url: string;
}
const CardRecipe = async () => {
  "use server"
  const jwt = (await cookies()).get("JWT")
  const response = await axios.get(`http://10.24.9.6:4000/recipes`,{
    headers:{
      authorization:`Bearer ${jwt!.value}`,
    }
  });
  console.log(response.data)

  return (
    <div className="">
      {
        response.data.map((recipe: Recipe) => (
          <div key={recipe.id} className="bg-amber-500 w-96 rounded-xl">
              <div className="relative">
                <img className="w-96 h-60 rounded" src={recipe.imagem_url} alt="" />
                <button>
                  <MdFavoriteBorder className="absolute right-4 size-9 "/>
                </button>
              </div>
              <div className="p-3">
                <h1 className=" mb-2 text-2xl">{recipe.title}</h1>
                <p>{recipe.description}</p>
              </div>
            </div>
        ))
      }
    </div>
   );
}
 
export default CardRecipe;