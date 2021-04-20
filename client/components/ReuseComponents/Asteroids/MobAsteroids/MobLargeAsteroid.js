import React, { memo } from 'react'

const MobLargeAsteroid = () => {
  return (
    <div className="md:hidden col-start-1 col-end-14 row-start-1 row-end-6">
      <svg
      className="absolute z-0"
        width="288"
        height="81"
        viewBox="0 0 288 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-32.5925 -60.5857C-26.7178 -44.4164 -17.987 -26.8746 -5.70476 -16.6524C21.5327 6.02133 27.3699 13.4697 37.4247 58.817C47.4795 104.164 94.1729 65.941 94.1729 65.941C94.1729 65.941 108.116 56.5464 131.49 69.684C137.959 72.7932 145.171 74.028 152.308 73.248C171.763 72.2749 208.344 64.2027 238.15 21.5669C280.955 -39.6504 305.923 -57.791 298.791 -112.209C291.659 -166.626 283.549 -194.806 221.938 -204.201C179.936 -210.601 145.33 -232.822 127.535 -246.309C126.327 -247.228 125.095 -248.097 123.838 -248.924C116.524 -253.778 108.319 -257.134 99.6979 -258.797C91.0767 -260.46 82.2107 -260.398 73.6137 -258.614C57.1469 -254.948 41.864 -247.213 29.1644 -236.12C23.26 -231.133 17.8794 -225.56 13.1058 -219.484C4.95197 -209.115 -1.43827 -197.475 -5.80885 -185.033C-11.9472 -167.071 -19.2744 -149.536 -27.7421 -132.545C-32.3648 -123.797 -35.5076 -114.345 -37.0433 -104.573C-39.2108 -89.7683 -37.6819 -74.6579 -32.5925 -60.5857Z"
          fill="#828A9E"
        />
      </svg>

      <svg
        className="absolute z-40 ml-6"
        width="275"
        height="48"
        viewBox="0 0 275 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M67.585 47.3762C68.9374 47.3755 70.236 46.8474 71.2043 45.9043C72.1725 44.9612 72.7338 43.6778 72.7685 42.3274C73.697 11.2446 56.1147 -3.91826 55.3611 -4.54624C54.3055 -5.3767 52.9685 -5.76566 51.6315 -5.63121C50.2946 -5.49676 49.062 -4.84937 48.1934 -3.82538C47.3247 -2.8014 46.8877 -1.48069 46.9743 -0.1413C47.0609 1.19809 47.6645 2.45165 48.6579 3.35546C49.299 3.90858 63.1717 16.2102 62.3973 42.0072C62.3768 42.6874 62.4906 43.365 62.7322 44.0013C62.9739 44.6376 63.3386 45.2201 63.8057 45.7156C64.2727 46.211 64.8329 46.6098 65.4542 46.889C66.0755 47.1682 66.7458 47.3224 67.4268 47.3429L67.585 47.3762Z"
          fill="#62667C"
        />
        <path
          d="M131.268 10.7695C139.953 2.89167 143.963 -6.82762 140.225 -10.9391C136.487 -15.0505 126.417 -11.9973 117.732 -4.11938C109.047 3.75849 105.037 13.4778 108.775 17.5892C112.513 21.7007 122.583 18.6474 131.268 10.7695Z"
          fill="#62667C"
        />
        <path
          d="M216.981 -0.21893C221.467 -9.31291 219.235 -19.5737 211.995 -23.1371C204.756 -26.7004 195.25 -22.2169 190.764 -13.123C186.278 -4.02899 188.51 6.23181 195.749 9.79516C202.989 13.3585 212.495 8.87505 216.981 -0.21893Z"
          fill="#62667C"
        />
      </svg>
    </div>
  )
}


MobLargeAsteroid.propTypes = {}

export default memo(MobLargeAsteroid)