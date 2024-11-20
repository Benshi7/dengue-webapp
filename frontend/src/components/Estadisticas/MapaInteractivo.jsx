import { useState } from 'react'
import { ReactComponent as MapaSVG } from '../../assets/mapa-argentina.svg'

const casosPorProvincia = [
  { provincia_residencia: 'Buenos Aires', total_casos: '123809', id: 'AR.BA' },
  { provincia_residencia: 'CABA', total_casos: '44954', id: 'AR.CABA' },
  { provincia_residencia: 'Chaco', total_casos: '44006', id: 'AR.CH' },
  { provincia_residencia: 'Córdoba', total_casos: '115323', id: 'AR.CO' },
  { provincia_residencia: 'Entre Ríos', total_casos: '20756', id: 'AR.ER' },
  { provincia_residencia: 'Formosa', total_casos: '20860', id: 'AR.FM' },
  { provincia_residencia: 'Misiones', total_casos: '23015', id: 'AR.NE' },
  { provincia_residencia: 'Salta', total_casos: '50408', id: 'AR.SA' },
  { provincia_residencia: 'Santa Fe', total_casos: '88036', id: 'AR.SF' },
  {
    provincia_residencia: 'Santiago del Estero',
    total_casos: '34833',
    id: 'AR.SE'
  },
  { provincia_residencia: 'Tucumán', total_casos: '115363', id: 'AR.TO' },
  { provincia_residencia: 'Jujuy', total_casos: '25676', id: 'AR.JU' },
  { provincia_residencia: 'Catamarca', total_casos: '12258', id: 'AR.CT' }
]

const MapaInteractivo = () => {
  const [highlightedRegion, setHighlightedRegion] = useState(null)
  const [tooltipData, setTooltipData] = useState(null)

  const handleMouseEnter = e => {
    const regionId = e.target.id
    const regionData = casosPorProvincia.find(prov => prov.id === regionId)
    setHighlightedRegion(regionId)
    setTooltipData(regionData)
  }

  const handleMouseLeave = () => {
    setHighlightedRegion(null)
    setTooltipData(null)
  }

  const getRegionStyle = id => {
    return highlightedRegion === id
      ? { fill: 'red', cursor: 'pointer' }
      : { fill: '#ccc', cursor: 'pointer' }
  }

  return (
    <div className='relative mx-auto items-center justify-center'>
      <MapaSVG
        style={{
          width: '100%',
          height: '700px',
          margin: '0 auto',
          display: 'flex'
        }}
      >
        {casosPorProvincia.map(provincia => (
          <path
            key={provincia.id}
            id={provincia.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={getRegionStyle(provincia.id)}
            d='...'
          />
        ))}
      </MapaSVG>
      {tooltipData && (
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '10px',
            background: '#fff',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        >
          <p>
            <strong>{tooltipData.provincia_residencia}</strong>
          </p>
          <p>Total Cases: {tooltipData.total_casos}</p>
        </div>
      )}
    </div>
  )
}

export default MapaInteractivo
