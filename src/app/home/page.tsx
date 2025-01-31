import ClientComponent from "../../components/home/client_home";
import Navbar_Home from "@/components/navbar_home/client";
import { SearchProvider } from "@/components/navbar_home/context_search";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Home = async () => {

  const jwt = (await cookies()).get("JWT");
  if (!jwt) {
    redirect("/")
  }
  
  return (

      <SearchProvider>
        <Navbar_Home/>
      <ClientComponent />
      </SearchProvider>
  );
}

export default Home;
