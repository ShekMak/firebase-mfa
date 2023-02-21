import {useEffect, useState} from "react";
import {ApplicationVerifier, RecaptchaVerifier} from "@firebase/auth";
import {auth} from "@/firebase/authentication";

export function useRecaptcha(componentId: string) {
    const [recaptcha, setRecaptcha] = useState<ApplicationVerifier>();

    useEffect(() => {
        const recaptchaVerifier = new RecaptchaVerifier(componentId, {
            "size": "invisible",
            "callback": () => {}
        }, auth);

        setRecaptcha(recaptchaVerifier);

        return () => {
            recaptchaVerifier.clear();
        }
    }, [componentId]);

    return recaptcha;
}