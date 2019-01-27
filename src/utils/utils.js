/**
 * Helper function to get distict values from an array of object given a property name
 * @function getValuesByProperty
 * @param {array} objs
 * @param {string} property
 * @return {array}
 */
export function getValuesByProperty(objs, property) {
  const values = objs.reduce((prev, value) => {
    if (!prev.includes(value[property])) {
      return [...prev, value[property]]
    }
    return prev
  }, [])
  return values
}

/**
 * Helper function to convert string to kebab case (eg. Kwajslein Atoll to kwajslein-atoll)
 * @function toKebabCase
 * @param {string} string
 * @returns {string}
 */
export function toKebabCase(string) {
  if (!string) throw new Error('string is required')
  return string
    .split(' ')
    .join('-')
    .toLowerCase()
}
