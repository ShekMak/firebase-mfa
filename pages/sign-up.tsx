import {SignUp} from "@/components/SignUp";
import {useCurrentUser} from "@/hooks/useCurrentUser";
import {useRouter} from "next/router";
import {Loading} from "@/components/Loading";

export default function SignUpPage() {
    const currentUser = useCurrentUser();
    const router = useRouter();

    if (currentUser === 'loading') {
        return <Loading />
    }

    if (currentUser) {
        void router.push('/user');
    }

    return (
        <SignUp />
    )
}