import { ReactNode } from "react";
// import { getSession } from "next-auth/react";
// import { redirect } from "next/navigation";

interface ServerComponentProps {
  children: ReactNode;
}

const ServerComponent: React.FC<ServerComponentProps> = async ({ children }) => {
  // const session = await getSession();
  // if (!session) {
    // redirect("/");
  // }

  return <>{children}</>;
}

export default ServerComponent;
