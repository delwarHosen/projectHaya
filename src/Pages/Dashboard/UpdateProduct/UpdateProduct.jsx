import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOISTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateProduct = () => {
    const { name, category, price, type, rating, details, _id } = useLoaderData()

    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        // Image Hoisting
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        // add product
        if (res.data.success) {
            const productItem = {
                name: data.name,
                category: data.category,
                details: data.details,
                price: parseFloat(data.price),
                rating: parseInt(data.rating),
                type: data.type,
                image: res.data.data.display_url
            }
            const product = await axiosSecure.patch(`/products/${_id}`, productItem)
            console.log(product.data);
            if (product.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${name} is updated product`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log(res.data);
    }

    return (
        <div className="m-2">
            <h2 className='text-3xl font-bold text-center'>Update Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Product Name */}
                <div>
                    <div className='form-control w-full my-2'>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Product Name</span>
                            </div>
                        </label>
                        <input defaultValue={name} {...register("name")} type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>

                </div>
                <div className='flex gap-4'>
                    {/* category */}
                    <div className='form-control w-full my-2'>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                        </label>
                        <select defaultValue={category} {...register("category")} className='select select-bordered w-full'>
                            <option disabled value="default">Select a category</option>
                            <option value="Men Shirt">Men Shirt</option>
                            <option value="Men T-Shirt">Men T-Shirt</option>
                            <option value="Men Jeans">Men Jeans</option>
                            <option value="Woman Shirt">Woman Shirt</option>
                            <option value="Woman T-Shirt">Woman T-Shirt</option>
                            <option value="Woman Jeans">Woman Jeans</option>
                            <option value="Child Shirt">Child Shirt</option>
                            <option value="Child Shirt">Child Shirt</option>
                            <option value="Child T-Shirt">Child T-Shirt</option>
                            <option value="Child Jeans">Child Jeans</option>
                        </select>
                    </div>
                    <div className='form-control w-full my-2'>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                        </label>
                        <input defaultValue={price} {...register("price")} type="number" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='flex gap-4'>
                    {/* Photo */}
                    <div className='form-control w-full my-2'>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Product Type</span>
                            </div>
                        </label>
                        <input defaultValue={type} {...register("type")} type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>

                    <div className='form-control w-full my-2'>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Rating</span>
                            </div>
                        </label>
                        <input defaultValue={rating} {...register("rating")} type="number" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* Details */}
                <div className='form-control w-full my-2'>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Details</span>
                        </div>
                    </label>
                    <textarea defaultValue={details} {...register("details")} className="textarea textarea-bordered" placeholder="Product Details"></textarea>
                </div>
                <div className='form-control w-full'>
                    <input {...register("image")} type="file" className="file-input w-full max-w-xs" />
                </div>
                <button className='btn btn-primary'>Add Product</button>
            </form>
        </div>
    );
};

export default UpdateProduct;