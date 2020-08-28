import React, { useState } from 'react'
export default function SingleUpload () {
  const [videoName, setVideoName] = useState('')
  const handleVideoNameChange = (evt) => {
    evt.persist()
    setVideoName(_videoname => evt.target.value)
  }
  return (
    <div className='mt-8'>
      <div className='flex items-center content-center '>
        <form>
          <div className='flex'>
            <div className='flex flex-col'>
              <span className='text-grey4 capitalize text-xs pl-px'>video\'s title</span>
              <input
                className='mt-1 p-1 capitalize bg-grey text-grey placeholder-grey2
              focus:shadow-outline border border-grey3 focus:outline-none focus:text-fg1 focus:bg-fg' type='text'
                placeholder="provide video's title" value={videoName} onChange={handleVideoNameChange}
              />
            </div>

            <div className='flex flex-col ml-8'>
              <span className='text-grey4 capitalize text-xs pl-px'>video\'s url</span>
              <input
                className='mt-1 p-1 capitalize bg-grey text-grey placeholder-grey2
              focus:shadow-outline border border-grey3 focus:outline-none focus:text-fg1 focus:bg-fg' type='text'
                placeholder="provide video's url" value={videoName} onChange={handleVideoNameChange}
              />
            </div>

            <div className='flex flex-col ml-8'>
              <span className='text-grey4 capitalize text-xs pl-px'>video\'s tags</span>
              <input
                className='mt-1 p-1 capitalize bg-grey text-grey placeholder-grey2
              focus:shadow-outline border border-grey3 focus:outline-none focus:text-fg1 focus:bg-fg ' type='text'
                placeholder="video's tags separated by comma" value={videoName} onChange={handleVideoNameChange}
              />
            </div>
          </div>
          <div className='flex mt-8'>
            <div className='flex flex-col'>
              <span className='text-grey4 capitalize text-xs pl-px'>video\'s thumbnail url</span>
              <input
                className='mt-1 p-1 capitalize bg-grey text-grey placeholder-grey2
              focus:shadow-outline border border-grey3 focus:outline-none focus:text-fg1 focus:bg-fg' type='text'
                placeholder='picture to display for the video' value={videoName} onChange={handleVideoNameChange}
              />
            </div>

            <div className='flex flex-col ml-8'>
              <span className='text-grey4 capitalize text-xs pl-px'>video\'s source code url</span>
              <input
                className='mt-1 p-1 capitalize bg-grey text-grey placeholder-grey2
              focus:shadow-outline border border-grey3 focus:outline-none focus:text-fg1 focus:bg-fg' type='text'
                placeholder='url link to the source code' value={videoName} onChange={handleVideoNameChange}
              />
            </div>

            <div className='flex flex-col ml-8'>
              <span className='text-grey4 capitalize text-xs pl-px'>associate video with previous url</span>
              <input
                className='mt-1 p-1 capitalize bg-grey text-grey placeholder-grey2
              focus:shadow-outline border border-grey3 focus:outline-none focus:text-fg1 focus:bg-fg' type='text'
                su placeholder='link video with previous channel' value={videoName} onChange={handleVideoNameChange}
              />
            </div>
          </div>
          <button
            className='mt-4  bg-success px-2 py-1 capitalize hover:text-grey hover:bg-success1 focus:outline-none'
          >submit
          </button>
        </form>
      </div>
    </div>
  )
}
