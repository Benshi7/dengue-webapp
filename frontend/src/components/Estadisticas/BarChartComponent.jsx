import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import PropTypes from 'prop-types'

const BarChartComponent = ({ casosPorProvincia }) => {
  return (
    <div className='w-[90%] h-[90%] min-w-[400px] min-h-[400px] mx-auto'>
      <ResponsiveContainer className=' min-w-[90%] min-h-[90%]'>
        <BarChart
          data={
            casosPorProvincia && casosPorProvincia.length > 0
              ? casosPorProvincia
              : [{ provincia_residencia: 'Desconocida', total_casos: 0 }]
          }
          layout='vertical'
          margin={{ top: 10, right: 30, left: 30, bottom: 20 }}
        >
          <XAxis type='number' />
          <YAxis dataKey='provincia_residencia' type='category' width={150} />
          <Tooltip />
          <Legend />
          <Bar dataKey='total_casos' fill='#449BC7' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
export default BarChartComponent

BarChartComponent.propTypes = {
  casosPorProvincia: PropTypes.arrayOf(
    PropTypes.shape({
      provincia_residencia: PropTypes.string.isRequired,
      total_casos: PropTypes.number.isRequired
    })
  )
}
