import { Space, SpaceIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer , toast } from 'react-toastify';
import { updatepassword } from "../../api/api";


const Passwordreset = () =>{
    const [password , setPassword] = useState("");
    const [confirmpassword , setConfirmpassword] = useState("");
    const [active , setActive] = useState(true);
    const navigate = useNavigate();


    


   async function handlesubmit(){
    try{
        if(password != confirmpassword){
            toast.error('Both password not matched');
            // alert("password not matched , please check the both password strings");
        }else{
            const {data , error} = await updatepassword(password);
            if(data?.user?.id){
                toast.success('password updated');
                navigate('/');
            }else{
                console.log(error?.message);
                toast.error('server issue');
            }
        }
    }catch(e){
        console.log(e);
        toast.error('some problem occured in updating the password, try again later!');
    }
   }
   
   function handleclick(){
    setActive(!active);
    navigate("/");
   }

    return(
        <>
        <ToastContainer/>
       {active && 
        <div className="fixed inset-0 w-full h-dvh z-80 bg-black/30 flex justify-center items-center" onClick={handleclick}>
            <div className="bg-white h-6xl w-[350px] p-3 rounded-xl flex flex-col justify-center items-center" onClick={(e) => e.stopPropagation()}>
                <p className="font-bold text-xl">Get Brand  New Paasword</p>
             <form action="#" className="w-full flex flex-col justify-center items-center gap-3 p-2">
              <div className="flex flex-col">
                <label htmlFor="password" id="password" className="font-semibold">
                    Enter it below, please
                </label>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password"  id="password"  className="border-1 p-1" placeholder="Enter here"/>
              </div>
              <div className="flex flex-col">
                <label htmlFor="confrimmpassword"  className="font-semibold"
                >
                    Enter it once more,please
                </label>
                <input onChange={(e) => setConfirmpassword(e.target.value)} value={confirmpassword} type="password"  id="confirmpassword" className="border-1 p-1" placeholder="Enter here" />
                {/* {flag && <span className="font-medium text-red-500">Both password not matched please recheck before Submit</span>} */}
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

export default Passwordreset;
