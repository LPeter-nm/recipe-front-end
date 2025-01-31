"use client";
import { redirect } from "next/navigation";
import { CgAdd } from "react-icons/cg";


const Button_home = () => {
 

  const handleCreate = () => {
    redirect("/criar_receita");
  };

  return ( 
    <div className="flex justify-center items-center mt-10">
      <button onClick={handleCreate} type="button" className="bg-amber-500 w-auto rounded-lg text-black p-2 flex items-center justify-center gap-2 text-2xl border-2 border-black">
        <CgAdd className="size-8" /> Adicione uma nova receita!
      </button>
    </div>
  );
};
 
export default Button_home;
