import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


const useParticipant = () => {
    const { user, loading } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data: isParticipant, isPending: isParticipantLoading } = useQuery({
        queryKey: [user?.email, 'isParticipant'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking is participant', user)
            const res = await axiosPublic.get(`/users/participant/${user.email}`);
            console.log(res.data);
            return res.data?.participant;
        }
    })
    return [isParticipant, isParticipantLoading]
};

export default useParticipant;