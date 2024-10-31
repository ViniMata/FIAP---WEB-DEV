import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"

export default function Favoritos() {

    const [favoritos, setFavorito] = useState([])

    useEffect(() => {
        const favoritados = JSON.parse(localStorage.getItem("favoritos"))
        setFavoritos(favoritados)
    }, [])

    return (
        <>
            {
                favoritos.map(filme => (
                    <MovieCard key={filme.id} {...filme} />
                ))
            }
        </>
    )
}