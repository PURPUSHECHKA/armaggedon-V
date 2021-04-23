const detailedInformation = (approximation) => {
  const date = approximation.close_approach_date_full
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }
  const getDate = new Date(date).toLocaleString('ru', options).replace(',', ' -')
  const { kilometers_per_hour } = approximation.relative_velocity
  const velocity = `${Math.round(kilometers_per_hour)} км/ч`
  const { kilometers } = approximation.miss_distance
  const currentDistance = `${Math.round(kilometers)} км`
  const { orbiting_body: orbiting } = approximation
  return { velocity, getDate, currentDistance, orbiting }
}
export default detailedInformation
