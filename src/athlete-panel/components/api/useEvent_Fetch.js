import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useEvent_Fetch = () => {
    const { data: data_ShowList, isPending: pending_show_list } = useQuery({
        queryKey: ['listFutureCompetitions'],
        queryFn: async () => {
            const response = await axios.get('https://vo2.ir/getEvents', {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            return response;
        },
    })
    return {
        data_ShowList,
        pending_show_list
    }

}

export default useEvent_Fetch
