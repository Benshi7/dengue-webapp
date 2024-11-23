import { describe, it, expect, vi } from 'vitest'
import { calcularPromedioCasosPorProvincia } from '../src/utils/utils'

vi.mock('axios')

describe('Test de calcularPromedioCasosPorProvincia', () => {
  it('debería calcular correctamente el promedio cuando hay varias provincias con casos', () => {
    const datos = [
      { provincia: 'Buenos Aires', total_casos: '20' },
      { provincia: 'Córdoba', total_casos: '30' },
      { provincia: 'Mendoza', total_casos: '50' }
    ]
    expect(calcularPromedioCasosPorProvincia(datos)).toBe('33.33')
  })

  it('debería ignorar valores no válidos en el array', () => {
    const datos = [
      { provincia: 'Buenos Aires', total_casos: '40' },
      null,
      123,
      'invalid',
      { provincia: 'Córdoba', total_casos: '60' }
    ]
    expect(calcularPromedioCasosPorProvincia(datos)).toBe('50.00')
  })

  it('debería ignorar valores que resulten en NaN o Infinity', () => {
    const datos = [
      { provincia: 'Buenos Aires', total_casos: '50' },
      { provincia: 'Córdoba', total_casos: 'Infinity' },
      { provincia: 'Mendoza', total_casos: 'NaN' }
    ]
    expect(calcularPromedioCasosPorProvincia(datos)).toBe('50.00')
  })
})
