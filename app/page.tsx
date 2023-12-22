import Image from 'next/image'
import data from './data.json'

export default function Home() {
  return (
    <>
    {
      data.places.map(item=>
        <>
        <a href={`place/${item.name.split(' ').join('-')}`}>{item.name}</a>
          <br/>
        </>)
    }
    </>    
  )
}
