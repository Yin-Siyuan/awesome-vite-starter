import './style.css'
import { getVideo, drawVideo } from './src/camera'

// const video = await getVideo();
// const canvas = document.querySelector("canvas");
// const button = document.querySelector("#camera");

// button.addEventListener("click", ()=>{
//   drawVideo(video, canvas);

// })

// await video.play();
;(async function run() {
  const video = await getVideo()
  const canvas = document.querySelector('canvas')
  const button = document.querySelector('#camera')
  button.addEventListener('click', () => {
    drawVideo(video, canvas)
  })
})()
