import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import PriviousCard from "./PriviousCard";
import { AuthContext } from "../../Providers/AuthProvider";


const PreviousTask = () => {
    const { user } = useContext(AuthContext);

    const [data, setData] = useState([]);
    const axiosPublic = useAxiosPublic();
    useEffect(() => {

        axiosPublic.get(`/getTask/${user?.email}`)
            .then(res => setData(res.data))
            
    }, [])

    // console.log(data);
   
    return (
        <div className="ml-5">
       <div className="grid grid-cols-1 gap-3">
       {
       data?.map((item) => <PriviousCard key={item._id} item={item}></PriviousCard>)
          }
       </div>
       
    
        </div>
    );
};

export default PreviousTask;