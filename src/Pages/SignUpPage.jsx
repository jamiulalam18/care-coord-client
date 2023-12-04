import SIgnUpForm from "../Components/UserReg/SignUpForm";
// import SocialLogin from "../Components/UserReg/SocialLogin";

const SignUpPage = () => {
    return (
        <div className='max-w-screen-xl mx-auto pt-28 flex flex-col items-center justify-center'>
            {/* <SocialLogin></SocialLogin> */}
            <h2 className="text-3xl">User Registration</h2>
            <SIgnUpForm></SIgnUpForm>
        </div>
    );
};

export default SignUpPage;