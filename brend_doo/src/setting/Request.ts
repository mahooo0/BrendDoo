import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

// Axios Instance
export const axiosInstance = axios.create({
    baseURL: 'https://brendo.avtoicare.az/api',
});
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

export default function GETRequest<T>(
    api: string,
    querykey: string,
    dependencies: any[]
) {
    const { lang = 'ru' } = useParams<{ lang: string }>();
    console.log('request', dependencies);

    const { data, isLoading, isError } = useQuery<T>({
        queryKey: [querykey, ...dependencies],
        queryFn: async () => {
            try {
                const data = await axiosInstance
                    .get<T>(api, {
                        headers: {
                            'Accept-Language': lang,
                        },
                    })
                    .then((res) => res.data);
                return data;
            } catch (error) {
                toast.error('Error occurred');
                console.log(error, `querykey: ${querykey}`);
                throw error;
            }
        },
        staleTime: 1000 * 60 * 60,
    });

    return { data, isLoading, isError };
}

// API Helper Methods
