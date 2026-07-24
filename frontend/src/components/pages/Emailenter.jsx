import { useContext, useEffect, useState } from "react";
import { ToastContainer , toast } from 'react-toastify';
import { resetpassword } from "../../api/api";

const Emailenter = ({pass}) => {
    const [email , setEmail] = useState("");
    const [active , setActive] = useState(true);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    async function handlesubmit() {
    
        if( !(email.trim())){
            toast.error('Enter Email');
        }
       else if(!/\S+@gmail\.com/.test(email)){
            setEmail('');
            toast.error("Email is invalid");
        }
        try{
            await resetpassword(email);
            pass();
            setEmail('');
            setActive(!active);
            toast.success('check inbox');
        }catch(error){
            console.log(error);
            toast.error('server error try again after some time');
        }
    }

    return(
       <>
       <ToastContainer/>
       {active && 
        <div className="fixed inset-0 w-full h-dvh z-80 bg-black/30 flex justify-center items-center" onClick={() => setActive(!active) , pass}>
            <div className="bg-white h-6xl w-[350px] p-3 rounded-xl flex flex-col justify-center items-center" onClick={(e) => e.stopPropagation()}>
            <p className="font-bold text-xl">If account is Registerd then reset password email is sended</p>
             <form action="#" className="w-full flex flex-col justify-center items-center gap-3 p-2">
              <div className="flex flex-col">
                <label htmlFor="email" className="font-semibold">
                    Enter email
                </label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email"  id="password"  className="border-1 p-1" placeholder="Enter here"/>
              </div>
            </form>
            <button onClick={handlesubmit} className="flex justify-center items-center w-full bg-black text-white rounded-2xl p-1 cursor-pointer ">
                Submit
            </button>
            </div>
        </div>
       }
       </>
    )
}

export default Emailenter;


