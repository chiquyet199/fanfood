import React from 'react'
import './Icon.css'

export function Back(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 32 32"
      className={`icon ${props.className}`}
      aria-hidden="true"
    >
      <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z" />
    </svg>
  )
}