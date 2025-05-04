import "../styledpages/Banner.css";
import { useNavigate } from "react-router-dom";
export default function Banner() {
    const navigate = useNavigate();

    const navigateToDashboard = () =>{
        navigate("/login");
    }
    return (
      <div className="banner-image relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4">
        <div className="bg-black bg-opacity-50 p-8 rounded">
          <h1 className="text-4xl md:text-5xl font-bold">Empower Your Business</h1>
          <p className="mt-4 text-lg md:text-xl">Streamline customer management with ease and efficiency</p>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold" onClick={navigateToDashboard}>
            Get Started
          </button>
        </div>
      </div>
    );
  }
  