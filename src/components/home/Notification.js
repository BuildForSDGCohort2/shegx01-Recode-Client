import React from 'react'
import styles from './notification.modules.css'

export default function Notification () {
  return (
    <>
      <svg width='24' height='24' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M25.285 21.646a11.205 11.205 0 01-1.952-2.28 9.823 9.823 0 01-1.05-3.74v-3.843a8.408 8.408 0 00-7.342-8.36V2.418a1.038 1.038 0 00-2.077 0v1.019a8.408 8.408 0 00-7.256 8.345v3.843a9.824 9.824 0 01-1.05 3.74 11.202 11.202 0 01-1.921 2.28.777.777 0 00-.265.583v1.058a.778.778 0 00.778.777h21.622a.778.778 0 00.778-.777v-1.058a.78.78 0 00-.265-.583zm-21.295.863a12.58 12.58 0 001.898-2.333 11.076 11.076 0 001.283-4.55v-3.843a6.798 6.798 0 1113.588 0v3.843a11.075 11.075 0 001.283 4.55 12.58 12.58 0 001.898 2.333H3.99zM14 26.662a2.076 2.076 0 002.007-1.773h-4.092A2.077 2.077 0 0014 26.662z'
          fill='#B4B6BB'
        />
      </svg>
      <span className={`px-1 py-1 bg-danger rounded-full absolute right-0 border border-grey ${styles.notify}`} />
    </>)
}
