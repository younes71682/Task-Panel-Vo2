import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


 const Tanstackproviders = ({ children }) => {
    

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                // staleTime:10000,
                // gcTime:50000
            }
        }
    })

    return (
         <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default Tanstackproviders