import CardRecipe from "@/components/cardrecipe";
import axios from "axios";
import { getSession } from "next-auth/react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Home = async () => {
  "use server"
  const session = getSession();
  if(!session) {
    redirect("/")
  }

;

  return ( 
    <div className="min-h-[800px] flex justify-center items-center bg-amber-100">
      <CardRecipe></CardRecipe>
    </div>
  );
}
 
export default Home;
