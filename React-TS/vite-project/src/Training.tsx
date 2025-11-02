import React from 'react'


interface myPropes {
    name:string,
    age?:number
}

// export default function Training({name,age}:{name:string,age:number}) {
// {name,age} required Propes shold do pass  when use component

// {name,age=10} defult value
export default function Training({name,age=10}:myPropes) {
  return (
    <div>
        {name} -{age}
    </div>
  )
}
