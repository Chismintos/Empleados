"use client"
import React, { useState } from 'react';
import ListaEnlazadaSimple   from './utilities/listaenlazadasimple';

export const HomePage = () => {

  const listaEmpleados = new ListaEnlazadaSimple();
  
  const [nombre,setNombre] = useState(" ")
  const [edad,setEdad] = useState(" ")
  const [correo,setCorreo] = useState(" ")
  const [genero,setGenero] = useState("Masculino")

  const [resultados, setResultados] = useState(" ");
  const [mostrarBoton, setMostrarBoton] = useState(false);
  

  const guardarDatos = (e: React.FormEvent) => {
    e.preventDefault();
  
    listaEmpleados.insertar({
      nombre: nombre,
      edad: edad,
      correo: correo,
      genero: genero
    });

    console.log(listaEmpleados.impresion());

    setResultados(
      'Nombre: ' + nombre + '\nEdad: ' + edad +'\nCorreo: ' + correo +'\nGenero: ' + genero
      
    );

  

    setNombre('');
    setEdad('');
    setCorreo('');
    setGenero('');
  
    setMostrarBoton(true);

  };

    function limpiar() {
      setMostrarBoton(false);
      setNombre('');
      setEdad('');
      setCorreo('');
      setGenero('');
      setResultados('');
    }
  
  return (
    <main className='p-6'>  

      <header className='bg-blue-400 border border-transparent rounded-lg p-4 mb-5'>
        <div className='flex justify-center'>
          <div className='flex items-center'>
            
            <img src='https://cdn.discordapp.com/emojis/978931095536025620.gif?size=96&quality=lossless' alt='GIF 1' className='w-8 h-8 mr-2' />
            <p className='text-2xl uppercase text-white'>Empleados</p>
            <img src='https://cdn.discordapp.com/emojis/978931095536025620.gif?size=96&quality=lossless' alt='GIF 2' className='w-8 h-8 ml-2' />
          </div>
        </div>
      </header>
        
      <section  className='bg-blue-200 border border-transparent rounded-lg p-4 mb-5 '  >

        <form onSubmit={guardarDatos}>
            
          <div className='flex flex-col mb-5'> 

            <label htmlFor="" className='mr-3 mb-3 ' >
              Nombre
            </label>

            <input 
              type="text"
              id='name'
              className=' rounded-full w-56' //^ Ajusta el ancho de la caja input
              value={nombre}
              onChange={(event)=> setNombre(event.target.value)}

            />
          </div>
        
          <div className='flex flex-col mb-5'>

            <label htmlFor="" className='mr-3 mb-2'>
              Edad
            </label>

            <input
              type="text"
              id='age'
              className='rounded-full w-56' 
              value={edad}
              onChange={(event)=> setEdad(event.target.value)}
            />

          </div>

          <div className='flex flex-col mb-5'> 

            <label htmlFor="" className='mr-3 mb-2'>
              Correo
            </label>

            <input
              type="text"
              id='email'
              className='rounded-full w-56' //^ Ajusta el ancho de la caja input
              value={correo}
              onChange={(event)=> setCorreo(event.target.value)}

            />
          </div>

          <div className='flex flex-col mb-5'> 

            <label htmlFor="" className='mr-3 mb-2'>
              Genero
            </label>
            
            <select value={genero} id='edad' className='w-56' onChange={(event)=> setGenero(event.target.value)}>
              <option value='Masculino'>Masculino</option>
              <option value='Femenino'>Femenino</option>
              <option value='Tanque de guerra'>Tanque de guerra</option>
              <option value='No binario'>No binario</option>
              <option value='Otro'>Otro</option>
              
            </select>  

          </div>
          <div className='p-2'> 

            <input  
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full mr-9' 
            onClick={guardarDatos}
            type="submit" />

              {/* Botón para limpiar los campos y agregar uno nuevo */}   

            {mostrarBoton && (
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-full' onClick={limpiar}>
            Limpiar y agregar nuevo
            </button>
            )}

          </div>
        </form>

          <pre className="mt-4 whitespace-pre-wrap mb-6">{resultados}</pre>
        
      </section>

      <footer className='bg-blue-400 border border-transparent rounded-lg p-4 mb-5 flex items-center'>
        <div>
          Cristian Yahir Garcia Hernandez
        </div>
        <img src='https://cdn.discordapp.com/emojis/864111506635227136.gif?size=64' alt='GIF' className='w-9 h-9 ml-2' />
      </footer>

    </main>
  ) 
}

export default HomePage
