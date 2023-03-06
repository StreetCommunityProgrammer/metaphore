import useSWR from 'swr';
import { getAllCollectionOf } from "../services/CollectionService";

const useCollectionOf = (language) => {
    const fetcher = async () => {
        const data = getAllCollectionOf(language)
        return data
    }
    const { data, error, isLoading } = useSWR(`/story/${language}`, fetcher)
    return {
        collections: data,
        isLoading,
        isError: error
    }
}

export default useCollectionOf
