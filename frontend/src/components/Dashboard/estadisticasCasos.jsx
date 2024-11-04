import React from 'react';

const EstadisticasCasos = ({ estadisticas }) => {
    const { casosTotales, provinciasAfectadas, rangoEtarioAfectado, promedioPorProvincia } = estadisticas;

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
