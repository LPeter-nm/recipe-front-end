import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { cookies } from "next/headers";

export const handlerAuth = NextAuth({
  pages :{
    signIn: '/',
  },
  providers:[
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {label:"email", type:"email", placeholder: "jsmith"},
        password: {label:"password", type:"password"},
        },
        async authorize(credentials) {
          const res = await fetch(`http://localhost:4000/login`,{
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-type":"application/json" },
          })
          const responseJson = await res.json();
          if (res.ok) {
            (await cookies()).set("JWT", responseJson.token);
            return responseJson.token;
          }
          return null;
      },
})
  ],
});

export {handlerAuth as GET, handlerAuth as POST}
