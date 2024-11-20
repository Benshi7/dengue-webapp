import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import axios from 'axios'
import Estimaciones from '../src/components/Estadisticas/Estimaciones'

const transformedData = data => {
  return data.map((item, index) => ({
    ...item,
    total_casos: parseInt(item.total_casos, 10),
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
      const items = screen.getAllByRole('listitem') // busca todos los items con el role listitem, es decir, los <li></li> que renderizó

      expect(items).toHaveLength(transformed.length)
      console.log(
        `La longitud de transformed es: ${transformed.length}, y la de items: ${items.length}. Deberían coincidir.`
      )

      expect(items[0].textContent).toBe(
        `${transformed[0].index}. ${transformed[0].total_casos}`
      )
      expect(items[1].textContent).toBe(
        `${transformed[1].index}. ${transformed[1].total_casos}`
      )
    })
  })
})
