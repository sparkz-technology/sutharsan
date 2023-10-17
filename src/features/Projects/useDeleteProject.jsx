import { useMutation, useQueryClient } from '@tanstack/react-query'

import { deleteProject as deleteProjectFn } from '../../services/AdminApi'
import toast from 'react-hot-toast'

export default function useDeleteProject() {
    const queryClient = useQueryClient()
    const mutationFn = (id) => deleteProjectFn(id)
    const queryKey = ["projects"];
    const { mutate, isLoading } = useMutation(mutationFn, {
        onSuccess: () => {
            toast.success('Project deleted successfully'),
                queryClient.invalidateQueries(queryKey)
        },
        onError: (error) => {
            toast.error('Error deleting project')
            console.log(error)
        }
    })
    return { deleteProject: mutate, isDeleting: isLoading }
}