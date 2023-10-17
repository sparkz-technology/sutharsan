import { useMutation, useQueryClient } from '@tanstack/react-query'

import { createSkill as createSkillFn } from '../../services/AdminApi'
import toast from 'react-hot-toast'

export default function useCreateSkill() {
    const queryClient = useQueryClient()
    const mutationFn = (data) => createSkillFn(data)
    const queryKey = ["skills"];
    const { mutate, isLoading } = useMutation(mutationFn, {
        onSuccess: () => {
            toast.success('Skill created successfully')
            queryClient.invalidateQueries(queryKey)
        },
        onError: (error) => {
            toast.error('Error creating skill')
            console.log(error)
        }
    })
    return { createSkill: mutate, isCreating: isLoading }
}