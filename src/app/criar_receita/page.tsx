import CriarForm from "../../components/form_create/client_form_create";
import Navbar_Geral from "@/components/navbar_geral/client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Criar = async () => {

  const jwt = (await cookies()).get("JWT");
    if (!jwt) {
      redirect("/")
    }
  return (
    <div>
      
      <Navbar_Geral />
      <CriarForm />
    </div>
  );
};

export default Criar;
