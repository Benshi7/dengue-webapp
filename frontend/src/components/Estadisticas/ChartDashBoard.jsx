import BarChartComponent from './BarChartComponent'
import GraficoPuntos from './GraficoPuntos'
import PieChartComponent from './PieChartComponent'
import SimpleAreaChart from './SimpleAreaChart'

const ChartDashBoard = () => (
  <div className='grid grid-cols-2 p-4 gap-4 mx-auto justify-center max-md:flex max-md:flex-col max-md:gap-6 max-md:justify-between max-md:items-center max-md:w-[90%]'>
    <div
      style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}
    >
      Total de casos por año
      <SimpleAreaChart />
    </div>
    <div
      style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}
    >
      Casos por grupo etario
      <PieChartComponent />
    </div>
    <div
      style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}
    >
      Total de casos por provincia
      <BarChartComponent />
    </div>
    <div
      style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}
    >
      Casos por provincia
      <GraficoPuntos />
    </div>
  </div>
)

export default ChartDashBoard
