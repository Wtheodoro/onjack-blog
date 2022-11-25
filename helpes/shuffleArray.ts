const shuffleArray = (unshuffledArray: any[]) => {
  let shuffled = unshuffledArray
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  return shuffled
}

export default shuffleArray
