import React from 'react'
import PropTypes from 'prop-types'

export default function SidebarCard (props) {
  const { sidebarCardContent } = props
  return (
    <div>
      <h2 className='font-bold text-sm text-grey4 uppercase pb-2 pt-8'>
        {sidebarCardContent.title}
      </h2>
      <div className=''>
        {
          sidebarCardContent.content.map((item, idx) => (
            <button
              className='capitalize whitespace-no-wrap truncate
              focus:outline-none hover:text-link text-fg1 py-1 flex w-full
              hover:bg-grey3 focus:bg-grey2 focus:text-link items-end px-2'
              key={idx} href='#'
            >
              {item}
            </button>
          ))
        }
      </div>
    </div>
  )
}

SidebarCard.propTypes = {
  sidebarCardContent: PropTypes.object.isRequired
}
