import { describe, it, expect } from 'vitest'

const obtenerIndiceMaxRangoEtario = casosPorRangoEtario => {
  if (!casosPorRangoEtario || casosPorRangoEtario.length === 0) {
    return null
  }
  return casosPorRangoEtario.reduce((maxIndex, current, index) => {
    return parseInt(current.total_casos) >
      parseInt(casosPorRangoEtario[maxIndex].total_casos)
      ? index
      : maxIndex
  }, 0)
}

const casos = [
  {
    grupo_etario: 'De 25 a 34 años',
    total_casos: '5580'
  },
  {
    grupo_etario: 'De 35 a 44 años',
    total_casos: '3844'
  },
  {
    grupo_etario: 'De 45 a 64 años',
    total_casos: '7798'
  }
]

const casosIguales = [
  {
    grupo_etario: 'De 15 a 19 años',
    total_casos: '100'
  },
  {
    grupo_etario: 'De 20 a 24 años',
    total_casos: '100'
  },
  {
    grupo_etario: 'De 25 a 34 años',
    total_casos: '100'
  }
]

describe('obtenerIndiceMaxRangoEtario', () => {
  it('debería devolver el índice del rango etario con más casos', () => {
    const resultado = obtenerIndiceMaxRangoEtario(casos)
    expect(resultado).toBe(2) // El índice con más casos es 2 (7798)
  })

  it('debería lanzar un error si hay números negativos', () => {
    const casos = [{ total_casos: '-10' }, { total_casos: '5' }]
    expect(() => obtenerIndiceMaxRangoEtario(casos)).toThrow(
      'El número de casos no puede ser negativo'
    )
  })

  it('debería devolver null si no hay datos', () => {
    const resultado = obtenerIndiceMaxRangoEtario([])
    expect(resultado).toBeNull()

    const resultado2 = obtenerIndiceMaxRangoEtario(null)
    expect(resultado2).toBeNull()

    const resultado3 = obtenerIndiceMaxRangoEtario(undefined)
    expect(resultado3).toBeNull()
  })

  it('debería manejar correctamente strings numéricos', () => {
    const resultado = obtenerIndiceMaxRangoEtario(casos)
    expect(resultado).toBe(2)
  })

  it('debería devolver 0 (o sea, el primero) si todos los casos tienen el mismo valor', () => {
    const resultado = obtenerIndiceMaxRangoEtario(casosIguales)
    expect(resultado).toBe(0)
  })
})
