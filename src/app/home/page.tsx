import axios from "axios";
import { getSession } from "next-auth/react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Home = async () => {
  "use server"
  const jwt = (await cookies()).get("JWT")
  const receitas = await axios.get(`http://10.24.9.6:4000/recipes/${jwt?.value}`,{
    headers:{
      authorization:`${jwt.value}`,
    }
  });
  console.log(receitas)
  const session = getSession();
  if(!session) {
    redirect("/")
  }

  console.log(receitas);

  return ( 
    <div className="min-h-[800px] flex justify-center items-center bg-amber-100">
      <pre>{JSON.stringify(receitas.data, null, 1)}</pre>
    </div>
  );
}
 
export default Home;
