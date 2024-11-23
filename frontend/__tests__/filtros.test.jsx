import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Filtros from '../src/components/Dashboard/filtros'

describe('Componente Filtros', () => {
  it('debería actualizar los filtros al presionar el botón Aplicar', () => {
    const mockSetFiltros = vi.fn()

    render(<Filtros setFiltros={mockSetFiltros} />)

    const provinciaSelect = screen.getByDisplayValue('Todas las provincias')
    const rangoEtarioSelect = screen.getByDisplayValue('Todos los rangos')
    const tipoEventoSelect = screen.getByDisplayValue('Todos los eventos')
    const anioSelect = screen.getByDisplayValue('Todos los años')

    fireEvent.change(provinciaSelect, { target: { value: '1' } })
    fireEvent.change(rangoEtarioSelect, { target: { value: '2' } })
    fireEvent.change(tipoEventoSelect, { target: { value: 'Dengue' } })
    fireEvent.change(anioSelect, { target: { value: '2023' } })

    const aplicarButton = screen.getByRole('button', { name: /aplicar/i })
    fireEvent.click(aplicarButton)

    expect(mockSetFiltros).toHaveBeenCalledWith({
      provincia: '1',
      rangoEtario: '2',
      tipoEvento: 'Dengue',
      anio: '2023'
    })
  })
})
