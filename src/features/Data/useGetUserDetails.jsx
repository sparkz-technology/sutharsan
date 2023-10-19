import { useQuery } from "@tanstack/react-query";
import { getuserDetails } from "../../services/PublicApi";

function useGetUserDetails() {

    const queryKey = ["userDetails"];
    const queryFn = () => getuserDetails()
    const { data, isLoading, error } = useQuery({ queryKey, queryFn })

    return { userDetails: data, isFetching: isLoading, userDetailsError: error }

}

export default useGetUserDetails
