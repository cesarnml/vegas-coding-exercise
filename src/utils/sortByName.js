export const sortByName = (a, b) => {
  if (a.name.toUpperCase() < b.name.toUpperCase()) {
    return -1
  } else if (a.name > b.name) {
    return 1
  } else {
    return 0
  }
}
