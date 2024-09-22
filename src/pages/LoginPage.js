import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { fetchUser } from "../redux/features/thunk/fetchUser";
import { fetchStates } from "../utils/fetchStates";
import { useEffect } from "react";

function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "all",
    });
    const history = useHistory();
    const dispatch = useDispatch();
    const { fetchStates: userFetchStates } = useSelector((state) => state.user)
    
    const onSubmit = (loginData) => {
        console.log("a")
        dispatch(fetchUser(loginData));
    };

    if (userFetchStates === fetchStates.FETCHED) {
        history.push("/");
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token) history.push("/")
    }, [])

    return (
        <div>
            <div className="pt-10 flex flex-col justify-around items-center h-24 bg-secondary">
                <h1 className="font-bold text-4xl leading-[3rem] text-brand">
                    Log In
                </h1>
            </div>
            <form
            className="bg-secondary flex flex-col items-center justify-between p-5"
            onSubmit={handleSubmit(onSubmit)}
            >
                <div className="w-96 h-24 text-left">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                    Email :
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand focus:border-brand block w-full p-2.5"
                        placeholder="Enter your email address..."
                        {...register("email", {
                        required: "Please enter your e-mail address.",
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Please enter a valid email.",
                        },
                        })}
                    />
                    {errors.email && (
                        <span className="mt-2 text-sm text-red-600 dark:text-red-500">* {errors.email.message}</span>
                    )}
                    </label>
                </div>
                <div className="w-96 h-24 text-left">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                    Password :
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand focus:border-brand block w-full p-2.5"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password..."
                        {...register("password", {
                        required: "Please enter your password.",
                        })}
                    />
                    {errors?.password && (
                        <span className="mt-2 text-sm text-red-600 dark:text-red-500">* {errors.password.message}</span>
                    )}
                    </label>
                </div>
                <button
                    className="text-brand transition-colors duration-300 hover:text-white border border-brand hover:bg-brand focus:ring-4 focus:outline-none focus:ring-brand font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                    Submit
                </button>
            </form>
        </div>
    )
};

export default LoginPage;