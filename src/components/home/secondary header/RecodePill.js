import React from 'react'
import PropTypes from 'prop-types'
export default function RecodePill (props) {
  const { pillName } = props
  return (
    <button className='px-2 py-px ml-2 border border-grey3 capitalize
    text-fg1 bg-grey2 text-xs whitespace-no-wrap rounded-sm focus:outline-none hover:bg-grey'>
      {pillName}
    </button>
  )
}

RecodePill.propTypes = {
  pillName: PropTypes.string.isRequired
}
