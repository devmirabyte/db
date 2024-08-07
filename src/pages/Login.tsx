import { Header } from "../components";
function Login() {
  return (
    <>
      <Header />
      <section className="flex h-[calc(100vh-8.25rem)] justify-center items-center max-w-screen-2xl mx-auto">
        <div className="h-full flex flex-row w-full justify-center items-center">
          <div className="bg-white max-w-[700px] w-[700px] h-full">
            <div className="h-full w-[50%] ">
              <img src="/login.jpg" className="h-full" />
            </div>
            <div className="h-full">
              <h2 className="font-mont text-center">Login</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
