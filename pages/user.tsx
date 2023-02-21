import {UserComponent} from "@/components/User";
import {useCurrentUser} from "@/hooks/useCurrentUser";
import {Loading} from "@/components/Loading";
import {useRouter} from "next/router";

export default function UserPage() {
    const currentUser = useCurrentUser();
    const router = useRouter();

    if (currentUser === 'loading') {
        return <Loading />
    }

    if (!currentUser) {
        void router.push('login');
    }

    return <UserComponent currentUser={currentUser} />
}