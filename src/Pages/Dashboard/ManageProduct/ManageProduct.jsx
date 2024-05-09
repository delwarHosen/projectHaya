import Swal from 'sweetalert2';
import { axiosSecure } from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import useProduct from '../../../hooks/useProduct';

const ManageProduct = () => {

    const [products, , refetch] = useProduct()

    // delete Product
    const handleDeleteProduct = (product) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won to delete!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/products/${product._id}`)
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${product.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }

    return (
        <div>
            <h3 className='text-center text-2xl font-bold'>Manage Items</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <tr key={product._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {product.name}
                                </td>
                                <td>{product.price}</td>
                                <td>
                                    <Link to={`/dashboard/updateProduct/${product._id}`}>
                                        <button >
                                            <FaEdit className='text-4xl'></FaEdit>
                                        </button></Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteProduct(product)}>
                                        <FaTrashAlt className='text-3xl'></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;