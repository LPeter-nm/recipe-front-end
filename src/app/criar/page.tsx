import { CgAdd } from "react-icons/cg";
import { CgArrowLeftO } from "react-icons/cg";
import axios from "axios";
import { cookies } from "next/headers";


const Criar = async () => {
    const jwt = (await cookies()).get("JWT");

    async function handleSubmit(formdata:FormData) {
        "use server"
        const title = formdata.get("titulo")
        const description = formdata.get("descricao")
        const ingredients = formdata.get("ingredientes")
        const imagem_url = formdata.get("linkFoto")
        const category = formdata.get("categoria")
        const preparation_time = formdata.get("tempoPreparo")
        const difficulty =formdata.get("dificuldade")
        console.log(
            title,
            description,
            ingredients,
            preparation_time,
            difficulty,
            category,
            imagem_url
        )
        const response = await axios.post("http://10.24.9.6:4000/recipe",{
            title: title,
            description: description,
            ingredients: ingredients,
            preparation_time: preparation_time,
            difficulty: difficulty,
            category: category,
            imagem_url: imagem_url,
            }, {
                headers:{
                    authorization:`Bearer ${jwt!.value}`,
                },
            });
            return response.data.response
        }

    return ( 
        <div className="min-h-[774px] flex justify-center items-center bg-amber-100 ">
            <form className=" flex p-5 w-full max-w-lg rounded-xl  flex-col gap-4 bg-amber-200  border-black border-2"  >

                <h1 className="text-2xl justify-center flex" >Adicione uma nova receita!</h1>
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
                <input
                    name="categoria"
                    type="text"
                    className="bg-gray-100 rounded-lg p-2 border border-gray-300"
                    placeholder="Categoria"
                />
                <input
                    name="tempoPreparo"
                    type="number"
                    className="bg-gray-100 rounded-lg p-2 border border-gray-300"
                    placeholder="Tempo de Preparação"
                />
                <input
                    name="dificuldade"
                    type="text"
                    className="bg-gray-100 rounded-lg p-2 border border-gray-300"
                    placeholder="Dificuldade"
                />
                <div className="flex justify-around mt-4">
                <button
                        type="button"
                        className="bg-red-500 w-1/3 rounded-xl text-white p-2 flex items-center justify-center gap-2"
                    >
                        <CgArrowLeftO /> CANCELAR
                    </button>

                    <button
                        formAction={handleSubmit}
                        type="submit"
                        className="bg-green-500 w-1/3 rounded-xl text-white p-2 flex items-center justify-center gap-2"
                    >
                        <CgAdd /> ADICIONAR
                    </button>
                </div>
                
        </form>
    </div>
        
     );
}
 
export default Criar;