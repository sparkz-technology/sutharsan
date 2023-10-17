import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../services/AdminApi";

function useGetProjects() {

    const queryKey = ["projects"];
    const queryFn = () => getProjects()
    const { data, isLoading, error } = useQuery({ queryKey, queryFn })

    return { projects: data, isFetching: isLoading, projectsError: error }

}

export default useGetProjects
