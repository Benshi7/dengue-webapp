import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const casosPorProvincia = [
  { provincia_residencia: 'Buenos Aires', total_casos: 123809 },
  { provincia_residencia: 'CABA', total_casos: 44954 },
  { provincia_residencia: 'Chaco', total_casos: 44006 },
  { provincia_residencia: 'Córdoba', total_casos: 115323 },
  { provincia_residencia: 'Corrientes', total_casos: 15618 },
  { provincia_residencia: 'Entre Ríos', total_casos: 20756 },
  { provincia_residencia: 'Formosa', total_casos: 20860 },
  { provincia_residencia: 'Misiones', total_casos: 23015 },
  { provincia_residencia: 'Salta', total_casos: 50408 },
  { provincia_residencia: 'Santa Fe', total_casos: 88036 },
  { provincia_residencia: 'Santiago del Estero', total_casos: 34833 },
  { provincia_residencia: 'Tucumán', total_casos: 115363 },
  { provincia_residencia: 'Jujuy', total_casos: 25676 },
  { provincia_residencia: 'Catamarca', total_casos: 12258 },
  { provincia_residencia: 'Chubut', total_casos: 72 },
  { provincia_residencia: 'La Pampa', total_casos: 585 },
  { provincia_residencia: 'La Rioja', total_casos: 14041 },
  { provincia_residencia: 'Mendoza', total_casos: 4840 },
  { provincia_residencia: 'Neuquén', total_casos: 222 },
  { provincia_residencia: 'Río Negro', total_casos: 114 },
  { provincia_residencia: 'San Juan', total_casos: 2355 },
  { provincia_residencia: 'San Luis', total_casos: 3952 },
  { provincia_residencia: 'Santa Cruz', total_casos: 304 },
  { provincia_residencia: 'Tierra del Fuego', total_casos: 214 },
  { provincia_residencia: 'desconocida', total_casos: 27045 }
]

const BarChartComponent = () => (
  <div className='w-[90%] h-[90%] min-w-[400px] min-h-[400px] mx-auto'>
    <ResponsiveContainer className=' min-w-[90%] min-h-[90%]'>
      <BarChart
        data={casosPorProvincia}
        layout='vertical'
        margin={{ top: 10, right: 30, left: 30, bottom: 20 }}
      >
        <XAxis type='number' />
        <YAxis dataKey='provincia_residencia' type='category' width={150} />
        <Tooltip />
        <Legend />
        <Bar dataKey='total_casos' fill='#8884d8' />
      </BarChart>
    </ResponsiveContainer>
  </div>
)

export default BarChartComponent
