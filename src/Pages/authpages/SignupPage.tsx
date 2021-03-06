import { FC, memo } from "react";
import { Link } from "react-router-dom";
interface Props {
}
const SignupPage: FC<Props> = (props) => {
    return (
        <div>
            <div className="flex flex-col h-ful bg-gray-300">
                <div className="grid place-items-center mx-2 my-20  sm:my-auto">

                    <div className=" h-full w-11/12 p-12 border-double border-t-2 border-b-2 border-gray-600 bg-primary sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
            px-6 py-6 sm:px-10 sm:py-6 
             rounded-lg shadow-md lg:shadow-lg">
                        <div className="flex">
                            <img className="h-40 w-48 mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToqEZo8cWlBOBDhGuIZaZU8Y9EKOfSOMIHGg&usqp=CAU" alt="" />
                        </div>
                        <form className="mt-6" method="POST">
                            <label className="block text-sm font-bold text-black uppercase">Name</label>
                            <input id="email" type="email" name="email" placeholder="First & Last "
                                className="block w-full border-2 border-gray-300 rounded-md py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                                required />

                            <label className="block text-sm font-bold text-black uppercase pt-2">Email</label>
                            <input id="email" type="email" name="email" placeholder="Email Address"
                                className="block w-full border-2 border-gray-300 rounded-md py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                                required />

                            <label className="block mt-2 text-sm font-bold text-black uppercase " >Password</label>
                            <input id="password" type="password" name="password" placeholder="Password"
                                className="block border-2 border-gray-300 rounded-md w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                                required />

                            <Link to="/search"><span className=" text-blue-500"><button type="submit"
                                className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none">
                                Signup
                            </button> </span> </Link>
                            <h1 className="sm:flex sm:flex-wrap pt-4 sm:mb-4 text-md flex justify-center">
                                <Link to="/login"><span className=" flex-2 underline ">Already have account? Login</span> </Link>
                            </h1>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
SignupPage.defaultProps = {
}
export { };
export default memo(SignupPage);