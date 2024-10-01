import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


import '../Styles/PaginaPrincipal.css';

const PaginaPrincipal = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const Productos = async () => {
            try {
                const response = await axios.get('https://backend-chaostoolkit-b3h0fuahh4dsd2a6.eastus2-01.azurewebsites.net');
                setProductos(response.data);
            } catch (error) {
                console.error('Error al llamar a la API:', error);
            }
        };
        Productos();
    }, []);

    const idDelProducto = (id_producto) => {
        localStorage.setItem('id_producto_seleccionado', id_producto);
    };

    return (
        <div id='Contenedor'>

            <header id='HeaderPrincipal'>
                <div className='ContenedorContacto'>
                    <p className='Correo'>Correo: PruebasChaosToolkit@gmail.com</p>
                    <p className='Tel'>Tel: 3211233212</p>
                </div>
            </header>

            <header id='HeaderSecundario'>
                <a id='Contenedor2' href="/"><h2 >Tienda virtual</h2></a>
            </header>

            <section id='ContenidoSeccion1' >
                <div id='Contenido'>
                    <p className='Co1'>Productos</p>
                </div>
            </section>

            <section id='ListaProductos'>
                {productos.map((producto, index) => (
                    <div id='Caja' key={index}>
                        <Link to="/Producto" onClick={() => idDelProducto(producto.id_producto)}><img className='IMGProductos' src={producto.img_producto} alt={producto.id_producto} /></Link>
                        <h4><p className='Pro'>{producto.nombre_producto}</p>${producto.precio}</h4>
                    </div>
                ))}
            </section>

        </div>
    )
}
export default PaginaPrincipal