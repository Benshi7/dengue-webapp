/* import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import axios from 'axios'
import Estimaciones from '../src/components/Estadisticas/Estimaciones'

const transformedData = data => {
  return data.map((item, index) => ({
    ...item,
    total_casos: parseInt(item.total_casos),
    index: index + 1
  }))
}

describe('Test el componente Estimaciones', () => {
  it('debería traer la data, transformarla y mostrarla correctamente', async () => {
    const response = await axios.get(
      'http://localhost:5000/api/dengue/estadisticas'
    )

    const transformed = transformedData(response.data.casosPorProvincia)
    console.log(transformed)

    render(<Estimaciones />)

    await waitFor(() => {
      const items = screen.getAllByRole('listitem')

      expect(items).toHaveLength(transformed.length)

      expect(items[0].textContent).toBe(
        `${transformed[0].index}. ${transformed[0].total_casos}`
      )
      expect(items[1].textContent).toBe(
        `${transformed[1].index}. ${transformed[1].total_casos}`
      )
    })
  })
})
 */

import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import axios from 'axios'
import Estimaciones from '../src/components/Estadisticas/Estimaciones'

vi.mock('axios')

const mockData = [
  { provincia_residencia: 'Buenos Aires', total_casos: '100' },
  { provincia_residencia: 'Córdoba', total_casos: '50' },
  { provincia_residencia: 'Santa Fe', total_casos: '75' }
]

describe('Test el componente Estimaciones', () => {
  it('debería traer la data, transformarla y mostrarla correctamente', async () => {
    axios.get.mockResolvedValue({ data: { casosPorProvincia: mockData } })
    render(<Estimaciones />)
    await waitFor(() => {
      const items = screen.getAllByRole('listitem')
      expect(items).toHaveLength(mockData.length)

      mockData.forEach((data, index) => {
        const expectedText = `${index + 1}. ${parseInt(data.total_casos)}`
        expect(items[index].textContent).toBe(expectedText)
      })
    })
  })
  it('debería manejar datos corruptos sin crashear', async () => {
    const mockDataCorrupta = [
      { provincia_residencia: 'Buenos Aires', total_casos: 'NaN' },
      { provincia_residencia: 'Córdoba', total_casos: null }
    ]
    axios.get.mockResolvedValue({
      data: { casosPorProvincia: mockDataCorrupta }
    })
    expect(() => render(<Estimaciones />)).not.toThrowError()

    await waitFor(() => {
      const items = screen.queryAllByRole('listitem')
      expect(items).toHaveLength(0)
    })
  })
})
