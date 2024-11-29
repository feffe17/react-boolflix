export const getPosterUrl = (posterPath, size = "w342") => {
    if (!posterPath) {
        return "https://via.placeholder.com/342x500?text=Nessuna+immagine";
    }
    return `https://image.tmdb.org/t/p/${size}${posterPath}`;
};
