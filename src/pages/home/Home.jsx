import { useContext } from "react";
import Banner from "./Banner";
import { AuthContext } from "../../Providers/AuthProvider";


const Home = () => {

  const AuthInfo = useContext(AuthContext);
  console.log(AuthInfo);
    return (
        <div className=" bg-black">
          {/* {AuthInfo.name} */}
          <Banner></Banner>
        </div>
    );
};

export default Home;