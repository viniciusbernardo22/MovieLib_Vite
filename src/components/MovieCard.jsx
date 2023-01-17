import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

const imageUrl = import.meta.env.VITE_IMG

function MovieCard({ movie, showLink = true }) {
  console.log(imageUrl)
  return (
    <div className="movie-card">
      <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar />
        {movie.vote_average}
      </p>
      {showLink && (
        <Link to={`/movie/${movie.id}`} className="btn">
          Detalhes
        </Link>
      )}
    </div>
  )
}

export default MovieCard
