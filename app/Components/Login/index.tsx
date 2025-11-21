import * as yup from "yup";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import Input from "../Input";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/rootReducer";
import { getUser, setUser, signIn } from "@/redux/apiSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface LoginProps {
  modalType?: string;
  setModalType?: any;
  setOpenModal?: any;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = ({ modalType, setModalType, setOpenModal }: LoginProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const payload = {
        email: data.email,
        password: data.password,
      };
      const response = await dispatch(signIn(payload)).unwrap();
      setOpenModal(false);
      reset();
      if (response?.accessToken) {
        const decodedUser: any = jwtDecode(response?.accessToken);
        dispatch(setUser(decodedUser?.user));
        localStorage.setItem("user", JSON.stringify(decodedUser?.user));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            type="email"
            placeholder="Email"
            label="Email"
            bottomSpace={4}
            {...register("email")}
            errorMessage={errors.email?.message}
          />
          <Input
            type="password"
            placeholder="Password"
            label="Password"
            {...register("password")}
            errorMessage={errors.password?.message}
          />
        </div>

        <div className="flex justify-center mt-8">
          <Button type="submit" loader={isSubmitting}>
            Login
          </Button>
        </div>
      </form>

      <p className="text-center mt-4 font-comic font-semibold text-md">
        New on our platform?{" "}
        <Link href="/membership" className="text-[#9acb4e] cursor-pointer">
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default Login;
