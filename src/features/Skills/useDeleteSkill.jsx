import { useMutation, useQueryClient } from '@tanstack/react-query'

import { deleteSkill as deleteSkillFn } from '../../services/AdminApi'
import toast from 'react-hot-toast'

export default function useDeleteSkill() {
    const queryClient = useQueryClient()
    const mutationFn = (id) => deleteSkillFn(id)
    const queryKey = ["skills"];
    const { mutate, isLoading } = useMutation(mutationFn, {
        onSuccess: () => {
            toast.success('Skill deleted successfully'),
                queryClient.invalidateQueries(queryKey)
        },
        onError: (error) => {
            toast.error('Error deleting skill')
            console.log(error)
        }
    })
    return { deleteSkill: mutate, isDeleting: isLoading }
}