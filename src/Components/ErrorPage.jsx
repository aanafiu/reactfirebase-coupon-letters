import err from "../../src/assets/error.png"
const ErrorPage = () => {
    return (
        <div className="w-full h-[100vh] flex justify-center items-center bg-gradient-to-r from-purple-500 to-navText">
            <img src={err} alt="" className="h-[600px]"/>
        </div>
    );
};

export default ErrorPage;