import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


const useHealthPro = () => {
    const { user, loading } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data: isHealthPro, isPending: isHealthProLoading } = useQuery({
        queryKey: [user?.email, 'isHealthPro'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking is healthpro', user)
            const res = await axiosPublic.get(`/users/healthpro/${user.email}`);
            console.log(res.data);
            return res.data?.healthpro;
        }
    })
    return [isHealthPro, isHealthProLoading]
};

export default useHealthPro;