import {Login} from "@/components/Login";
import {login, signInWithGoogle, verifyUserMFA} from "@/firebase/authentication";
import {useRouter} from "next/router";
import {notify} from "@/utils/notify";
import {useRecaptcha} from "@/hooks/useRecaptcha";
import {useState} from "react";
import {MultiFactorResolver} from "@firebase/auth";
import {CodeSignIn} from "@/components/CodeSignIn";

export default function LoginPage() {
    const router = useRouter();
    const recaptcha = useRecaptcha('sign-in');
    const [verificationId, setVerificationId] = useState<string>();
    const [resolver, setResolver] = useState<MultiFactorResolver>();

    async function loginWithGoogle() {
        const response = await signInWithGoogle();

        if (response === true) {
            await router.push('/user');
        }else {
            await handleMFA(response);
        }
    }

    async function loginWithEmailAndPassword(email: string, password: string) {
        const response = await login(email, password);

        if (response === true) {
            await router.push('/user');
        }else {
            await handleMFA(response);
        }
    }

    async function handleMFA(response: any) {
        if (response.code === 'auth/multi-factor-auth-required' && recaptcha) {
            const data = await verifyUserMFA(
                response,
                recaptcha,
                0
            )

            if (!data) {
                notify('Something went wrong.');
            }else {
                const {verificationId, resolver} = data;
                setVerificationId(verificationId);
                setResolver(resolver);
            }
        }else {
            notify('Something went wrong');
        }
    }

    return (
        <>
            {
                !verificationId &&
                !resolver &&
                <Login
                    loginWithGoogle={loginWithGoogle}
                    loginWithEmailAndPassword={loginWithEmailAndPassword}
                />
            }
            {
                verificationId &&
                resolver &&
                <CodeSignIn
                    verificationId={verificationId}
                    resolver={resolver}
                />
            }
            <div id='sign-in'></div>
        </>
    )
}