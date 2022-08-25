import {React, Component} from 'react'
import animationDataa from "../skilo.json";
import Lottie from 'react-lottie'

class  Skills1 extends Component{
  render(){
          const defaultOptions ={
            loop: true,
            autoplay: true,
            animationData: animationDataa,
            renderer: 'svg'
          }
  
  return (
    <div>
 <Lottie
  options={defaultOptions}
  // height={500}
  // width={500}
  
  />
  </div>
  )
};
}

export default Skills1
