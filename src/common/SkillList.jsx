import React from 'react'

function SkillList({src,skill}) {
  return (
    <span>
        <img src={src} alt="Checkmark icon" style={{width:"45px"}}/>
        <p>{skill}</p>
    </span>
  )
}

export default SkillList