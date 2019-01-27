import { getValuesByProperty, toKebabCase } from '../utils/utils'

describe('Utils Test', () => {
  test('Get distict values by property name', () => {
    const input = [{ name: 'Falcon 1' }, { name: 'Falcon 9' }, { name: 'Falcon 9' }]
    const output = ['Falcon 1', 'Falcon 9']
    expect(getValuesByProperty(input, 'name')).toEqual(output)
  })

  test('convert string to kebab case', () => {
    expect(toKebabCase('Kwajslein Atoll')).toBe('kwajslein-atoll')
  })

  test('toKebabCase should throw error when string is not specified', () => {
    expect(() => toKebabCase('')).toThrow('string is required')
  })
})
