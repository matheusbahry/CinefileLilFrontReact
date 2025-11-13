
import React from 'react'

export default function Card({item}){
  return (
    <a className='item__link'>
      <article className='item'>
        <img className='item__img' src={item.poster} alt={item.title}/>
        <div className='item__overlay'>
          <div className='item__ovTitle'>{item.title}</div>
          <div className='item__ovMeta'>{item.year}</div>
        </div>
        <div className='item__body'>
          <h3 className='item__title'>{item.title}</h3>
        </div>
      </article>
    </a>
  )
}
