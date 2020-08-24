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
        className='border-r border-grey2 w-64 bg-grey1'
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
        <div className='pt-8 px-5 flex'>
          <h3 className='text-fg1 font-bold text-base capitalize'>featured videos</h3>
        </div>
      </div>
    </div>
  )
}
