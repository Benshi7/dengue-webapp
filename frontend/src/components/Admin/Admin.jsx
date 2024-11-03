import React, { useEffect, useState } from 'react'


export default function Admin() {
  const [data, setData] = useState([]); // Estado para almacenar los datos
  const [provValue, setProvValue] = useState(0);
  const [deptValue, setDeptValue] = useState(0);
  const [dep , setDep] = useState([]);

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
      setDep(departments);

      } catch (error) {
        console.error('Error fetching data:', error); // Manejo de errores
      }
    };

    fetchData(); // Llamar a la función para obtener datos
    console.log(deptValue);

  }, []);
  useEffect(() => {
    console.log(deptValue);
  }, [dep]);
    

  const filteredData = data.filter(item => item.provincia_residencia_id == provValue && item.departamento_residencia == deptValue);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const cambioProvincia = (event) => {
    setProvValue(event.target.value);
    setDeptValue(event.target.value)
  };

  const cambioDepartamento = (event) => {
    setDeptValue(event.target.value);
  }
  
  return (
    <div>
      <div>
      <select className="select select-bordered w-full max-w-xs" value={provValue} onChange={cambioProvincia}>
        <option value="0" disabled>Seleccionar provincia</option>
        {prov.map((prov) => (
          <option key={prov.id} value={prov.id}>{prov.name}</option>
        ))}
      </select>
      <select className="select select-bordered w-full max-w-xs" value={deptValue}  onChange={cambioDepartamento}>
        <option value="0" disabled>Seleccionar departamento</option>
        {dep.map((dept) => (
         dept.provincia_residencia_id == provValue ? <option key={dept.departamento} value={dept.departamento}>{dept.departamento}</option> : null
        ))}
      </select>
      
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
                  <td>{item.anio_id}</td>
                  <td>{item.provincia_residencia_id}</td>
                  <td>{item.departamento_residencia}</td>
                  <td>{item.grupo_etario_id}</td>
                  <td>{item.tipo_evento_id}</td>
                  <td>{item.cantidad}</td>
                  <td className="flex gap-4">
                    {/* Iconos para editar y eliminar */}
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
