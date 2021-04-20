import React, { memo } from 'react'
import Header from './Header'

const BasketForDestroy = () => {
  return (
    <>
      <Header />
      <div className="grid grid-row-2">
        <h1>Здесь будет корзина со списком на уничтожение!</h1>
        <section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sodales lorem
          ut convallis. Fusce orci nunc, cursus et interdum in, posuere eget risus. Donec tempus
          erat sit amet hendrerit tincidunt. Praesent tristique turpis sed nulla blandit
          pellentesque. Nunc nibh magna, blandit non ultrices vitae, venenatis a velit. Aenean
          rhoncus, elit vel hendrerit dignissim, leo lectus ornare odio, sed dictum sapien arcu eget
          nibh. Nullam posuere sapien vitae quam venenatis, vel imperdiet neque sodales. Vestibulum
          dolor velit, dapibus pharetra lorem sit amet, blandit sollicitudin dui. Morbi facilisis,
          metus eget commodo tristique, tortor ligula volutpat lectus, congue sagittis neque odio at
          magna. Mauris vehicula mi et lorem aliquet aliquet. Aliquam interdum sed ante eget
          interdum. Maecenas lacinia diam non turpis aliquam, id pharetra nunc tincidunt. Nullam et
          viverra turpis. Etiam ut condimentum tellus. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Sed euismod est sit amet ante facilisis
          imperdiet. Sed ac vestibulum eros, a accumsan erat. Morbi aliquet est non pretium commodo.
          Mauris sollicitudin magna et massa venenatis tempus. Cras sit amet neque eget mauris
          varius efficitur. Etiam facilisis lectus sed quam porttitor, quis aliquet magna semper.
          Sed sagittis, mauris at mattis venenatis, sapien eros semper lectus, non finibus turpis
          magna a felis. Morbi at mauris rhoncus, dapibus diam ut, sodales odio. Vestibulum volutpat
          vitae erat nec sagittis. Proin feugiat nunc venenatis tempor lacinia. Aliquam accumsan
          quam sit amet neque condimentum, nec laoreet lectus porta. Ut pretium hendrerit lacus, id
          elementum quam finibus in. Nunc faucibus vitae ipsum at dictum. Ut hendrerit velit id
          egestas malesuada. Suspendisse commodo, dolor non cursus vestibulum, turpis neque
          tristique leo, non convallis nisl sem id tellus.
        </section>
      </div>
    </>
  )
}

BasketForDestroy.propTypes = {}

export default memo(BasketForDestroy)