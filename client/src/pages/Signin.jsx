import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import {signInFailure,signInStart,signInSuccess} from '../redux/user/userSlice.js'

export default function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  const { loading , error } = useSelector((state)=> state.user);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    try {
      const result = await axios.post("/api/auth/signin", formData);
      if (result.status === 200) {
        // setLoading(false);
        // setError("");
        dispatch(signInSuccess(result.data));
        setFormData({});
        navigate('/');
      } else {
        // setError(result.data.message || "An error occurred");
        dispatch(signInFailure(result.data.message));
      }
    } catch (error) {
      dispatch(signInFailure(error.response.data.message));
      // setError(error.response ? error.response.data.message : "An error occurred");
      // setError("username or email already added , try to sign in ")
    }
  };  
  
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="text"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
          value={formData.password}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-70 smooth">
          {loading ? "loading..." : "Sign in "}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account ? </p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700">Sign-up</span>
        </Link>
      </div>
      <span className={error ? 'text-red-600' : 'hidden'}>{error}</span>
    </div>
  );
}
