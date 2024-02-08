import Header from "../header/Header"; 
import Footer from "../home/home-components/Footer";
import { logo } from "../../assets";
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const redirectToSignup = () => {
    navigate('/signup');
  };

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col sm:w-full md:w-[400px] lg:w-[400px] m-auto  border-black border-4 px-11 pb-11">
          <div className="flex flex-col items-center gap-2 w-full mt-7">
            <div className='text-black text-2xl font-bold'>Войти</div>
          </div>
          <div className='mt-7 flex flex-col gap-4'>
            <div className="flex items-center m-auto w-full max-w-md bg-slate-100 rounded-md p-2">
              <img src={logo} alt="" className="w-8 h-8 mx-2" />
              <input type="email" className='h-8 flex-grow bg-transparent outline-none text-md' placeholder="Email" />
            </div>
            <div className="flex items-center m-auto w-full max-w-md bg-slate-100 rounded-md p-2">
              <img src={logo} alt="" className="w-8 h-8 mx-2" />
              <input type="password" className='h-8 flex-grow bg-transparent outline-none text-md' placeholder="Password" />
            </div>
            <div className="my-4 text-md hover:underline hover:text-indigo-200 hover:cursor-pointer" onClick={redirectToSignup}>Регистрация</div>
            <div className="mb-4 text-md hover:underline hover:text-indigo-200 hover:cursor-pointer" >Забыли пароль</div>
          </div>
          <div className="flex gap-2 pt-4 mb-auto">
            <div className='transition duration-300 ease-in-out bg-black text-white flex justify-center items-center w-full h-10 text-md font-bold cursor-pointer hover:bg-gray-800' onClick={() => { loginWithRedirect() }}>Войти</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginForm;
