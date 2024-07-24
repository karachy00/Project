import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Admin = () => {
    const [url , setUrl] = useState('')
    const [name , setName] = useState('')
    const [type , setType] = useState('')
    const [price , setPrice] = useState('')
    const [discreption , setDiscreption ] = useState('')

const dispatch = useDispatch()
const {product} = useSelector((s) => s);

const error = () => {
    toast.error(' Заполните все поле!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}
const addProd = () => {
    if(url.trim() === '' ||  name.trim() === '' || type.trim() === '' || price.trim() === '' || discreption.trim() === ''){
        error()
    }else {
    let newObj = {
        id: product.length ?  product[product.length - 1].id + 1 : 1,
        url: url , 
        name: name,
        type: type,
        price: price,
        discreption: discreption,
    };
    dispatch({type:'CREATE_PRODUCT' , payload:newObj})
    setUrl('')
    setName('')
    setPrice('')
    setType('')
    setDiscreption('')
}
}
    return (
        <div className='my-[80px]'>
        <div className="container">
            <div className='flex items-center justify-center flex-col w-[50%] mx-auto gap-10'>
            <div class="relative z-0 w-full mb-5 group">
      <input onChange={(e) =>  setUrl(e.target.value)}  type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-GRAY dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={url} />
      <label for="floating_email" class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Url</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input onChange={(e) =>  setName(e.target.value)}   type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-GRAY dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  value={name} />
      <label for="floating_email" class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input onChange={(e) =>  setType(e.target.value)}  type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-GRAY dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  value={type} />
      <label for="floating_email" class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Type</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input onChange={(e) =>  setPrice(e.target.value)}  type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-GRAY dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  value={price}/>
      <label for="floating_email" class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Price</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input onChange={(e) =>  setDiscreption(e.target.value)}  type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-GRAY dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  value={discreption}/>
      <label for="floating_email" class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Discreption</label>
  </div>
  <button onClick={() => addProd()}  type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Create Product</button>
  <ToastContainer />
            </div>
        </div>
        </div>
    );
};

export default Admin;
