import { Link } from "react-router-dom";


const Login = () => {


  return (
    <div className=" flex items-center justify-center min-h-screen  border-gray-100 p-4">
<div className="flex align-middle flex-col gap-5 w-[400px]">

 <input
            type="text"
            placeholder="Email"
            className="w-full bg-clarivoice-card rounded-lg pl-3 pr-5 py-3 text-white text-sm font-['Plus_Jakarta_Sans'] placeholder:text-clarivoice-white-70 border-none outline-none focus:ring-2 focus:ring-clarivoice-primary/50 transition-all"
          />

           <input
            type="text"
            placeholder="Password"
            className="w-full bg-clarivoice-card rounded-lg pl-3 pr-5 py-3 text-white text-sm font-['Plus_Jakarta_Sans'] placeholder:text-clarivoice-white-70 border-none outline-none focus:ring-2 focus:ring-clarivoice-primary/50 transition-all"
          />
            {/* <Link to="Signup" className="text-orange-500">New User</Link> */}

  <Link to="/Dashboard" className="bg-orange-500 rounded-lg p-4 text-center">Submit</Link>
</div>
</div>
  )
}

export default Login
