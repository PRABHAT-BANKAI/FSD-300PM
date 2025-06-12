import React from 'react'

const Child = ({name,city,country}) => {
  return (
    <div>
      <p>NAME:{name}</p>
      <p>CITY:{city}</p>
      <p>COUNTRY:{country}</p>
    </div>
  )
}

export default Child