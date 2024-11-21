import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';


export default function Admin() {
  const [data, setData] = useState([]); // Estado para almacenar los datos
  const [provValue, setProvValue] = useState(0);
  const [deptValue, setDeptValue] = useState(0);
  const [dep, setDep] = useState([]);
  const [edades, setEdades] = useState([]);
  const [evento, setEvento] = useState([]);
  const [anio, setAnio] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);

  const prov = [
    {
      id: 1,
      name: "Buenos Aires",
    },
    {
      id: 2,
      name: "CABA",
    },
    {
      id: 3,
      name: "Chaco",
    },
    {
      id: 4,
      name: "Cordoba",
    },
    {
      id: 5,
      name: "Corrientes",
    },
    {
      id: 6,
      name: "Entre Rios",
    },
    {
      id: 7,
      name: "Formosa",
    },
    {
      id: 13,
      name: "Jujuy",
    },
    {
      id: 16,
      name: "La Pampa",
    },
    {
      id: 17,
      name: "La Rioja",
    },
    {
      id: 18,
      name: "Mendoza",
    },
    {
      id: 8,
      name: "Misiones",
    },
    {
      id: 19,
      name: "Neuquen",
    },
    {
      id: 20,
      name: "Rio Negro",
    },
    {
      id: 9,
      name: "Salta",
    },
    {
      id: 21,
      name: "San Juan",
    },
    {
      id: 22,
      name: "San Luis",
    },
    {
      id: 23,
      name: "Santa Cruz",
    },
    {
      id: 10,
      name: "Santa Fe",
    },
    {
      id: 11,
      name: "Santiago del Estero",
    },
    {
      id: 24,
      name: "Tierra del Fuego",
    },
    {
      id: 12,
      name: "Tucuman",
    },
    {
      id: 14,
      name: "Catamarca",
    },
    {
      id: 15,
      name: "Chubut",
    },
    {
      id: 26,
      name: "Comuna 1",
    },
    {
      id: 27,
      name: "Comuna 2",
    },
    {
      id: 28,
      name: "Comuna 3",
    },
    {
      id: 29,
      name: "Comuna 4",
    },
    {
      id: 30,
      name: "Comuna 5",
    },
    {
      id: 31,
      name: "Comuna 6",
    },
    {
      id: 32,
      name: "Comuna 7",
    },
    {
      id: 33,
      name: "Comuna 8",
    },
    {
      id: 34,
      name: "Comuna 9",
    },
    {
      id: 35,
      name: "Comuna 10",
    },
    {
      id: 36,
      name: "Comuna 11",
    },
    {
      id: 37,
      name: "Comuna 12",
    },
    {
      id: 38,
      name: "Comuna 13",
    },
    {
      id: 39,
      name: "Comuna 14",
    },
    {
      id: 40,
      name: "Comuna 15",
    },
    {
      id: 25,
      name: "Desconocida",
    },
  ];

  const anios = [
    { id: 1, name: 2018 },
    { id: 2, name: 2019 },
    { id: 3, name: 2020 },
    { id: 4, name: 2021 },
    { id: 5, name: 2022 },
    { id: 6, name: 2023 },
    { id: 7, name: 2024 }
  ]

  const grupEtario = [
    {
      id: 1,
      name: 'Menor que 1 año',
    },
    {
      id: 2,
      name: 'Igual a 1 año',
    },
    {
      id: 3,
      name: 'De 2 a 4 años',
    },
    {
      id: 4,
      name: 'De 5 a 9 años',
    },
    {
      id: 5,
      name: 'De 10 a 14 años'
    },
    {
      id: 6,
      name: 'De 15 a 19 años',
    },
    {
      id: 7,
      name: 'De 20 a 24 años',
    },
    {
      id: 8,
      name: 'De 25 a 34 años',
    },
    {
      id: 9,
      name: 'De 35 a 44 años',
    },
    {
      id: 10,
      name: 'De 45 a 64 años',
    },
    {
      id: 11,
      name: 'Mayor o igual a 65 años',
    },
    {
      id: 12,
      name: 'Posneonato (29 hasta 365 días)'
    },
    {
      id: 13,
      name: 'Neonato(hasta 28 días)',
    },

    {
      id: 14,
      name: 'Edad Sin Esp.',
    },
    {
      id: 15,
      name: 'De 13 a 24 meses'
    }
  ]


  useEffect(() => {
    // Función para obtener datos
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/dengue');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json(); // Convertir la respuesta a JSON
        setData(jsonData); // Actualizar el estado con los datos obtenidos
        const departments = [...new Map(jsonData.map(item => [
          item.departamento_residencia,
          {
            departamento: item.departamento_residencia,
            provincia_residencia_id: item.provincia_residencia_id
          }
        ])).values()];
        const etario = [...new Map(jsonData.map(item => [
          item.grupo_etario_id
        ]))].map(value => value.slice(0, -1));
        const tipoEvento = [...new Map(jsonData.map(item => [
          item.tipo_evento_id
        ]))].map(value => value.slice(0, -1));
        const tipoAnio = [...new Map(jsonData.map(item => [
          item.anio_id
        ]))].map(value => value.slice(0, -1));
        setDep(departments);
        setEdades(etario)
        setEvento(tipoEvento)
        setAnio(tipoAnio)

      } catch (error) {
        console.error('Error fetching data:', error); // Manejo de errores
      }
    };

    fetchData();

  }, [data]);




  const filteredData = data.filter(item => item.provincia_residencia_id == provValue && item.departamento_residencia == deptValue);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const cambioProvincia = (event) => {
    event.preventDefault()
    setProvValue(event.target.value);
    setDeptValue(event.target.value)
  };

  const cambioDepartamento = (event) => {
    event.preventDefault()
    setDeptValue(event.target.value);
  }

  const agregar = () => {
    const provinciasOpciones = prov.map(pro =>
      `<option value="${pro.id}">${pro.name}</option>`
    ).join('');
    const grupoEtarioOpciones = edades.map(edad =>
      `<option value="${edad}">${grupEtario.find(p => p.id == edad)?.name}</option>`
    ).join('');
    const grupoEventoOpciones = evento.map(event =>
      `<option value="${event}">${event == 1 ? 'Dengue' : 'Chikungunya'}</option>`
    ).join('');
    const totalAnio = anio.map(ano =>
      `<option value="${ano}">${anios.find(p => p.id == ano)?.name}</option>`
    ).join('');

    Swal.fire({
      title: "Agregar caso",
      html: `
      <div class='flex flex-col gap-5'>
        <input type='text' id='departamento' placeholder='Departamento' class='swal2-input w-full m-0'>
        <select id="provincia" class="swal2-input w-full mt-5">
          <option value="" disabled selected>Elige una provincia</option>
          ${provinciasOpciones}
        </select>
      </div>
      <div class='flex gap-5'>
        <select id="grupo-etario" class="swal2-input w-full mt-5">
          <option value="" disabled selected>Elige rango etario</option>
          ${grupoEtarioOpciones}
        </select>
        <input type='text' id='cantidad' placeholder='Cantidad' class='swal2-input w-full mt-5 m-0'>
      </div>
      <div class='flex gap-5'>
        <select id="evento" class="swal2-input w-full mt-5">
          <option value="" disabled selected>Seleccionar Evento</option>
          ${grupoEventoOpciones}
        </select>
        <select id="anio" class="swal2-input w-full mt-5">
          <option value="" disabled selected>Seleccionar año</option>
          ${totalAnio}
        </select>
      </div>
    `,
      showCancelButton: true,
      confirmButtonText: "Agregar",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const departamento = document.getElementById('departamento').value;
        const provincia = document.getElementById('provincia').value;
        const grupoEtario = document.getElementById('grupo-etario').value;
        const cantidad = document.getElementById('cantidad').value;
        const evento = document.getElementById('evento').value;
        const anio = document.getElementById('anio').value;

        if (!departamento || !provincia || !grupoEtario || !cantidad || !evento || !anio) {
          Swal.showValidationMessage(`Por favor completa todos los campos`);
          return false;
        }

        return { departamento, provincia, grupoEtario, cantidad, evento, anio };
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        const { departamento, provincia, grupoEtario, cantidad, evento, anio } = result.value;

        // Llamada a la API usando fetch
        fetch(`http://localhost:5000/api/${departamento}/${provincia}/${grupoEtario}/${cantidad}/${evento}/${anio}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Error en la adición del caso');
            }
            return response.json();
          })
          .then(data => {

            Swal.fire({
              title: 'Caso dado de alta',
              icon: 'success'
            });
          })
          .catch(error => {
            Swal.fire({
              title: 'Error',
              text: `No se pudo agregar el caso: ${error.message}`,
              icon: 'error'
            });
          });
      }
    });
  };

  const modificar = async (id, dep, provi, etario, cant, event, ano) => {
    const provinciasOpciones = prov.map(pro =>
      `<option value="${pro.id}" ${pro.id === provi ? 'selected' : ''}>${pro.name}</option>`
    ).join('');
    console.log(edades);

    const grupoEtarioOpciones = edades.map(edad =>
      `<option value="${edad}" ${edad[0] == etario ? 'selected' : ''}>${grupEtario.find(p => p.id == edad)?.name}</option>`

    ).join('');
    const grupoEventoOpciones = evento.map(evento =>
      `<option value="${evento}" ${evento[0] == event ? 'selected' : ''}>${event == 1 ? 'Dengue' : 'Chikungunya'}</option>`
    ).join('');
    const totalAnio = anio.map(año =>
      `<option value="${año}" ${año[0] == ano ? 'selected' : ''}>${anios.find(p => p.id == ano)?.name}</option>`
    ).join('');

    Swal.fire({
      title: "Modificar caso",
      html: `
      <div class='flex flex-col gap-5'>
        <input type='text' id='departamento' value=${dep} placeholder='Departamento' class='swal2-input w-full m-0'>
        <select id="provincia" class="swal2-input w-full mt-5" >
          <option value="" disabled selected>Elige una provincia</option>
          ${provinciasOpciones}
        </select>
      </div>
      <div class='flex gap-5'>
        <select id="grupo-etario" class="swal2-input w-full mt-5" >
          <option value="" disabled selected>Elige rango etario</option>
          ${grupoEtarioOpciones}
        </select>
        <input value=${cant} type='text' id='cantidad' placeholder='Cantidad' class='swal2-input w-full mt-5 m-0'>
      </div>
      <div class='flex gap-5'>
        <select id="evento" class="swal2-input w-full mt-5">
          <option value="" disabled selected>Seleccionar Enfermedad</option>
          ${grupoEventoOpciones}
        </select>
        <select id="anio" class="swal2-input w-full mt-5" >
          <option value="" disabled selected>Seleccionar año</option>
          ${totalAnio}
        </select>
      </div>
    `,
      showCancelButton: true,
      confirmButtonText: "Modificar",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const departamento = document.getElementById('departamento').value;
        const provincia = document.getElementById('provincia').value;
        const grupoEtario = document.getElementById('grupo-etario').value;
        const cantidad = document.getElementById('cantidad').value;
        const evento = document.getElementById('evento').value;
        const anio = document.getElementById('anio').value;

        if (!departamento || !provincia || !grupoEtario || !cantidad || !evento || !anio) {
          Swal.showValidationMessage(`Por favor completa todos los campos`);
          return false;
        }

        return { departamento, provincia, grupoEtario, cantidad, evento, anio };
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        const { departamento, provincia, grupoEtario, cantidad, evento, anio } = result.value;
        Swal.fire({
          title: `Caso Modificado`,
          text: `Departamento: ${departamento}, Provincia: ${provincia}, Rango Etario: ${grupoEtario}, Cantidad: ${cantidad}, Evento: ${evento}, Año: ${anio}`
        });
        const response = fetch(`http://localhost:5000/api/dengue/actualizar/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            departamento_residencia: departamento,
            provincia_residencia_id: provincia,
            grupo_etario_id: grupoEtario,
            cantidad: cantidad,
            tipo_evento_id: evento,
            anio_id: anio
          })
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(`Error en la petición: ${response.status}`);
            }
        
            // Intentamos convertir la respuesta a JSON
            return response.text().then(text => {
              try {
                return JSON.parse(text); // Intentamos parsear la respuesta como JSON
              } catch (e) {
                // Si la respuesta no es JSON, la devolvemos como texto
                return { message: text };
              }
            });
          })
          .then(data => {
            Swal.fire({
              title: `Caso Modificado`,
              text: `Datos actualizados correctamente: ${JSON.stringify(data)}`,
              icon: "success"
            });
          })
          .catch(error => {
            console.error('Hubo un problema con la solicitud PATCH:', error);
            Swal.fire({
              title: "Error",
              text: `Hubo un problema al actualizar los datos.`,
              icon: "error"
            });
          });
        

        // Aquí puedes hacer una llamada a la API con los datos si es necesario.
      }
    });
  };

  const eliminar = async (id) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás deshacer esto después.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: '¡Sí, eliminarlo!',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      const response = await fetch(`http://localhost:5000/api/${id}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setData(prevData => prevData.filter(item => item.id !== id)); // Actualiza el estado eliminando el registro
        Swal.fire('Eliminado!', 'El registro ha sido eliminado.', 'success');
      } else {
        Swal.fire('Error al eliminar', '', 'error');
      }
    }
  };
  return (
    <div>
      <div className='flex justify-between mx-52'>
        <div className='flex gap-5'>
          <select className="select select-bordered w-full max-w-xs" value={provValue} onChange={cambioProvincia}>
            <option value="0" disabled>Seleccionar provincia</option>
            {prov.map((prov) => (
              <option key={prov.id} value={prov.id}>{prov.name}</option>
            ))}
          </select>
          <select className="select select-bordered w-full max-w-xs" value={deptValue} onChange={cambioDepartamento}>
            <option value="0" disabled>Seleccionar departamento</option>
            {dep.map((dept) => (
              dept.provincia_residencia_id == provValue ? <option key={dept.departamento} value={dept.departamento}>{dept.departamento}</option> : null
            ))}
          </select>
        </div>



        <div className='flex items-center text-green-800'>
          <button href="" className='flex' onClick={agregar}>
            <h2>Agregar</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>


        </div>

      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Año</th>
                <th>Provincia</th>
                <th>Departamento</th>
                <th>Grupo Etario</th>
                <th>Tipo</th>
                <th>Cantida</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <tr key={item.id}>
                  <th></th>
                  <td>{anios.find(p => p.id === item.anio_id)?.name || "Provincia desconocida"}</td>
                  <td>{prov.find(p => p.id === item.provincia_residencia_id)?.name || "Provincia desconocida"}</td>
                  <td>{item.departamento_residencia}</td>
                  <td>{grupEtario.find(p => p.id === item.grupo_etario_id)?.name}</td>
                  <td>{item.tipo_evento_id == 1 ? 'Dengue' : 'Chikungunya'}</td>
                  <td>{item.cantidad}</td>
                  <td className="flex gap-4">
                    <button onClick={() => modificar(item.id, item.departamento_residencia, item.provincia_residencia_id, item.grupo_etario_id, item.cantidad, item.tipo_evento_id, item.anio_id)}>
                      <svg className='h-6 text-green-800' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5l4 4-11 11h-4v-4l11-11z" />
                        <path d="M1 21h4l11-11-4-4L1 17v4z" />
                      </svg>
                    </button>
                    <button onClick={() => eliminar(item.id)}>
                      <svg className='h-6 text-red-800' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.61 122.88">
                        <title>trash</title>
                        <path fill="currentColor" d="M39.27,58.64a4.74,4.74,0,1,1,9.47,0V93.72a4.74,4.74,0,1,1-9.47,0V58.64Zm63.6-19.86L98,103a22.29,22.29,0,0,1-6.33,14.1,19.41,19.41,0,0,1-13.88,5.78h-45a19.4,19.4,0,0,1-13.86-5.78l0,0A22.31,22.31,0,0,1,12.59,103L7.74,38.78H0V25c0-3.32,1.63-4.58,4.84-4.58H27.58V10.79A10.82,10.82,0,0,1,38.37,0H72.24A10.82,10.82,0,0,1,83,10.79v9.62h23.35a6.19,6.19,0,0,1,1,.06A3.86,3.86,0,0,1,110.59,24c0,.2,0,.38,0,.57V38.78Zm-9.5.17H17.24L22,102.3a12.82,12.82,0,0,0,3.57,8.1l0,0a10,10,0,0,0,7.19,3h45a10.06,10.06,0,0,0,7.19-3,12.8,12.8,0,0,0,3.59-8.1L93.37,39ZM71,20.41V12.05H39.64v8.36ZM61.87,58.64a4.74,4.74,0,1,1,9.47,0V93.72a4.74,4.74,0,1,1-9.47,0V58.64Z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Controles de paginación */}
        <div className="pagination flex justify-center gap-2 text-xl text-gray-600 ">
          {[...Array(totalPages)].map((_, i) => (
            <button key={i + 1} onClick={() => paginate(i + 1)} className={currentPage === i + 1 ? 'active text-2xl text-gray-900' : ''}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}
