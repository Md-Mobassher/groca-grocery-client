import React from 'react';
import { useForm } from "react-hook-form";
    

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);  


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email", { required: true, maxLength: 20 })} />
                <input {...register("email", { pattern: /^[A-Za-z]+$/i })} />
                <input type="number" {...register("age", { min: 18, max: 99 })} />
                <input type="submit" />
            </form>
        </>
    );
};

export default Login;