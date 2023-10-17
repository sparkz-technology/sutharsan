import { useQuery } from "@tanstack/react-query";
import { getSkills } from "../../services/AdminApi";

function useGetSkills() {

    const queryKey = ["skills"];
    const queryFn = () => getSkills()
    const { data, isLoading, error } = useQuery({ queryKey, queryFn })

    return { skills: data, isFetching: isLoading, skillsError: error }

}

export default useGetSkills
