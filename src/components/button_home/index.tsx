import { CgAdd } from "react-icons/cg";
import { redirect } from "next/navigation";
const Button_home = () => {

  function handlecreate(){
    redirect("/criar")
  }
  return ( 
    <div>
      <button onClick={handlecreate} type="button"className="bg-green-500 w-30 rounded-lg text-white p-2 flex items-center justify-center gap-2">
        <CgAdd /> Adicione uma nova receita!
      </button>
    </div>

   );
}
 
export default Button_home;