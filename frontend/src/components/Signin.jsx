import { useContext, useEffect, useState } from "react";
import { login, signup } from "../api/api";
import { ToastContainer , toast } from 'react-toastify';
import { AuthContext } from "./AuthManager";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { X } from 'lucide-react';
import Emailenter from "./pages/Emailenter";



function Signin({close ,pass}){

    const {setToken , setUser} = useContext(AuthContext);
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [name , setName] = useState("");
    const [active ,setActive] = useState(false);
    const [error , setError] = useState({});

    const navigate = useNavigate();

    // for background transparent color
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);


    useEffect(() => {
      setError({});
    },[active]) 

    function clear(){
        setEmail("");
        setPassword("");
    }

// handling the submission request of user registration
 async function HandleSubmitSignup(){
    let errors = {}
    try{
        
            if(!name.trim()){
                errors.name = "Name is required";
            }
            if(!email.trim()){
                errors.email = "Email is required";
            }else if(!/\S+@gmail\.com/.test(email)){
                errors.email = "Email is invalid";
            }
            if(!password.trim()){
                errors.password = "Password is required";
            }else if(password.length < 6){
                errors.password = "Password must be at least 6 characters";
            }
        
            if(Object.keys(errors).length === 0){
                    console.warn(name, email, password);
                    let result = await signup(name , email , password);
                    if(result?.user?.id){
                        toast.success('Account created! Signin to use services.');
                        setActive(!active);
                    }
            }
            else{
              setError(errors);
              toast.error('Enter Correct Data' , {
                onclose : () => clear(),
              }
              );
          }
        }catch(e){
            toast.error("login failed , check entered email , password");
            console.log(e);
            clear();

       }
    }


// handling the sign in request of user
   async function HandleSubmitSignin(){
    let errors = {};
    try{
            if(!email.trim()){
                errors.email = "Email is required";
            }else if(!/\S+@gmail\.com/.test(email)){
                errors.email = "Email is invalid";
            }
            if(!password.trim()){
                errors.password = "Password is required";
            }else if(password.length < 6){
                errors.password = "Password must be at least 6 characters";
            }
        
            if(Object.keys(errors).length === 0)
            {       console.warn(email, password);
                    let result = await login(email,password);
                    console.log(result);
                    if(result?.user?.id){
                       setUser(result.user);
                       setToken(result.session.access_token);
                       navigate('/');
                       close();
                    }
            }else{
              setError(errors);
              toast.error('Enter Correct Data' , {
                onclose : clear(),
              }
              );
          }
        }catch(e){
            toast.error("login failed");
            console.log(e);
            clear();

       }
    }

    function HandleForgetPass(){
        pass();
        close();
    }




    return(
    <>
    <ToastContainer/>
        <div className="fixed inset-0 w-full h-dvh z-80 bg-black/30 flex justify-center items-center" onClick={() => close()}>
            <div className="relative bg-white rounded-xl w-xl py-4 m-auto mx-4 flex flex-col p-10"
            onClick={(e) => e.stopPropagation()}
            >
                {/* signin & signup */}
            { (active) ?  
             (
             <div className="flex flex-col items-center justify-center ">
                <h1 className="font-bold text-4xl">Sign Up</h1>
                <p>Already Resitered?{' '}<span className="text-black font-semibold cursor-pointer" onClick={() => setActive(!active)}>Sign in</span></p>
             </div>
             ) 
             :
             (
              <div className="flex flex-col items-center justify-center ">
                <h1 className="font-bold text-4xl" >Sign In</h1>
                <p>Don't have an account?{' '}<span onClick={() => setActive(!active)} className="text-black font-semibold cursor-pointer">Sign up</span></p>
             </div>
             )

            }
             <form action="#" className="px-10 pb-1 pt-4 m-auto flex flex-col  justify-between gap-6">
                {(active) && 
                <div className="flex flex-col">
                    <label htmlFor="text" 
                    id="text"
                    className="font-semibold"
                    >Full Name</label>
                    <input type="text"
                    id="text"
                    placeholder="Enter Name"
                    className="h-10 rounded-sm px-2 border-2 border-gray-400"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    {active && error?.name ?<p className='text-red-500'>{error.name}</p> : ''}
                </div>
                }
                <div className="flex flex-col">
                    <label htmlFor="email" 
                    id="email"
                    className="font-semibold"
                    >Email</label>
                    <input type="email"
                    id="email"
                    placeholder="Enter Email"
                    className="h-10 rounded-sm px-2 border-2 border-gray-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    {error?.email ?<p className='text-red-500'>{error.email}</p> : ''}

                </div>

                <div className="flex flex-col">
                    <label htmlFor="password"
                    id="password"
                    className="font-semibold"
                    >
                    Password
                    </label>
                    <input type="password"
                    id="password"
                    value={password}
                    className="h-10 rounded-sm px-2 border-gray-400 border-2"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    {error?.password ? <p className='text-red-500'>{error.password}</p> : ''}
                </div>
                 
                </form>
                <div className="flex flex-row justify-center w-full pb-2">
                    <button className="font-semibold cursor-pointer"
                    onClick={HandleForgetPass}>forget password ?</button>
                </div>
                {
                ( active ) ? 
                 <button className="cursor-pointer mx-2 bg-black rounded-xl p-4 text-white hover:bg-black/80"
                    onClick={HandleSubmitSignup}
                    >
                    Create Account
                </button>
                :
                 <button className="cursor-pointer mx-2 bg-black rounded-xl p-4 text-white hover:bg-black/80"
                    onClick={HandleSubmitSignin}
                    >
                     Get Started
                </button>
                 }   
            </div>
        </div>
  
    </>
        
    )
}


export default Signin;
