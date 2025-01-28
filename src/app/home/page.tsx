import ServerComponent from "./server_home";
import ClientComponent from "./client_home";
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
