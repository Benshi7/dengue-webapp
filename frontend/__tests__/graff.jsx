/* import { render, screen, waitFor } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'
import axios from 'axios'
import GraficoPuntos from '../src/components/Estadisticas/GraficoPuntos'

// Mock de Axios
vi.mock('axios')

describe('GraficoPuntos', () => {
  it('transforma y muestra los datos correctamente', async () => {
    // Mock de respuesta de la API
    const mockedData = {
      data: {
        casosPorProvincia: [
          { provincia_residencia: 'Buenos Aires', total_casos: '123' },
          { provincia_residencia: 'Córdoba', total_casos: '45' }
        ]
      }
    }
    axios.get.mockResolvedValueOnce(mockedData)

    render(<GraficoPuntos />)

    // Asegúrate de que muestre el "Loading..." inicialmente
    expect(screen.getByText('Loading...')).toBeInTheDocument()

    // Espera a que los datos sean cargados
    await waitFor(() => {
      expect(screen.getByText('Buenos Aires')).toBeInTheDocument()
    })

    // Asegúrate de que los datos transformados se muestran correctamente
    expect(screen.getByText('Buenos Aires')).toBeInTheDocument()
    expect(screen.getByText('Córdoba')).toBeInTheDocument()
  })
})
 */
