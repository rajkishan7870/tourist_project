import React from 'react'

export default function Result({data}) {
  return (
    <div>
        {data.map((obj)=>{
            return(
                <div>
                    <div>{obj.place}</div>
                </div>
            )
        })}
    </div>
  )
}
