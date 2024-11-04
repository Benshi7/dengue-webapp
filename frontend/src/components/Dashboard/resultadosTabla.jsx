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
                    {datos.length > 0 ? (
                        datos.map((registro, index) => (
                            <tr key={index}>
                                <td>{registro.provincia}</td>
                                <td>{registro.enfermedad}</td>
                                <td>{registro.rangoEtario}</td>
                                <td>{registro.casosTotales}</td>
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
