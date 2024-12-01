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
                    className='col-lg-4 col-md-6 col-12 mt-3 mb-5'
                    ky={movie.id}>
                    <div
                        className={style.ImgBox}
                    >
                        <img
                            className={style.img}
                            src={getPosterUrl(movie.poster_path)}
                            alt={movie.title}
                        />
                        <div className={style.layer}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="#ffffff" class="" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                            </svg>
                        </div>

                    </div>
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
