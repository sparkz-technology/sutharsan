import { useMutation, useQueryClient } from '@tanstack/react-query'

import { updateProject as updateProjectFn } from '../../services/AdminApi'
import toast from 'react-hot-toast'

export default function useUpdateProject() {
    const queryClient = useQueryClient()
    const mutationFn = (data) => updateProjectFn(data) // "id" should be replaced with the actual id of the skill to be updated
    const queryKey = ["projects"];
    const { mutate, isLoading } = useMutation(mutationFn, {
        onSuccess: () => {
            toast.success('Project updated successfully')
            queryClient.invalidateQueries(queryKey)
        },
        onError: (error) => {
            toast.error('Error updating project')
            console.log(error)
        }
    })
    return { updateProject: mutate, isUpdate: isLoading }
}