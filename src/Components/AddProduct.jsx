import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = (props) => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data)=> {
        props.addProductToList(data);
    }
    
    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
                
                <div className="col-md-6">
                    <label>Nombre:</label>
                    <input type="text" name="nombre" {...register("nombre", { required: true, maxLength: 50})} className="form-control"/>
                    {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                    {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}
                </div>

                <div className="col-md-6">
                    <label>Precio (MXN):</label>
                    <input type="number" name="precio" {...register("precio", { required: true, max: 1000, min: 1})} className="form-control"/>
                    {errors.precio?.type === 'required' && "Este es un Campo Requerido"}
                    {errors.precio?.type === 'max' && "El maximo de precio es de 1000"}
                    {errors.precio?.type === 'min' && "El minimo de precio es de 1"}
                </div>
                
                <div className="col-12">
                    <label>Descripcion:</label>
                    <input type="text" name="descripcion" {...register("descripcion", { required: true, maxLength: 100})} className="form-control"/>
                    {errors.descripcion?.type === 'required' && "Este es un Campo Requerido"}
                    {errors.descripcion?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}
                </div>

                <div className="col-md-3">
                    <label>Stock:</label>
                    <input type="number" name="stock" {...register("stock", { required: true, max: 1000, min: 1 })} className="form-control"/>
                    {errors.stock?.type === 'required' && "Este es un Campo Requerido"}
                    {errors.stock?.type === 'max' && "El Maximo de productos a introducir es de 1000"}
                </div>
                
                <div className="col-12">
                    <button className="btn btn-outline-danger">Agregar Producto</button>
                </div>
            </form>
        </div>
    );
}

export default AddProduct;