import { useMutation } from '@tanstack/react-query'
import { sendMail } from '../../services/PublicApi'
import toast from 'react-hot-toast'

export default function useSendMsg(handleShow) {
    const mutationFn = (data) => sendMail(data)
    const { mutate, isLoading } = useMutation(mutationFn, {
        onSuccess: () => {
            toast.success('Message sent successfully')
        },
        onError: (error) => {
            toast.error('Error sending message')
            console.log(error)
        },
        onSettled: () => {
            handleShow(false)
        }
    })
    return { sendMsg: mutate, isSend: isLoading }
}

