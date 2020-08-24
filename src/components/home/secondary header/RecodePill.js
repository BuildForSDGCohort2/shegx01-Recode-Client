import React from 'react'

export default function RecodePill (props) {
  const { pillName } = props
  return (
    <h4 className='px-1 py-px ml-2 border border-grey3 capitalize text-fg1 bg-grey2 text-xs whitespace-no-wrap'>
      {pillName}
    </h4>
  )
}
