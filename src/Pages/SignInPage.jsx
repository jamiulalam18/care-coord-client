
import SignInForms from '../Components/UserReg/SignInForms';
// import SocialLogin from './../Components/UserReg/SocialLogin';
const SignInPage = () => {
    return (
        <div className='max-w-screen-xl mx-auto pt-28 flex flex-col items-center justify-center'>
            {/* <SocialLogin></SocialLogin> */}
            <h2 className="text-3xl">User Login</h2>

            <SignInForms></SignInForms>
        </div>
    );
};

export default SignInPage;