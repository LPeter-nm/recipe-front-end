const Navbar = () => {
  return ( 
    <div className="bg-amber-200 h-13 border-b-2 border-slate-900">
      <div className="flex justify-end items-center p-4 gap-8">
      <button className="bg-amber-500 border-slate-950 border-solid border-2 h-8 w-16 rounded-xl text-amber-100 " >
        Home
      </button>
      <button className="bg-amber-500 border-slate-950 border-solid border-2 h-8 w-16 rounded-xl text-amber-100" >
        About
      </button>
      </div>
    </div>
   );
}
 
export default Navbar;