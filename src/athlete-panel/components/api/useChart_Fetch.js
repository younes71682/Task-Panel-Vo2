import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useChartFetch = () => {
    const { data: data_Chart, isLoading: pending_show_Chart } = useQuery({
        queryKey: ['chart'],
        queryFn: async () => {
            const response = await axios.get('https://vo2.ir/api/getChartsData', {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            return response.data;
        },
    })

 
    return {
        data_Chart,
        pending_show_Chart,
    }
}

export default useChartFetch
