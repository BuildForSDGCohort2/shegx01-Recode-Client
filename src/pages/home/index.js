import * as React from 'react'
import SidebarCard from '../../components/home/sidebar/SideBarCard'
import VideoCategory from '../../components/home/main/VideoCategory'
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
          <SidebarCard sidebarCardContent={newestVideos} isSupportCard />
        </div>
        <div>
          <SidebarCard sidebarCardContent={newestVideos} isSupportCard />
        </div>
      </div>
      <div className='w-full'>
        <VideoCategory categoryName='featured videos' />
        <VideoCategory categoryName='most viewed' />
        <VideoCategory categoryName='web programming' />
        <VideoCategory categoryName='mobile programming' />
        <VideoCategory categoryName='server programming' />
        <VideoCategory categoryName='game programming' />
      </div>
    </div>
  )
}
