import React ,{Component} from 'react'
import Lottie from 'react-lottie'
import animationData from '../tech.json'

class  Welcome extends Component{
  render(){
          const defaultOptions ={
            loop: true,
            autoplay: true,
            animationData: animationData,
            renderer: 'svg'
          }
  
  return (
    <div>
 <Lottie
  options={defaultOptions}
  // height={500}
  // width={500}
  className="w-44 h-44"
  />
  </div>
  )
};
}

export default Welcome












// import React, { Component } from 'react';
// import Lottie from 'react-lottie';
// import animationData from '../animations/data.json'
// class AnimationPage extends Component {
//     render() {
//         const defaultOptions = {
//             loop: true,
//             autoplay: true,
//             animationData: animationData,
//             renderer: 'svg'
//         }
//         return (
//             <div>
//                <Lottie
//                 options={defaultOptions}
//                 height={500}
//                 width={500}
//                />
//             </div>
//         )
//     };  
// }
// export default AnimationPage;
