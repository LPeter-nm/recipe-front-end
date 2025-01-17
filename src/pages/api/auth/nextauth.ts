import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import { cookies } from "next/headers";

const handler = NextAuth({
  pages :{
    signIn: '/',
  },
  providers:[
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {label:"email", type:"email"},
        password: {label:"password", type:"password"},
        },
        async authorize(credentials) {
          const res = await fetch("http://10.24.8.167:3333/login",{
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-type":"application/json" },
          })
          const {user, token} = await res.json();
          if (res.ok && user) {
            (await cookies()).set("JWT", token.token);
            return user;
          }
          return null;
      },
})
  ],
});

export {handler as GET, handler as POST}
