"use server";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
interface ServerComponentProps {
  children: ReactNode;
}

const ServerComponent: React.FC<ServerComponentProps> = async ({ children }) => {
  const jwt = (await cookies()).get("JWT");
  if (!jwt) {
    redirect("/");
  }

  return <>{children}</>;
}

export default ServerComponent;
