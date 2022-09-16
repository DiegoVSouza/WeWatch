import { createContext, ReactNode, useContext, useEffect, useState } from 'react';


interface MoviesProviderProps {
    children: ReactNode;
}


interface MoviesContextData {
    selectedGenreId: number;
    setSelectedGenreId: React.Dispatch<React.SetStateAction<number>>
}

const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData);

export function MoviesProvider({ children }: MoviesProviderProps): JSX.Element {

    const [selectedGenreId, setSelectedGenreId] = useState(1)

    return (
        <MoviesContext.Provider
            value={{ selectedGenreId, setSelectedGenreId }}
        >
            {children}
        </MoviesContext.Provider>
    );
}

export function useMovies(): MoviesContextData {
    const context = useContext(MoviesContext);

    return context;
}
