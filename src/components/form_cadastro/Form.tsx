import { redirect } from 'next/navigation'
import { api } from '@/service/server';


const Form= ()=>{
 async function handleSubmit(formdata:FormData) {
 "use server"
 const email= formdata.get("email")
 const password= formdata.get("password")
 const name = formdata.get("Name")
 await api.post(`register`,{
   email,password,name
 })
 return redirect ('/')
};



return(
 <div className="min-h-[774px] flex justify-center items-center bg-amber-100 ">
 <form
 className=" flex p-10 h-[400px] w-[350px] rounded-xl justify-center items-center  bg-amber-200  flex-col gap-3 border-black border-2">
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
   formAction={handleSubmit}
   >CRIAR</button>

 </form>
 </div>
)


};


export default Form;
