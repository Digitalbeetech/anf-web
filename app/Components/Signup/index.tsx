import Input from "../Input";
import Button from "../Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUser, signUp } from "@/redux/apiSlice";
import { AppDispatch } from "@/redux/rootReducer";

const Signup = ({ modalType, setModalType, setOpenModal }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoader(true);
      const payload = {
        username,
        email,
        password,
      };
      const response = await dispatch(signUp(payload)).unwrap();
      await dispatch(getUser("")).unwrap();
      setLoader(false);
      setOpenModal(false);
      setUserName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            placeholder="Name"
            required={true}
            label="Name"
            bottomSpace={4}
            value={username}
            onChange={(e: any) => setUserName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            required={true}
            label="Email"
            bottomSpace={4}
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            required={true}
            label="Password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center mt-4">
          <Button type="submit" loader={loader}>
            Signup
          </Button>
        </div>
      </form>

      <p className="text-center mt-4 font-comic font-semibold text-md">
        Already have an account?{" "}
        <span
          className="text-[#9acb4e] cursor-pointer"
          onClick={() => setModalType("login")}
        >
          Login
        </span>
      </p>
    </>
  );
};

export default Signup;
