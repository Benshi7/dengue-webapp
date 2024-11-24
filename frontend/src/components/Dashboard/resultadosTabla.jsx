// eslint-disable-next-line react/prop-types
const ResultadosTabla = ({ datos, filtros }) => {
  const hayFiltros = Object.values(filtros).some(
    valor => valor !== undefined && valor !== ''
  )

  return (
    <div className='overflow-x-auto'>
      {hayFiltros ? (
        <>
          <h2>Ultimos 10 reportes</h2>
          <table className='table table-zebra w-full'>
            <thead>
              <tr>
                <th>Provincia</th>
                <th>Departamento</th>
                <th>Tipo de Evento</th>
                <th>Rango Etario</th>
                <th>Casos Totales</th>
              </tr>
            </thead>
            <tbody>
              {
                // eslint-disable-next-line react/prop-types
                datos && datos?.length > 0 ? (
                  // eslint-disable-next-line react/prop-types
                  datos?.slice(0, 10).map((registro, index) => (
                    <tr key={index}>
                      <td>{registro?.provincia_residencia}</td>
                      <td>{registro?.departamento_residencia}</td>
                      <td>{registro?.tipo_evento}</td>
                      <td>{registro?.grupo_etario}</td>
                      <td>{registro?.cantidad}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan='5' className='text-center'>
                      No se encontraron resultados para los filtros
                      seleccionados.
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </>
      ) : (
        <div className='text-center'>
          Por favor, aplica filtros para ver los resultados.
        </div>
      )}
    </div>
  )
}

export default ResultadosTabla
