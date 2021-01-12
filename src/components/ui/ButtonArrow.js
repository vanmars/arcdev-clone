import React from 'react'

const ButtonArrow = (props) => {
  return ( 
    <svg
      className={props.class}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill={props.fill}
      viewBox="0 0 18 18"
    >
      <path d="M9 3L7.94 4.0614.19 4.19H3v1.5h9.131-4.19 4.19L9 1516-6z" />
    </svg>
   );
}
 
export default ButtonArrow;