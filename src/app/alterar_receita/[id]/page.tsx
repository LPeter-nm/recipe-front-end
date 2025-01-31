import RecipeServer_edit from "@/components/form_update_recipe/server_update_form";
import Navbar_Home from "@/components/navbar_home/client";

const Criar = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  
  return (
    <div>
      <Navbar_Home />
      <RecipeServer_edit id={id} />
    </div>
  );
};

export default Criar;
