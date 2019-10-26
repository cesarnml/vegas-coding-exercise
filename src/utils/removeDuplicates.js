export const removeDuplicates = arr => {
  return [...new Set(arr.map(s => JSON.stringify(s)))].map(s => JSON.parse(s))
}
