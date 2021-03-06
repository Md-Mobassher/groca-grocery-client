import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddItems = () => {

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        const url = `https://intense-woodland-58233.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            if(result){
                toast('Item added successfully')
                navigate('/home')
            }           
        } )
    };



    return (
        
        <div className='container w-75 mx-auto mb-5 mt-5 border shadow rounded px-md-5 px-sm-2 py-4'>
            <div className=''>
                <h1 className='text-center text-success mb-4'>Add Item Here</h1>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-3 p-1 ps-2 rounded' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input className='mb-3 p-1 ps-2 rounded' placeholder='Price' type="number" {...register ("price", {required: true, min: 1, })} />
                    <input className='mb-3 p-1 ps-2 rounded' placeholder='Quantity' type="number" {...register("quantity", {required: true, min: 1, })} />
                    <input className='mb-3 p-1 ps-2 rounded' placeholder='Photo URL' type="text" {...register("img", {required: true, })} />
                    <input className='mb-3 p-1 ps-2 rounded' placeholder='Supplier Name' type="text" {...register("supplier" )} />
                    <textarea className='mb-3 p-1 ps-2 rounded' placeholder='Description' {...register("description", {required: true, minLength:5, maxLength: 200 })} />

                    <input className='mb-3 p-2 ps-2 w-50 mx-auto border-0 rounded-pill fs-5 rounded bg-success text-white' type="submit" value="Add Items" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;