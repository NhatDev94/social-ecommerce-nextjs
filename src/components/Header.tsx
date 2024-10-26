"use client";
import { useRouter } from "next/navigation";
import Button from "./commons/Button";
import Menu from "./commons/Menu";
import { useAppContext } from "@/app/context";

export default function Header() {
  const router = useRouter();

  const { user, setUser } = useAppContext();
  console.log(user);

  const menuItems = [
    {
      name: "Profile",
      onClick: () => {},
    },
    {
      name: "Admin",
      onClick: () => {},
    },
    {
      name: "Sign Out",
      onClick: () => {
        setUser(null);
        localStorage.setItem("user", JSON.stringify(null));
        localStorage.setItem("token", JSON.stringify(null));
        router.push("/account/sign-in");
      },
    },
  ];

  const goSignIn = () => {
    router.push("/account/sign-in");
  };
  const goHome = () => {
    router.push("/");
  };
  const avatar = !!user?.avatar ? (
    <img
      src={user.avatar}
      alt="avatar"
      className="w-full h-full object-cover"
    />
  ) : (
    <span className="text-sm font-semibold text-white">S</span>
  );
  const menuImage = user ? avatar : undefined;

  return (
    <div className="w-full h-16 shadow-lg flex items-center justify-between px-10">
      <h4
        className="logo text-3xl font-bold text-black cursor-pointer"
        onClick={goHome}
      >
        Social
      </h4>
      {user ? (
        <Menu
          items={menuItems}
          triggerClass="rounded-full w-9 h-9 bg-violet-500 flex items-center justify-center"
          triggerContent={menuImage}
        />
      ) : (
        <Button onClick={goSignIn}>Sign In</Button>
      )}
    </div>
  );
}
