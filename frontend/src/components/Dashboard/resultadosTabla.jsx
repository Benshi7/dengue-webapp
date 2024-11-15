import React from 'react';

const ResultadosTabla = ({ datos }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>Provincia</th>
                        <th>Enfermedad</th>
                        <th>Rango Etario</th>
                        <th>Casos Totales</th>
                    </tr>
                </thead>
                <tbody>
                    {datos && datos.length > 0 ? (
                        datos.map((registro, index) => (
                            <tr key={index}>
                                <td>{registro.provincia_residencia_id}</td>
                                <td>{registro.tipo_evento_id}</td>
                                <td>{registro.grupo_etario_id}</td>
                                <td>{registro.cantidad}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">
                                No se encontraron resultados para los filtros seleccionados.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ResultadosTabla;
