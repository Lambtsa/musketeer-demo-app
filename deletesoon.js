import React from 'react';






const Nav = ({ left, right }) => {
  return (
    <div className="fancy-nav">
      <div className="left">
        {left}
      </div>
      <div className="right">
        {right}
      </div>
    </div>
  )
}