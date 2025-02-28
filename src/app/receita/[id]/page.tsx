import RecipeServer from "@/components/recipe/server_recipe";
import Navbar_Geral from "@/components/navbar_geral/client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function RecipePage({ params }: { params: { id: string } }) {
  const jwt = (await cookies()).get("JWT");
  if (!jwt) {
    redirect("/")
  }
  const { id } = await params;
  return(
    <div>
       <Navbar_Geral />
       <div className="h-screen">
        <RecipeServer id={id} />;
       </div>
       
    </div>
  )
}

