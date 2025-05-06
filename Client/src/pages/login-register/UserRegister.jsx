import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// import logo from "../../assets/ukil-logo.png";
import Swal from "sweetalert2";
const UserRegister = () => {


    const axiosPublic = useAxiosPublic();
     const navigate = useNavigate();


    const handelSignUp = async e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const confirmPassword = form.confirmPassword.value;

        
        const userInfo = {
            name,
            email,
            password
        }

         console.log(userInfo);

        const res = await axiosPublic.post('/auth/userRegister', userInfo)
        // console.log(res.data);

        if (res.data.insertedId) {

            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "You have successfully create an account",
                showConfirmButton: false,
                timer: 1500
            });

             navigate('/login');
        }


    }

    return (
        <div>
            <div className="container mx-auto mb-12">
                {/* <Link to={'/'} className="flex justify-center">
                    <img className="w-3/12" src={logo} alt="" />
                </Link> */}
                <form onSubmit={handelSignUp} className="grid grid-cols-2 gap-4">
                    <h1 className="text-3xl font-semibold col-span-2 text-center mb-6">
                        Register Your Account
                    </h1>
                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="text" placeholder="Full Name" name="name" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="email" placeholder="Email Address" name="email" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="password" placeholder="Password" name="password" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="password" placeholder="Confirm Password" name="confirmPassword" />

                    <input className="col-span-2 border-2 p-2 text-xl w-4/12 my-6 mx-auto bg-[#2ba329] text-white font-semibold" type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default UserRegister;