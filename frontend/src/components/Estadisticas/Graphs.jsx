import { BarChart, Bar, ResponsiveContainer } from 'recharts'

const Graphs = () => {
  const dataArray = [
    {
      anio: 2018,
      total_casos: '1196'
    },
    {
      anio: 2019,
      total_casos: '2793'
    },
    {
      anio: 2020,
      total_casos: '58675'
    },
    {
      anio: 2021,
      total_casos: '3849'
    },
    {
      anio: 2022,
      total_casos: '802'
    },
    {
      anio: 2023,
      total_casos: '146009'
    },
    {
      anio: 2024,
      total_casos: '575335'
    }
  ]
  return (
    <div className='h-[500px] w-[500px]'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={dataArray}>
          <Bar dataKey='total_casos' fill='#8884d8'>
            asd
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Graphs
