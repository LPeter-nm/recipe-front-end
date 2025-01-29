import ServerComponent from "../../components/home/server_home";
import ClientComponent from "../../components/home/client_home";
import Navbar_Home from "@/components/navbar_home";

const Home = async () => {
  return (

    <ServerComponent>
      <Navbar_Home/>
      <ClientComponent />
    </ServerComponent>
  );
}

export default Home;
