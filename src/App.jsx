
import React from 'react'
import DATA from './data.js'
import Carousel from './components/Carousel.jsx'

export default function App(){
  const featured = DATA.slice(0,12)
  const movies = DATA.filter(x=>x.type==='movie')
  const series = DATA.filter(x=>x.type==='series')

  return (
    <div className='home'>
      <header className='nav'>
        <div className='nav__container'>
          <div className='nav__brand'>CINEFILE</div>
        </div>
      </header>

      <section className='row'>
        <h2 className='row__title'>Em Alta</h2>
        <Carousel items={featured}/>
      </section>

      <section className='row'>
        <h2 className='row__title'>Filmes</h2>
        <Carousel items={movies}/>
      </section>

      <section className='row'>
        <h2 className='row__title'>Séries</h2>
        <Carousel items={series}/>
      </section>
    </div>
  )
}
