import { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'

const COLORS = [
  '#8884d8',
  '#8dd1e1',
  '#82ca9d',
  '#a4de6c',
  '#d0ed57',
  '#ffc658',
  '#ff8042',
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#AA336A',
  '#6633CC',
  '#FFA07A',
  '#20B2AA'
]

// eslint-disable-next-line react/prop-types
const PieChartComponent = ({ casosPorRangoEtario }) => {
  const [showLegend, setShowLegend] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setShowLegend(window.innerWidth > 500)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      style={{ width: 450, height: 400, alignItems: 'center', margin: 'auto' }}
      className='w-[90%] h-[90%] min-w-[400px] min-h-[400px] mx-auto'
    >
      <ResponsiveContainer className='flex mx-auto justify-center mt-12 max-md:mt-4 max-sm:mt-2'>
        <PieChart>
          <Pie
            data={
              // eslint-disable-next-line react/prop-types
              casosPorRangoEtario && casosPorRangoEtario.length > 0
                ? casosPorRangoEtario
                : [{ grupo_etario: 'Desconocido', total_casos: 0 }]
            }
            dataKey='total_casos'
            nameKey='grupo_etario'
            cx='50%'
            cy='50%'
            outerRadius={150}
            fill='#8884d8'
            label={showLegend}
          >
            {
              // eslint-disable-next-line react/prop-types
              casosPorRangoEtario?.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))
            }
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieChartComponent

PieChartComponent.propTypes = {
  casosPorProvincia: PropTypes.arrayOf(
    PropTypes.shape({
      provincia_residencia: PropTypes.string.isRequired,
      total_casos: PropTypes.number.isRequired
    })
  )
}
