import React from 'react'
import Notification from './Notification'

export default function Header () {
  return (
    <div className='flex bg-grey1 h-16 items-center pl-4  '>
      <div className='-mt-1 w-1/3'>
        <svg width='132' height='40' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M33.675 4.801a9.769 9.769 0 00-4.32.314 9.81 9.81 0 00-3.767 2.152 9.883 9.883 0 00-2.48 3.573 9.936 9.936 0 00.484 8.486 9.865 9.865 0 002.87 3.264 9.768 9.768 0 008.314 1.52l-1.018-3.778a5.901 5.901 0 01-5.022-.917 5.957 5.957 0 01-1.733-1.971 5.997 5.997 0 011.205-7.284 5.9 5.9 0 014.884-1.49l.583-3.869z'
            fill='#B4B6BB'/>
          <path
            d='M33.375 19.004c-2.569-4.807-.776-10.799 4.003-13.383 4.779-2.583 10.735-.78 13.304 4.027 2.568 4.808.776 10.8-4.003 13.383-4.78 2.584-10.736.781-13.304-4.027zm13.88-7.503c-1.552-2.904-5.15-3.993-8.036-2.432-2.886 1.56-3.969 5.18-2.417 8.083 1.55 2.903 5.148 3.992 8.035 2.432 2.886-1.56 3.969-5.18 2.418-8.083z'
            fill='#D7DCE7'/>
          <path
            d='M50.425 24.258a9.77 9.77 0 008.549-1.427 9.863 9.863 0 002.937-3.361 9.927 9.927 0 00-2.378-12.276 9.801 9.801 0 00-3.976-2.006 9.767 9.767 0 00-4.448-.037l.85 3.82a5.9 5.9 0 015.088 1.233 5.965 5.965 0 011.624 2.153 6 6 0 01-.188 5.261 5.956 5.956 0 01-1.774 2.03 5.915 5.915 0 01-5.163.862l-1.121 3.748z'
            fill='#B4B6BB'/>
          <path fill='#B4B6BB'
            d='M52.797 17.127l-.108-4.234 7.257-.187.108 4.234zM75.831 5.674a9.764 9.764 0 00-8.491 1.722 9.854 9.854 0 00-2.816 3.461 9.943 9.943 0 00-.004 8.719 9.89 9.89 0 002.813 3.47 9.808 9.808 0 004.043 1.868 9.761 9.761 0 004.446-.117l-.984-3.788a5.895 5.895 0 01-2.685.07 5.923 5.923 0 01-2.443-1.128 5.974 5.974 0 01-1.698-2.096 6.005 6.005 0 01.002-5.266 5.95 5.95 0 011.7-2.09 5.906 5.906 0 015.13-1.04l.987-3.785z'/>
          <path fill='#B4B6BB'
            d='M73.711 12.884l.258 4.232-7.242.438-.258-4.232zM8.28 23.75a9.771 9.771 0 009.2-1.073 9.864 9.864 0 003.145-3.613 9.931 9.931 0 00-.159-9.316A9.858 9.858 0 0017.2 6.246a9.772 9.772 0 00-9.232-.754l1.55 3.59a5.902 5.902 0 015.576.455 5.954 5.954 0 011.973 2.115 5.996 5.996 0 01-1.803 7.809 5.912 5.912 0 01-5.557.648l-1.427 3.64z'/>
          <path fill='#B4B6BB'
            d='M5.568 4.941h4.21v29.647h-4.21zM9.778 22.946l3.417-2.475 8.201 11.456-3.417 2.475zM22.074 30.744l-1.648-2.286 4.544-3.315 1.648 2.286zM19.267 27.215l-1.648-2.286 4.544-3.316 1.648 2.286zM29.139 35.706h3.732v1.412h-5.49v-8.532h1.758v7.12zm7.552 1.529c-.93 0-1.687-.285-2.273-.856-.582-.57-.873-1.33-.873-2.279v-.164c0-.637.123-1.205.369-1.705.246-.504.594-.89 1.043-1.16.453-.274.969-.41 1.547-.41.867 0 1.549.273 2.045.82.5.547.75 1.322.75 2.326v.691h-4.037c.054.415.218.747.492.997.277.25.627.375 1.049.375.652 0 1.162-.237 1.529-.71l.832.932c-.254.36-.598.64-1.031.844a3.41 3.41 0 01-1.442.299zm-.193-5.203c-.336 0-.61.113-.82.34-.207.226-.34.55-.399.972h2.356v-.135c-.008-.375-.11-.664-.305-.867-.195-.207-.473-.31-.832-.31zm7.441 5.086a1.88 1.88 0 01-.17-.569c-.41.457-.943.686-1.6.686-.62 0-1.136-.18-1.546-.54a1.737 1.737 0 01-.61-1.359c0-.671.249-1.187.745-1.546.5-.36 1.22-.541 2.162-.545h.78v-.364c0-.293-.077-.527-.23-.703-.148-.176-.384-.263-.708-.263-.285 0-.51.068-.674.205-.16.136-.24.324-.24.562h-1.694a1.7 1.7 0 01.34-1.02c.227-.312.547-.556.961-.732.414-.18.879-.27 1.395-.27.78 0 1.4.198 1.857.592.46.391.691.942.691 1.653v2.748c.004.601.088 1.056.252 1.365v.1h-1.71zm-1.4-1.178c.25 0 .48-.055.691-.164.211-.113.368-.264.47-.451v-1.09h-.634c-.847 0-1.299.293-1.353.879l-.006.1c0 .21.074.384.223.52.148.138.351.206.609.206zm7.723-3.574a4.61 4.61 0 00-.61-.047c-.64 0-1.06.217-1.26.65v4.149H46.7v-6.34h1.6l.047.756c.34-.582.81-.873 1.412-.873.187 0 .363.025.527.076l-.023 1.629zm2.379-1.588l.052.732c.453-.566 1.06-.85 1.823-.85.671 0 1.171.198 1.5.592.328.395.496.985.504 1.77v4.096h-1.694v-4.055c0-.36-.078-.62-.234-.78-.157-.163-.416-.245-.78-.245-.476 0-.834.203-1.072.609v4.47h-1.693v-6.34h1.594zm6.955 6.34h-1.7v-6.34h1.7v6.34zm-1.8-7.98c0-.255.085-.464.253-.628.172-.164.404-.246.697-.246.29 0 .52.082.691.246a.829.829 0 01.258.627.827.827 0 01-.263.633c-.172.164-.4.246-.686.246-.285 0-.516-.082-.691-.246a.836.836 0 01-.258-.633zm4.759 1.64l.052.732c.453-.566 1.06-.85 1.823-.85.671 0 1.171.198 1.5.592.328.395.496.985.503 1.77v4.096H64.74v-4.055c0-.36-.078-.62-.234-.78-.156-.163-.416-.245-.78-.245-.476 0-.834.203-1.072.609v4.47h-1.693v-6.34h1.594zm4.922 3.123c0-.973.23-1.756.69-2.35.466-.593 1.09-.89 1.876-.89.695 0 1.236.238 1.623.714l.07-.597h1.535v6.129c0 .554-.127 1.037-.38 1.447-.25.41-.604.723-1.061.938-.457.214-.992.322-1.605.322-.465 0-.918-.094-1.36-.281-.441-.184-.775-.422-1.002-.715l.75-1.032c.422.473.934.71 1.535.71.45 0 .8-.122 1.05-.364.25-.238.374-.578.374-1.02v-.34c-.39.442-.904.663-1.54.663-.763 0-1.38-.297-1.852-.89-.47-.598-.704-1.39-.704-2.374v-.07zm1.693.123c0 .574.115 1.025.346 1.353.23.325.546.487.949.487.515 0 .885-.194 1.107-.58v-2.666c-.226-.387-.592-.58-1.096-.58-.406 0-.726.166-.96.498-.23.332-.346.828-.346 1.488zm8.86 3.094V32.02h-.944v-1.242h.943v-.54c0-.71.203-1.26.61-1.652.41-.394.982-.591 1.716-.591.235 0 .522.039.862.117l-.018 1.312a2.163 2.163 0 00-.516-.052c-.636 0-.955.298-.955.896v.51h1.26v1.242h-1.26v5.098H78.03zm3.573-3.229c0-.629.122-1.19.364-1.681.242-.493.59-.873 1.043-1.143.457-.27.986-.404 1.588-.404.855 0 1.552.261 2.091.785.543.523.846 1.234.909 2.133l.011.433c0 .973-.271 1.754-.814 2.344-.543.586-1.272.879-2.186.879-.914 0-1.644-.293-2.191-.879-.543-.586-.815-1.383-.815-2.39v-.077zm1.694.123c0 .602.113 1.063.34 1.383.226.316.55.475.972.475.41 0 .73-.157.961-.47.23-.316.346-.82.346-1.51 0-.59-.115-1.048-.346-1.372-.23-.324-.554-.486-.972-.486-.415 0-.735.162-.961.486-.227.32-.34.818-.34 1.494zm8.918-1.646a4.61 4.61 0 00-.61-.047c-.64 0-1.06.217-1.26.65v4.149h-1.693v-6.34h1.6l.047.756c.34-.582.81-.873 1.412-.873.187 0 .363.025.527.076l-.023 1.629zm6.445 3.504c.313 0 .567-.086.762-.258a.903.903 0 00.305-.686h1.587c-.004.43-.121.825-.351 1.184a2.35 2.35 0 01-.949.832 2.97 2.97 0 01-1.325.293c-.906 0-1.62-.287-2.144-.861-.524-.579-.785-1.376-.785-2.391v-.111c0-.977.26-1.756.779-2.338.52-.582 1.232-.873 2.139-.873.793 0 1.427.226 1.904.68.48.449.725 1.048.732 1.798h-1.587c-.008-.328-.11-.594-.305-.797-.195-.207-.453-.31-.774-.31-.394 0-.693.144-.896.433-.2.285-.299.75-.299 1.395v.176c0 .652.1 1.12.299 1.406.2.285.502.428.908.428zm3.358-1.98c0-.63.121-1.19.363-1.682.242-.493.59-.873 1.043-1.143.457-.27.986-.404 1.588-.404.855 0 1.552.261 2.091.785.543.523.846 1.234.909 2.133l.011.433c0 .973-.271 1.754-.814 2.344-.543.586-1.272.879-2.186.879-.914 0-1.644-.293-2.191-.879-.543-.586-.814-1.383-.814-2.39v-.077zm1.693.122c0 .602.113 1.063.34 1.383.226.316.551.475.972.475.411 0 .731-.157.961-.47.231-.316.346-.82.346-1.51 0-.59-.115-1.048-.346-1.372-.23-.324-.554-.486-.972-.486-.414 0-.735.162-.961.486-.227.32-.34.818-.34 1.494zm5.092-.111c0-.988.22-1.776.662-2.361.445-.586 1.053-.88 1.822-.88.617 0 1.127.231 1.529.692v-3.234h1.7v9h-1.53l-.082-.674c-.422.527-.965.79-1.629.79-.746 0-1.345-.292-1.798-.878-.45-.59-.674-1.408-.674-2.455zm1.693.123c0 .594.104 1.049.311 1.365.207.317.507.475.902.475.523 0 .893-.22 1.107-.662V32.7c-.211-.442-.576-.662-1.095-.662-.817 0-1.225.662-1.225 1.986zm8.25 3.21c-.93 0-1.687-.284-2.273-.855-.582-.57-.873-1.33-.873-2.279v-.164c0-.637.123-1.205.369-1.705.246-.504.593-.89 1.043-1.16.453-.274.968-.41 1.547-.41.867 0 1.548.273 2.044.82.5.547.75 1.322.75 2.326v.691h-4.037c.055.415.219.747.493.997.277.25.626.375 1.048.375.653 0 1.162-.237 1.53-.71l.832.932c-.254.36-.598.64-1.032.844-.433.2-.914.299-1.441.299zm-.193-5.202c-.336 0-.61.113-.821.34-.207.226-.339.55-.398.972h2.355v-.135c-.007-.375-.109-.664-.304-.867-.196-.207-.473-.31-.832-.31zm7.33.334a4.622 4.622 0 00-.61-.047c-.64 0-1.06.217-1.259.65v4.149h-1.694v-6.34h1.6l.047.756c.34-.582.81-.873 1.412-.873.187 0 .363.025.527.076l-.023 1.629zm4.254 3c0-.207-.104-.37-.311-.487-.203-.12-.531-.228-.984-.322-1.508-.316-2.262-.957-2.262-1.922 0-.562.232-1.031.697-1.406.469-.379 1.08-.568 1.834-.568.805 0 1.448.19 1.928.568.484.379.727.871.727 1.477h-1.694a.81.81 0 00-.234-.598c-.156-.16-.401-.24-.733-.24-.285 0-.505.064-.662.193a.61.61 0 00-.234.492c0 .188.088.34.264.457.179.114.48.213.902.3.422.081.777.175 1.066.28.895.328 1.342.897 1.342 1.705 0 .578-.248 1.047-.744 1.407-.496.355-1.137.533-1.922.533-.531 0-1.004-.094-1.418-.281a2.416 2.416 0 01-.967-.78 1.825 1.825 0 01-.351-1.072h1.605c.016.3.127.531.334.692.207.16.485.24.832.24.325 0 .569-.06.733-.182a.58.58 0 00.252-.486z'/>
        </svg>
      </div>
      <div className='flex w-2/3'>
        <div>
          <div className='border border-grey2 bg-grey flex items-center relative'>
            <svg className='absolute ml-1' width='20' height='20' viewBox='0 0 24 24' fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M11 19a8 8 0 100-16 8 8 0 000 16z' stroke='#B4B6BB' strokeWidth='2' strokeLinecap='round'
                strokeLinejoin='round'/>
              <path d='M21 21l-4.35-4.35' stroke='#B4B6BB'/>
            </svg>
            <input
              className='bg-grey outline-none focus:shadow-outline py-2 pl-8
              placeholder-grey4 text-xs text-white w-64'
              type='text' placeholder='Search Videos Channels or Users'
            />
          </div>
        </div>
        <div className='ml-auto pr-4 flex items-center'>
          <button className='flex items-center focus:outline-none hover:text-grey4'>
            <svg width='24' height='24' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M18.667 18.667L14 14l-4.667 4.667M14 14v10.5' stroke='#B4B6BB' strokeWidth='2'
                strokeLinecap='round' strokeLinejoin='round'/>
              <path d='M23.788 21.455A5.834 5.834 0 0021 10.5h-1.47A9.332 9.332 0 103.5 19.017' stroke='#B4B6BB'
                strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
              <path d='M18.667 18.667L14 14l-4.667 4.667' stroke='#B4B6BB' strokeWidth='2' strokeLinecap='round'
                strokeLinejoin='round'/>
            </svg>

          </button>
          <button
            className='ml-2 flex items-center justify-center
            relative focus:outline-none'
          >
            <Notification/>
          </button>
          <button
            className='ml-16 text-fg text-xs border border-grey3 font-bold
            px-1 py-1  self-center capitalize hover:text-fg1 hover:border-grey-4 focus:outline-none'
          >
            popular
          </button>
          <button
            className='ml-2 text-fg text-xs font-bold px-1 py-1
            self-center uppercase hover:text-fg1 font-bold focus:outline-none hidden'
          >
            login
          </button>
          <button
            className='ml-2 flex items-center w-8 h-8
            rounded-full overflow-hidden border border-grey2 focus:outline-none focus:border-grey3'
          >
            <img
              src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=60&q=60'
              alt='profile pic'
            />
          </button>
        </div>
      </div>
    </div>
  )
}
