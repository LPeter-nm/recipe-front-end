"use client"
import { redirect } from 'next/navigation'
import axios from 'axios';

const Form= ()=>{
async function handleSubmit(formdata:FormData) {
  
  const email= formdata.get("email")
  const password= formdata.get("password")
  const name = formdata.get("Name")
  await axios.post("http://10.24.8.167:3333/register",{
    email,password,name
  })
  return redirect ('/home')
};
function handleCreate(){
  redirect ('/cadastro')
}
return(
  <div className="min-h-[860px] flex justify-center items-center bg-amber-100 ">
  <form action={handleSubmit}
  className=" flex p-10 h-[400px] w-[350px] rounded-xl justify-center items-center  bg-amber-200  flex-col gap-3 border-black border-2 mb-40">
    <input 
    name="Name"
    type="string"
    className="bg-amber-100 rounded-xl "
    placeholder="Name"
    />
    
    <input 
    name="email"
    type="email"
    className="bg-amber-100 rounded-xl "
    placeholder=" Email"
    />

<input 
    name="password"
    type="password"
    className="bg-amber-100 rounded-xl"
    placeholder=" Senha"
    />
    <button
    type="submit"
    className="bg-amber-500 w-40 rounded-xl text-white "
    >CRIAR</button>

<div className="flex gap-1">
      <p>já tem uma conta entre</p>
      <button type="button" onClick={handleCreate} className="text-cyan-500 italic border-b-4">aqui</button>
    </div>


    
  </form>
  </div>
)

};

export default Form;