import { CgAdd } from "react-icons/cg";
import { CgArrowLeftO } from "react-icons/cg";
import { redirect } from "next/navigation";
import axios from "axios";
import { getSession } from "next-auth/react";
import { cookies } from "next/headers";

const Criar = async () => {
    "use server"
    const jwt = (await cookies()).get("JWT");
    const session = await getSession();
    
    if (!session) {
      redirect("/");
      return null;
    }

    
    async function handleSubmit(formdata:FormData) {
        "use server"
        const titulo = formdata.get("titulo")
        const descricao = formdata.get("descricao")
        const ingredientes = formdata.get("ingredientes")
        const linkfoto = formdata.get("linkFoto")
        const categoria = formdata.get("categoria")
        const tempoPreparo = formdata.get("tempoPreparo")
        if (jwt) {
            await axios.post(`http://localhost:4000/recipe`, {
                titulo,
                descricao,
                ingredientes,
                linkfoto,
                categoria,
                tempoPreparo,
            }, {
                headers: {
                    authorization: jwt.value,
                },
            });
        }

        return redirect('/');
       };
    return ( 
        <div className="min-h-[774px] flex justify-center items-center bg-amber-100 ">
            <form className=" flex p-5 w-full max-w-lg rounded-xl  flex-col gap-4 bg-amber-200  border-black border-2" action={handleSubmit} >

                <h1 className="text-2xl justify-center flex" >Adicione uma nova receita!</h1>
            <input
                    name="titulo"
                    type="text"
                    className="bg-gray-100 rounded-lg p-2 border border-gray-300"
                    placeholder="Título"
                />
               <textarea
                    name="descricao"
                    className="bg-gray-100 rounded-lg p-2 border border-gray-300"
                    placeholder="descrição"
                />
                <textarea
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
                    type="text"
                    className="bg-gray-100 rounded-lg p-2 border border-gray-300"
                    placeholder="Tempo de Preparação"
                />
                <div className="flex justify-around mt-4">
                    <button
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
}
 
export default Criar;