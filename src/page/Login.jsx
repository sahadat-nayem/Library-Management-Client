import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";


const Login = () => {

    const {signInUser, setUser, signInWithGoogle} = useContext(AuthContext)
    const [error, setError] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form =e.target;
        const email =form.email.value;
        const password =form.password.value;
        signInUser(email, password)
        .then(result =>{
            const user = result.user;
            setUser(user);
            navigate(location?.state ? location.state : "/");
        })
        .catch((err) => {
            setError({...error, login: err.code})
        });
        
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            setUser(result)
            navigate('/')
        })
        .catch(error =>{
            setError({...error, login: err.code})
        })
    }

    const handleForgetPassword = () =>{
        const email = emailRef.current.value;
        if(!email){
            alert('Please provide a valid email address')
        }
        else{
            sendPasswordResetEmail(auth, email)
            .then(() =>{
                alert('Password reset email sent, please check your email')
            })
        }
    }

    return (
        <div className="min-h-screen flex justify-center items-center mt-10">
            <div className="card bg-base-100 w-full max-w-lg rounded-none shrink-0 p-10">
                <h2 className="text-2xl font-semibold text-center mt-10">Login your account</h2>
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" ref={emailRef} className="input input-bordered bg-gray-100" required />
                    </div>
                    <div className="form-control relative">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered bg-gray-100" required />
                    <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-2 top-12">
                        {
                            showPassword ? <FaEye /> : <FaEyeSlash />
                        }
                        </button>
                    {
                        error.login && 
                        <label className="label text-sm text-red-600">
                            You are giving wrong password. Please try again.
                        </label>
                    }
                    <label onClick={handleForgetPassword} className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6 gap-3">
                    <button className="btn btn-info rounded-none">Login</button>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info rounded-none"><span className="text-xl"><FcGoogle /></span> Sign in with Google</button>
                    </div>
                </form>
                <p className="text-center font-semibold">Dont’t Have An Account ? <Link to="/auth/register" className="text-red-500">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;