"use client";

import Button_home from "../../components/button_home";
import CardRecipe from "../../components/cardrecipe";

const ClientComponent = () => {
  return (
      <div className="min-h-[800px] flex flex-col bg-amber-100">
        <div className="mb-10 ">
          <Button_home />
        </div>
      
      <div className="items-center justify-center flex ">
        <CardRecipe />
      </div>
      
    </div>
  
    
  );
}

export default ClientComponent;
