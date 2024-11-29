import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { MovieContext } from '../Context/MovieContext';
import { getFlag } from "../Utility/getFlag";
import { getPosterUrl } from '../Utility/getPosterUrl';
import { getStarRating } from '../Utility/getStarRating';
import style from './MovieList.module.css'

const MovieList = () => {
    const { movies } = useContext(MovieContext);

    return (
        <div className='row'>
            {movies.map((movie) => (
                <div
                    className='col-lg-4 col-md-6 col-12 mt-3 mb-3'
                    ky={movie.id}>
                    <img
                        className='w-100'
                        src={getPosterUrl(movie.poster_path)}
                        alt={movie.title}
                    />
                    <div className="bg-dark text-light p-2 mt-2 rounded">

                        <h2>{movie.title}</h2>
                        <h3>{movie.original_title}</h3>
                        <p>Lingua: {movie.original_language}
                            <img
                                src={getFlag(movie.original_language)}
                                alt={movie.original_language}
                                style={{ width: '20px', marginLeft: '5px' }}
                            />
                        </p>
                        <div>
                            {Array.from({ length: 5 }, (_, index) => (
                                <FontAwesomeIcon
                                    key={index}
                                    icon={index < getStarRating(movie.vote_average) ? solidStar : regularStar}
                                    style={{ color: index < getStarRating(movie.vote_average) ? "#ffc107" : "#ddd" }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default MovieList;
