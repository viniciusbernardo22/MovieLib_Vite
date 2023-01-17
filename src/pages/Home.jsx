import React from 'react'
import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import './MovieGrid.css'
const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
function Home() {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async url => {
    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)
  }
  useEffect(() => {
    const topRatedUrl = `${moviesUrl}top_rated?api_key=${apiKey}`
    getTopRatedMovies(topRatedUrl)
  }, [])
  return (
    <div className="container">
      <h2 className="title">Melhores Filmes</h2>
      <div className="movies-container">
        {topMovies &&
          topMovies?.map(movie => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  )
}

export default Home
