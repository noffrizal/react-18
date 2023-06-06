import FormLogin from "../Fragments/FormLogin"
import { Link } from "react-router-dom"

const AuthLayouts = (props) => {
    const { children, title, type } = props
    return (
        <div className='min-h-screen items-center flex justify-center'>
            <div className="flex gap-x-3">
                <div className="w-full max-w-xs">
                    <h1 className="text-3xl text-blue-600 mb-2">{title}</h1>
                    <p className="font-medium text-slate-500 mb-8">
                        Welcome, Please enter your details
                    </p>
                    {children}
                    <p className="text-sm mt-5 text-center">
                        {type === 'login' ? "Don't have an account?" : "Already Have an Account?"}

                        {type === 'login' &&
                            (<Link to="/register" className="font-bold text-blue-600"> Sign Up here</Link>)}

                        {type === 'register' &&
                            (<Link to="/login" className="font-bold text-blue-600"> Login here</Link>)}


                    </p>
                </div>
            </div>
        </div>
    )
}

export default AuthLayouts