import { useState } from "react"
import { logo } from "../../assets"

const LoginSignup = () => {
    const [action, setAction] = useState("Регистрация");


    return (
    <div className="flex flex-col sm:w-[600px] m-auto mt-52 pb-8 border-black border-4">
        <div className="flex flex-col items-start gap-2 w-full ml-28 mt-14 ">
            <div className='text-black text-4xl font-bold'>{action}</div>
            <div></div>
        </div>
        <div className='mt-14 flex flex-col gap-6'>  {/*input*/}
            {action==='Логирование'?<div></div>:<div className="flex items-center m-auto w-96 h-20 bg-slate-100">
                <img src={logo} alt="" className="m-0 w-10 h-10 mx-7"/>
                {action==='Логирование'?<div></div>:<input type="text" className='h-12 w-96 bg-transparent outline-none text-xl' placeholder="Name"/>}
            </div>}
            <div className="flex items-center m-auto w-96 h-20 bg-slate-100">
                <img src={logo} alt="" className="m-0 w-10 h-10 mx-7"/>
                <input type="email" className='h-12 w-96 bg-transparent outline-none text-xl' placeholder="Email"/>
            </div>
            <div className="flex items-center m-auto w-96 h-20 bg-slate-100">
                <img src={logo} alt="" className="m-0 w-10 h-10 mx-7"/>
                <input type="password" className='h-12 w-96 bg-transparent outline-none text-xl' placeholder="Password"/>
            </div>
        </div>
        {action==='Регистрация'?<div className="ml-26 mt-12 mb-8 "></div>:<div className='ml-24 mt-7 mb-8 text-lg '>Забыли <span className='text-red-600 cursor-pointer'>пароль</span></div> }
        <div className="flex gap-8 ml-16 mb-auto ">
            <div className={action==='Регистрация'?'bg-black-500 flex justify-center items-center w-56 h-16 text-lg font-bold cursor-pointer':"flex justify-center items-center w-56 h-16 bg-black text-white text-lg font-bold  cursor-pointer"} onClick={() => {setAction('Регистрация')}}>Регистрация</div>  {/*submit*/}
            <div className={action==='Логирование'?'bg-black-500 flex justify-center items-center w-56 h-16 text-lg font-bold  cursor-pointer':" text-white flex justify-center items-center w-56 h-16 bg-black text-lg font-bold  cursor-pointer"} onClick={() => {setAction('Логирование')}}>Войти</div>
        </div>
    </div>
  )
}

export default LoginSignup