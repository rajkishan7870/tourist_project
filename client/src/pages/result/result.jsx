import React from 'react'

export default function Result({data}) {
  return (
    <div>
        {data.map((obj,index)=>{
            return(
                <div key={index}>
                    <div>{obj.place}-{obj.rating}</div>
                </div>
            )
        })}
    </div>
  )
}
