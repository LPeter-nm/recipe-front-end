import RecipeServer_edit from "@/components/form_update_recipe/server_update_form";
import Navbar_Geral from "@/components/navbar_geral/client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Criar = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const jwt = (await cookies()).get("JWT");
  if (!jwt) {
    redirect("/")
  }
  return (
    <div>
      <Navbar_Geral />
      <RecipeServer_edit id={id} />
    </div>
  );
};

export default Criar;
