import { useMutation, useQueryClient } from '@tanstack/react-query'

import { updateSkill as updateSkillFn } from '../../services/AdminApi'
import toast from 'react-hot-toast'

export default function useUpdateSkill() {
    const queryClient = useQueryClient()
    const mutationFn = (data) => updateSkillFn(data) // "id" should be replaced with the actual id of the skill to be updated
    const queryKey = ["skills"];
    const { mutate, isLoading } = useMutation(mutationFn, {
        onSuccess: () => {
            toast.success('Skill updated successfully')
            queryClient.invalidateQueries(queryKey)
        },
        onError: (error) => {
            toast.error('Error updating skill')
            console.log(error)
        }
    })
    return { updateSkill: mutate, isUpdate: isLoading }
}