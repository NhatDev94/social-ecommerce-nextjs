import SignInForm from "../components/SignInForm";

export default function SignIn() {
  return (
    <div className="w-full h-[calc(100dvh-56px)] flex items-center justify-center">
      <div className="w-80 h-fit min-h-40 bg-white rounded-lg p-4">
        <h4 className="w-full text-center text-lg font-semibold">Sign In</h4>
        <SignInForm />
      </div>
    </div>
  );
}
