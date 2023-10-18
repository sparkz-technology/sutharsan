import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../../services/AdminApi";

function useGetUserData() {

    const queryKey = ["userData"];
    const queryFn = () => getUserData()
    const { data, isLoading, error } = useQuery({ queryKey, queryFn })
    console.log("Data:", data);
    return { userData: data, isFetching: isLoading, userDataError: error }

}
export default useGetUserData

