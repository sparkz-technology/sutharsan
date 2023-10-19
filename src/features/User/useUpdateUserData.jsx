import { useMutation, useQueryClient } from '@tanstack/react-query'

import { updateUserData as updateUserDataFn } from '../../services/AdminApi'
import toast from 'react-hot-toast'


function useUpdateUserData() {
    const queryClient = useQueryClient()
    const mutationFn = (data) => updateUserDataFn(data)
    const queryKey = ["userData"];

    const { mutate, isLoading } = useMutation(mutationFn, {
        onSuccess: () => {
            toast.success('User updated successfully')
            queryClient.invalidateQueries(queryKey)
        },
        onError: (error) => {
            toast.error('Error updating user')
            console.log(error)
        }
    })

    return { updateUserData: mutate, isUpdate: isLoading }
}

export default useUpdateUserData;
