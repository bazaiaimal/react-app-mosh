import useData from "./useData";

interface PlatformAPiProps {
    id: number;
    name: string;
    slug: string;
}


const usePlatforms = () => useData<PlatformAPiProps>('/platforms/lists/parents');

export default usePlatforms;
