import axios from "axios";
import { getSession } from "next-auth/react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Home = async () => {
  "use server"
  
  const jwt = (await cookies()).get("JWT");
  const session = await getSession();
  
  if (!session) {
    redirect("/");
    return null;
  }

  if (!jwt) {
    console.error("JWT não encontrado.");
    return (
      redirect("/error")
    );
  }

  const receitas = await axios.get(`http://localhost:4000/recipes/${jwt.value}`, {
    headers: {
      authorization: jwt.value,
    },
  });

  console.log(receitas);

  return ( 
    <div className="min-h-[800px] flex justify-center items-center bg-amber-100">
      <pre>{JSON.stringify(receitas.data, null, 1)}</pre>
    </div>
  );
}
 
export default Home;
