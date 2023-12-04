import { Helmet } from "react-helmet";
import SIgnUpForm from "../Components/UserReg/SignUpForm";
// import SocialLogin from "../Components/UserReg/SocialLogin";

const SignUpPage = () => {
    return (
        <div className='max-w-screen-xl mx-auto pt-28 flex flex-col items-center justify-center'>
            <Helmet>
        <meta charSet="utf-8" />
        <title>CareCoord: Sign Up</title>
      </Helmet>
            {/* <SocialLogin></SocialLogin> */}
            <h2 className="text-3xl">User Registration</h2>
            <SIgnUpForm></SIgnUpForm>
        </div>
    );
};

export default SignUpPage;