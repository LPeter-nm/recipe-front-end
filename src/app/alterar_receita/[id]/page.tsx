import RecipeServer_edit from "@/components/form_update_recipe/server_update_form";

const Criar = async ({ params }: { params: { id: string } }) => {

   const { id } = await params;
    return <RecipeServer_edit id={id} />;
};

export default Criar;