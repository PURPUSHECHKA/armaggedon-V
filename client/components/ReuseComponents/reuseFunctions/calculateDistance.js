const calculateDistance = (distance, changedDistances) => {
  const kilometers = Math.round(distance.kilometers)
  const lunar = Math.round(distance.lunar)
  return (changedDistances && `${lunar}`) || `${kilometers} км`
}
export default calculateDistance