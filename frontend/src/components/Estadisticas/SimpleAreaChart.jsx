import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const SimpleAreaChart = () => {
  const dataArray = [
    {
      anio: 2018,
      total_casos: 1196
    },
    {
      anio: 2019,
      total_casos: 2793
    },
    {
      anio: 2020,
      total_casos: 58675
    },
    {
      anio: 2021,
      total_casos: 3849
    },
    {
      anio: 2022,
      total_casos: 802
    },
    {
      anio: 2023,
      total_casos: 146009
    },
    {
      anio: 2024,
      total_casos: 575335
    }
  ]
  return (
    <div className='w-[90%] h-[90%] min-w-[400px] min-h-[400px] mx-auto'>
      <ResponsiveContainer className=' min-w-[90%] min-h-[90%]'>
        <AreaChart
          width={500}
          height={400}
          data={dataArray}
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
  )
}

export default SimpleAreaChart
