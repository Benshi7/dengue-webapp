import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import PropTypes from 'prop-types'

const SimpleAreaChart = ({ casosPorAnio }) => {
  return (
    <>
      <div className='w-[90%] h-[90%] min-w-[400px] min-h-[400px] mx-auto'>
        <ResponsiveContainer className=' min-w-[90%] min-h-[90%]'>
          <AreaChart
            width={500}
            height={400}
            data={
              casosPorAnio && casosPorAnio.length > 0
                ? casosPorAnio
                : [{ anio: '2022', total_casos: 0 }]
            }
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='anio' />
            <YAxis />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='total_casos'
              stroke='#8884d8'
              fill='#8884d8'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default SimpleAreaChart

SimpleAreaChart.propTypes = {
  casosPorAnio: PropTypes.arrayOf(
    PropTypes.shape({
      anio: PropTypes.string.isRequired,
      total_casos: PropTypes.number.isRequired
    })
  )
}
