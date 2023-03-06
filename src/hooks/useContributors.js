import { useEffect, useState } from "react";
import { getAllContributors } from '../services/ConstributorService';

const useContributors = () => {
    const [totalContributors, setTotalContributors] = useState(0)
    const [contributors, setContributors] = useState([])

    useEffect(() => {
        const contributors = async () => {
            const data = await getAllContributors()
            setTotalContributors(data.total_contributors)
            setContributors(data.contributors)
        }
        contributors()
    }, [])

    return [totalContributors, contributors]
}

export default useContributors
