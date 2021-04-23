 const dataAboutAsteroid = (particularAsteroid) => {
    const regex = /(?<=\()\w*\s*\w*/g
    const name = particularAsteroid.name.match(regex).join('')
    const { is_potentially_hazardous_asteroid: hazardous } = particularAsteroid
    const averageDiameter = () => {
      const { meters } = particularAsteroid.estimated_diameter
      const { estimated_diameter_min: min, estimated_diameter_max: max } = meters
      return +Math.round(max - min).toFixed(0)
    }
    const dateAsteroid = particularAsteroid.close_approach_data[0].close_approach_date_full
    const date = new Date(dateAsteroid).toLocaleString('ru', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const distance = particularAsteroid.close_approach_data[0].miss_distance
    return { name, hazardous, averageDiameter, date, distance }
}

export default dataAboutAsteroid
