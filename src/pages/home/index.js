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
    <div className='flex w-screen h-full px-4'>
      <div
        className='border-r border-grey2 w-64'
      >
        <SidebarCard sidebarCardContent={newestVideos} />
        <SidebarCard sidebarCardContent={newestVideos} />
        <SidebarCard sidebarCardContent={newestVideos} />
      </div>
      <div className='w-full'>right as content</div>
    </div>
  )
}
