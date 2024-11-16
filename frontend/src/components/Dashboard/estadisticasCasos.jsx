import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EstadisticasCasos = ({ provincia, tipoEvento, setTotales }) => {
  const [estadisticas, setEstadisticas] = useState({});

  useEffect(() => {
    if (tipoEvento) {
      axios.get(`/api/dengue/estadisticas/${tipoEvento}`)
        .then(response => {
          setEstadisticas(response.data);
          // Calcular los totales específicos
          const casosTotales = response.data.totalCasos[0].total_casos;
          const provinciasAfectadas = response.data.casosPorProvincia.length;
          const promedioPorProvincia = casosTotales / provinciasAfectadas;

          setTotales({
            casosTotales,
            provinciasAfectadas,
            promedioPorProvincia,
          });
        })
        .catch(error => console.error('Error al obtener las estadísticas:', error));
    }
  }, [provincia, tipoEvento, setTotales]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        {/* Casos Totales */}
        <div className="card bg-primary text-primary-content shadow-lg">
            <div className="card-body">
                <h2 className="card-title">Casos Totales</h2>
                <p className="text-2xl font-bold">{casosTotales}</p>
            </div>
        </div>

        {/* Provincias Afectadas */}
        <div className="card bg-secondary text-secondary-content shadow-lg">
            <div className="card-body">
                <h2 className="card-title">Provincias Afectadas</h2>
                <p className="text-2xl font-bold">{provinciasAfectadas}</p>
            </div>
        </div>

        {/* Rango Etario Más Afectado */}
        <div className="card bg-accent text-accent-content shadow-lg">
            <div className="card-body">
                <h2 className="card-title">Rango Etario Más Afectado</h2>
                <p className="text-2xl font-bold">{rangoEtarioAfectado}</p>
            </div>
        </div>

        {/* Promedio por Provincia */}
        <div className="card bg-info text-info-content shadow-lg">
            <div className="card-body">
                <h2 className="card-title">Promedio por Provincia</h2>
                <p className="text-2xl font-bold">{promedioPorProvincia}</p>
            </div>
        </div>
    </div>
);
};

export default EstadisticasCasos;
