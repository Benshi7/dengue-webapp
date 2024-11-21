import React from 'react';

const EstadisticasCasos = ({ estadisticas }) => {
    const { total_casos} = estadisticas;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            {/* Casos Totales */}
            <div className="card bg-primary text-primary-content shadow-lg">
                <div className="card-body">
                    <h2 className="card-title">Casos Totales</h2>
                    <p className="text-2xl font-bold">{total_casos}</p>
                </div>
            </div>
        </div>
    );
};

export default EstadisticasCasos;
