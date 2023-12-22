import { Link } from "react-router-dom";


const Banner = () => {
    return (
      <div className="">
          <div className="relative">
            <img className="h-full lg:h-[500px] w-[1400px] mx-auto p-10 " src="https://i.ibb.co/xJwfgCT/tasl.jpg" alt="" />
          
        </div>
        <div className="absolute -mt-[270px] lg:-mt-[320px] ">
        <h1 className="text-3xl lg:text-5xl text-center text-white ml-8 lg:ml-[114px] w-[360px] lg:w-full ">Walking Around Makes The Mind Feel Good</h1>
        <h1 className="text-sm lg:text-[17px] w-[250px] lg:w-[500px] text-justify ml-[90px]  lg:ml-[375px] text-gray-300">Life is abundant, and life is beautiful. And it's a good place that we're all in, you know, on this earth, if we take care of it. Life is beautiful because it doesn't last. I suppose there are a lot of reasons to be jaded or sarcastic or bitter in life, but I hang on to the reasons why life is beautiful. </h1>
          <Link to='/login'>
          <button className="btn btn-sm lg:btn btn-secondary mx-auto text-center justify-center justify-items-center items-center ml-10 lg:ml-[570px] lg:mt-4 text-gray-100">Let’s Explore</button>
          </Link>
        </div>
      </div>
    );
};

export default Banner;
