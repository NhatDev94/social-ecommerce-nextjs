"use client";
import useModal from "@/hooks/useModal";
import Menu from "./Menu";
import { useRouter } from "next/navigation";
import Button from "./Button";
import { useAppContext } from "@/app/context";

const Header = () => {
  const router = useRouter();
  const { user } = useAppContext();
  const { open, onOpen, onClose } = useModal();

  const goHome = () => {
    router.push("/");
  };

  const goSignIn = () => router.push("/auth/sign-in");

  return (
    <div className="w-full h-14 bg-gray-200 text-black fixed top-0 left-0 flex items-center justify-center">
      <div className="w-full max-w-[1280px] h-full flex items-center justify-between px-12">
        <h4 className="font-bold text-2xl cursor-pointer" onClick={goHome}>
          NhatDev94
        </h4>

        {user ? (
          <div
            className="w-10 h-10 rounded-full bg-green-400 cursor-pointer"
            onClick={onOpen}
          ></div>
        ) : (
          <Button onClick={goSignIn} className="!w-fit px-4">
            Sign In
          </Button>
        )}

        <Menu open={open} onClose={onClose} />
      </div>
    </div>
  );
};

export default Header;
