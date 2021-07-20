import Image from "next/image";
import { signIn } from "next-auth/client";
import Button from "@material-tailwind/react/Button";


function Login() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen py-2">
            <Image
                src="http://links.papareact.com/1ui"
                height="300"
                width="550"
                objectFit="contain" 
            />
            <Button 
                className="mt-10 w-28"
                color="blue"
                buttonType="filled"
                ripple="ligth"
                onClick={signIn}
            >
                LogIn
            </Button>
        </div>
    )
}

export default Login
