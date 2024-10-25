import FormSignUp from "./components/FormSignUp";

export default function SignUp() {
  return (
    <div className="w-full h-[calc(100dvh-64px)] flex items-center justify-center">
      <div className="w-96 h-fit bg-white rounded-lg shadow-lg border border-black/5 flex flex-col items-center py-8">
        <h1 className="w-fit text-2xl font-bold text-black">Sign Up</h1>
        <div className="px-4 w-full mt-8">
          <FormSignUp />
        </div>
      </div>
    </div>
  );
}
