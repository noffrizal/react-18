import FormLogin from "../Fragments/FormLogin"

const AuthLayouts = (props) => {
    const { children, title } = props
    return (
        <div className="flex gap-x-3">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl text-blue-600 mb-2">{title}</h1>
                <p className="font-medium text-slate-500 mb-8">
                    Welcome, Please enter your details
                </p>
                {children}
            </div>
        </div>
    )
}

export default AuthLayouts