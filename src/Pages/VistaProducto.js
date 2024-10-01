import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/VistaProducto.css';

const VistaProducto = () => {
    const idDelProducto = Number(localStorage.getItem('id_producto_seleccionado'));

    const [producto, setProducto] = useState();

    useEffect(() => {
        const Producto = async () => {
            try {
                const response = await axios.get('https://backend-chaostoolkit-b3h0fuahh4dsd2a6.eastus2-01.azurewebsites.net/Producto', {
                    params: { idDelProducto }
                });
                setProducto(response.data);
            } catch (error) {
                console.error('Error al llamar a la API:', error);
            }
        };
        Producto();
    }, [idDelProducto]);

    return (
        <div id='ContenedorPrincipal'>
            <header id='HeaderPrincipal'>
                <div className='ContenedorContacto'>
                    <p className='Correo'>Correo: PruebasChaosToolkit@gmail.com</p>
                    <p className='Tel'>Tel: 3211233212</p>
                </div>
            </header>

            <header id='HeaderSecundario2'>
                <a id='Contenedor2' href="/"><h2>Tienda virtual</h2></a>
            </header>

            <div>

                <section id='Producto'>
                    {producto ? (
                        <div id='Caja2'>
                            <img className='IMGProductos2' src={producto.img_producto} alt={producto.id_producto} />
                            <div className='conte2'>
                                <h2 className='Pro2'>{producto.nombre_producto}</h2>
                                <br/><br/>
                                <p><p className='descri'>Descripcion:</p>{producto.descripcion}</p>
                                <br/>   
                                <h4><p className='descri'>Precio:</p>${producto.precio}</h4>
                                <button type="button" class="btn btn-warning">Comprar</button>
                                <button type="button" class="btn btn-warning">Añadir al carrito</button>
                            </div>
                        </div>
                    ) : (
                        <p>Cargando...</p>
                    )}
                </section>
            </div>
        </div>
    );
};

export default VistaProducto;
