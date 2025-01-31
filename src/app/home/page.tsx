import ServerComponent from "../../components/home/server_home";
import ClientComponent from "../../components/home/client_home";
import Navbar_Home from "@/components/navbar_home/client";
import { SearchProvider } from "@/components/navbar_home/context_search";

const Home = async () => {
  return (

    <ServerComponent>
      <SearchProvider>
        <Navbar_Home/>
      <ClientComponent />
      </SearchProvider>
    </ServerComponent>
  );
}

export default Home;
