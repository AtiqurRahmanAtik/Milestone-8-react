import { Link } from "react-router-dom";
import svg from '../../assets/wave.svg';
const Hero = () => {
    return (
        <div>
            
            <div className="hero w-full  bg-base-200">
  <div className="hero-content text-center">
    <div className="min-h-full">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     <div className="flex justify-around">

     <Link  className="relative inline-block px-4 py-2 font-medium group">
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
<span className="relative text-black group-hover:text-white">Read Blogs</span>
</Link>


     <Link  className="relative inline-block px-4 py-2 font-medium group">
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
<span className="relative text-black group-hover:text-white">BookMarks</span>
</Link>
     
     </div>

     <img src={svg} alt="" />
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;