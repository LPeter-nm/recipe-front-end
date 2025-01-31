
import ClientForm from '@/components/form_cadastro/Form_cadastro_client';
import { handleSubmit } from '@/components/form_cadastro/Form_cadastro_server';
import Navbar from '@/components/navbar_login';


const Form = () => {

  return (
    <div className='-mb-6'>
      <Navbar />
      <ClientForm handleSubmit={handleSubmit} />;
    </div>
    
  )
};

export default Form;
