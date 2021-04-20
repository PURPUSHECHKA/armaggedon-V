import React, { memo } from 'react'

const Footer = () => {
  return (
    <footer className="text-center" >
      <span className="font-sans">2021 &copy; Все права и планета защищены.</span>
    </footer>
  )
}

Footer.propTypes = {}

export default memo(Footer)
