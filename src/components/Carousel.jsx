
import React from 'react'
import Card from './Card.jsx'

export default function Carousel({items}){
  return (
    <div className='row__scroller'>
      {items.map(i => <Card key={i.id} item={i}/>)}
    </div>
  )
}
