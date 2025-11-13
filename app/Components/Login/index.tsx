import Input from "../Input";
import Button from "../Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/rootReducer";
import { getUser, signIn } from "@/redux/apiSlice";

const Login = ({ modalType, setModalType, setOpenModal }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoader(true);
      const payload = {
        email,
        password,
      };
      const response = await dispatch(signIn(payload)).unwrap();
      await dispatch(getUser("")).unwrap();
      setLoader(false);
      setOpenModal(false);
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
            type="email"
            placeholder="Email"
            label="Email"
            bottomSpace={4}
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            label="Password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center mt-4">
          <Button type="submit" loader={loader}>
            Login
          </Button>
        </div>
      </form>

      <p className="text-center mt-4 font-comic font-semibold text-md">
        New on our platform?{" "}
        <span
          className="text-[#9acb4e] cursor-pointer"
          onClick={() => setModalType("signup")}
        >
          Create an account
        </span>
      </p>
    </>
  );
};

export default Login;
