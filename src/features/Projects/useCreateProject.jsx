import { useMutation, useQueryClient } from '@tanstack/react-query'

import { createProject as createProjectFn } from '../../services/AdminApi'
import toast from 'react-hot-toast'

export default function useCreateProject() {
    const queryClient = useQueryClient()
    const mutationFn = (data) => createProjectFn(data)
    const queryKey = ["projects"];
    const { mutate, isLoading } = useMutation(mutationFn, {
        onSuccess: () => {
            toast.success('Project created successfully')
            queryClient.invalidateQueries(queryKey)
        },
        onError: (error) => {
            toast.error('Error creating project')
            console.log(error)
        }
    })
    return { createProject: mutate, isCreating: isLoading }
}