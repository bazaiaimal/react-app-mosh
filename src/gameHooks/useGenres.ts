import genresData from '../data/genres';

export interface GenresProps {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ( { data: genresData, isLoading: false, error: null });

export default useGenres;