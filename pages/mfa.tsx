import {useCurrentUser} from "@/hooks/useCurrentUser";
import {useRouter} from "next/router";
import {Loading} from "@/components/Loading";
import {CreateMultiFactorAuthentication} from "@/components/CreateMultiFactorAuthentication";

export default function MFAPage() {
    const currentUser = useCurrentUser();
    const router = useRouter();

    if (currentUser === 'loading') {
        return <Loading />
    }

    if (!currentUser) {
        void router.push('/login');
    }

    return <CreateMultiFactorAuthentication currentUser={currentUser} />
}