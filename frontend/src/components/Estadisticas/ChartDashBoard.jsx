import BarChartComponent from './BarChartComponent'
import GraficoPuntos from './GraficoPuntos'
import PieChartComponent from './PieChartComponent'
import SimpleAreaChart from './SimpleAreaChart'

const ChartDashBoard = () => (
  <div className='grid grid-cols-2 p-4 gap-4 mx-auto justify-center max-md:flex max-md:flex-col max-md:gap-6 max-md:justify-between max-md:items-center max-md:w-[90%]'>
    <div
      style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}
    >
      <SimpleAreaChart />
    </div>
    <div
      style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}
    >
      <PieChartComponent />
    </div>
    <div
      style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}
    >
      <BarChartComponent />
    </div>
    <div
      style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}
    >
      <GraficoPuntos />
    </div>
  </div>
)

export default ChartDashBoard
