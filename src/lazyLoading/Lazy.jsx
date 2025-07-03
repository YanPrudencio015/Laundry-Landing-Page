
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const test = "https://lottie.host/3a1227b9-e681-4f22-8280-09076175ed09/Z0QJnp1fAK.lottie";
const test2 = "https://lottie.host/22768d1e-9f19-493c-a94e-a745df66d354/4vbK6EdbcH.lottie";
const test3 = "https://lottie.host/2e255179-7a01-4de4-96e8-309a6d63d324/Xzj0ZnVJZB.lottie";

// import img from '../images/Backgrounds/checkered-pattern.png';
import './lazy.css'
import transition from '../transition';
const LazyLoading = () => {
  return (
    <div className='lazy-loading-section'>
    <DotLottieReact style={{width:"600px", height:"300px"}}
      src="https://lottie.host/22768d1e-9f19-493c-a94e-a745df66d354/4vbK6EdbcH.lottie"
      loop
      autoplay
      />
</div>
  );
};


export default transition(LazyLoading) 