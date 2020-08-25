import * as React from 'react'
import SidebarCard from '../../components/home/sidebar/SideBarCard'

export default function Index () {
  const newestVideos = {
    title: 'newest video',
    content: [
      'javascript prototypal inheritance',
      'qt5 gui programming',
      'Andriod Ank Liberary',
      'streams in Java 11',
      'introduction to recursion',
      'pattern matching in Elixir',
      'Vue 3 composition API',
      'advance git course',
      'introduction to bash',
      'closure in functional programming'
    ]
  }
  return (
    <div className='flex h-full'>
      <div
        className='border-r border-grey2 w- bg-grey1'
      >
        <div className='border-b border-grey3'>
          <SidebarCard sidebarCardContent={newestVideos} />
        </div>
        <div className='border-b border-grey3'>
          <SidebarCard sidebarCardContent={newestVideos} isSupportCard={true} />
        </div>
        <div>
          <SidebarCard sidebarCardContent={newestVideos} isSupportCard={true} />
        </div>
      </div>
      <div className='w-full'>
        <div className='pt-8 px-5 flex flex-col'>
          <h2 className='text-fg1 font-bold text-base capitalize'>featured videos</h2>
          <div className='rounded-sm overflow-hidden mt-4 w-1/4 border border-grey2'>
            <div>
              <img
                className='h-48 w-full object-cover'
                src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80"
                alt="video image"/>
            </div>
            <div className='mt-4'>
              <div className='flex items-center px-2'>
                <div className='w-3/4 '>
                  <p className='text-xs break-normal '>
                    Understanding React hooks including useContext, UseLayoutEffect
                  </p>
                </div>
                <div className='w-1/4 flex flex-col items-end'>
                  <div className='w-12 h-12 rounded-sm overflow-hidden'>
                    <img
                      className='object-cover'
                      src="https://images.unsplash.com/flagged/photo-1571837360114-edf5dba7b1dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=60&q=40" alt="userprofile"/>
                  </div>
                </div>
              </div>
              <div className='px-2'>
                <h4 className='mt-px flex flex-col items-end'>
                  <span className='capitalize font-bold mt'>
                      Andrew Kimnick
                  </span>
                  <span className='text-sm text-xs capitalize text-grey4'>frontend developer @ Frendz inc</span>
                </h4>
                <div className='flex mt-2'>
                  <h4>react</h4><h4>javascript</h4><h4>frontend</h4><h4>programming </h4>
                </div>
              </div>
              <div className='mt-2 text-success px-2'>
                <span>Uploaded 3 months ago Updated Yesterday</span>
              </div>
              <div className='mt-4 flex bg-grey1 px-2 py-4'>
                <span className='text-link'>Source code hosted on GitHub</span>
                <div className='flex ml-auto'>
                  <div>svg</div>
                  <span>3,453</span>
                  <span>stars</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
