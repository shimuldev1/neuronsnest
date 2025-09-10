import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Page - NeuronsNest",
  description: "This is Sign Up page for NeuronsNest. Please register to create an account.",
  // other metadata
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
