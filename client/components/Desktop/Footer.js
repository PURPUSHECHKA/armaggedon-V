import React, { memo } from 'react'

const Footer = () => {
  return (
    <footer className="grid font-sans">
      <span className="justify-self-center">2021 &copy; Все права и планета защищены.</span>
    </footer>
  )
}

Footer.propTypes = {}

export default memo(Footer)
