import InputForm from "../Elements/Input"
import Button from "../Elements/Button"
const FormRegister = () => {
    return (
        <form action="">

            <InputForm
                label="Fullname"
                type="text"
                placeholder="insert your name here"
                name="name"
            />

            <InputForm
                label="Email"
                type="email"
                placeholder="example@mail.com"
                name="email"
            />

            <InputForm
                label="Password"
                type="password"
                placeholder="*******"
                name="password"
            />

            <InputForm
                label="Confirm Password"
                type="password"
                placeholder="*******"
                name="confirmPassword"
            />

            <Button classname="bg-green-600 w-full">Register</Button>
        </form>
    )
}

export default FormRegister