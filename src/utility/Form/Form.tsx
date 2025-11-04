import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Button from "../button";
import { Link } from "react-router";
import googleIcon from "../../../images/icons/googleIcon.svg"
interface FormProps {
    isLogin?:boolean;
    isEmail:boolean;
    name:string;
    phoneNumber:string;
    email:string;
    password:string;
    isShowPass:boolean;
}
type TFormOptional=Partial<FormProps>
const Form: React.FC<FormProps | TFormOptional>  = (props) => {
    const {isShowPass, isLogin, email, isEmail, name, phoneNumber, password}=props
    return ( 
        <div className="block w-[370px] text-center">
            <div className="block mb-12 text-left">
                <h2 className="font-Inter mb-6 text-h2Size font-medium leading-[30px] tracking-widest">{isLogin ? 'Log in to Exclusive' : 'Create an account'}</h2>
                <p className="font-[14px] font-regular leading-[24px]">{isLogin ? 'Enter your details below' : 'Enter your details below'}</p>
            </div>
            <form method="post" className="flex justify-center items-start w-full flex-col gap-10 mb-4">
                
                {!isLogin && <div className="w-full">
                    <input className="w-full border-b-[1px] border-black/50 pb-2 focus:outline-0 focus:border-b-2" type="text" autoComplete="off" placeholder="Name" name="name"  value={name}/>
                </div>}
                <div className="w-full"> 
                    <input className="w-full border-b-[1px] border-black/50 pb-2 focus:outline-0 focus:border-b-2" type={isEmail ? 'email' : 'phone'} autoComplete="off" name={isEmail ? "email" : "phone"}  placeholder="Email or Phone Number" value={isEmail ? email : phoneNumber } />
                </div>
                <div className="w-full">
                    <input className="w-[100%] border-b-[1px] border-black/50 pb-2 focus:outline-0 focus:border-b-2" type={!isShowPass ? "password" : "text"} autoComplete="off" name="password" placeholder="Password" value={password} />
                    <button type="button">
                        {!isShowPass ? <FaEyeSlash size={20}/> : <FaEye size={20}/>}
                    </button>
                </div>
                {isLogin ? (  <div className="w-full flex justify-between items-center">
                    <Button type="submit" className={`bg-lightRed ${!isLogin && 'w-full'} py-4 ${!isLogin ? 'px-[122px]' : 'px-12'} text-center flex justify-center items-center rounded-sm`}>Log In</Button>
                    <Link to="/" className="font-[14px] leading-[24px] text-lightRed">Forget Password?</Link>
                </div>) : (
                    <Button type="submit" className="bg-lightRed w-full py-4 px-[122px] text-center flex justify-center items-center rounded-sm">Create Account</Button>
                )}
              
            </form>
            {!isLogin && 
            <>
            <Link to='https://www.google.com/' className="flex justify-center items-center px-[86px] py-4 gap-4 rounded-sm border-[1px] border-black/40">
                    <img src={googleIcon} alt="" />
                    <span>Sign up with Google</span>
            </Link>
            <div className="block mt-[34px]">
                <p>Already have account? <Link to={'/'}>Log in</Link></p>
            </div>
            </>}
        </div>
     );
}
 
export default Form;