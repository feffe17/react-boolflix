import { MovieContext } from "../Context/MovieContext";
import { useState, useEffect } from "react";
export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMovies = async (url) => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.Response === "True") {
                setMovies(data.Search);
            } else {
                setMovies([]);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
}

export default function PostDetail() {
    return (
        <>
        </>
    )
}