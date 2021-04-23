const sortedList = (week) => {
    const sortedDate = Object.keys(week)
      .map((key) => Date.parse(key))
      .sort((a, b) => a - b)
      .map((el) => {
        return new Date(el).toISOString().toLocaleString().slice(0, 10)
      })
      return sortedDate
}

export default sortedList