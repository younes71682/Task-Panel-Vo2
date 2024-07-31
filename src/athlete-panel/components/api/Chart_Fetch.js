import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const Chart_Fetch = () => {

    const { data: data_Chart, isPending: pending_show_Chart } = useQuery({
        queryKey: ['chart'],
        queryFn: async () => {
            const response = await axios.get('https://documenter.getpostman.com', {
                // headers: {},
            })
            console.log('data',data_Chart)
            return response
        },

    })

    return (
        data_Chart,
        pending_show_Chart
    )
}

export default Chart_Fetch
