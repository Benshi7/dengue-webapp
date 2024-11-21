import { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

const casosPorRangoEtario = [
  { grupo_etario: 'Menor que 1 año', total_casos: 6 },
  { grupo_etario: 'Igual a 1 año', total_casos: 2 },
  { grupo_etario: 'De 2 a 4 años', total_casos: 14382 },
  { grupo_etario: 'De 5 a 9 años', total_casos: 45829 },
  { grupo_etario: 'De 10 a 14 años', total_casos: 68550 },
  { grupo_etario: 'De 15 a 19 años', total_casos: 72570 },
  { grupo_etario: 'De 20 a 24 años', total_casos: 76695 },
  { grupo_etario: 'De 25 a 34 años', total_casos: 153559 },
  { grupo_etario: 'De 35 a 44 años', total_casos: 125673 },
  { grupo_etario: 'De 45 a 64 años', total_casos: 170465 },
  { grupo_etario: 'Mayor o igual a 65 años', total_casos: 52410 },
  { grupo_etario: 'Posneonato (29 hasta 365 días)', total_casos: 3425 },
  { grupo_etario: 'Neonato (hasta 28 días)', total_casos: 285 },
  { grupo_etario: 'Edad Sin Esp.', total_casos: 924 },
  { grupo_etario: 'De 13 a 24 meses', total_casos: 3884 }
]

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

const PieChartComponent = () => {
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
            data={casosPorRangoEtario}
            dataKey='total_casos'
            nameKey='grupo_etario'
            cx='50%'
            cy='50%'
            outerRadius={150}
            fill='#8884d8'
            label={showLegend}
          >
            {casosPorRangoEtario.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieChartComponent
