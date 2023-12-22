import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PriviousCard = ({ item, tasks, setTasks }) => {
    // ...

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            // ... (unchanged)
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/task/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = tasks.filter(del => del._id !== _id);
                            console.log(remaining)
                            setTasks(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className="card w-96 bg-white border border-solid border-black rounded-none">
                <div className="card-body">
                    <h2 className="card-title">Title : {item.titles}</h2>
                    <p>Description : {item.descriptions}</p>
                    <p>Deadline : {item.deadlines}</p>
                    <div className="flex gap-12">
                        <Link to={`/dashboard/update/${item._id}`}>
                            <button></button>
                        </Link>
                        <button onClick={() => handleDelete(item._id)}><RiDeleteBin6Line /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriviousCard;



