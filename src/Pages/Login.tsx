import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { TUser, setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { FieldValues } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import GroceryForm from "../components/from/GroceryForm";
import GroceryInput from "../components/from/GroceryInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();

      console.log(res);
      const user = verifyToken(res.data.accessToken) as TUser;
      console.log(user);
      dispatch(setUser({ user: user, token: res.data.accessToken }));

      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error(" Failed to Logged in. Something went wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div className="flex justify-center items-center p-16">
      <Card className="w-[360px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-green-500">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <GroceryForm onSubmit={onSubmit}>
            <GroceryInput
              type="email"
              name="email"
              label="Email"
              placeholder="Your Email"
            />
            <GroceryInput
              type="text"
              name="password"
              label="Password"
              placeholder="Your Password"
            />
            <div className="flex justify-center mt-5">
              <Button className="bg-green-500 hover:bg-green-400" type="submit">
                Login
              </Button>
            </div>
          </GroceryForm>
        </CardContent>
        <CardFooter className="flex justify-center">
          <div>
            <p className="text-md text-center">
              Not registered? Please{" "}
              <NavLink className="text-green-500 font-semibold" to="/register">
                Register
              </NavLink>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
