import {Chat} from "phosphor-react";
import {useRouter} from "next/router";
import {useRef} from "react";

type Props = {
    getPhoneNumber: (phoneNumber: string) => void
}

export function PhoneRegistration({getPhoneNumber}: Props) {
    const router = useRouter();
    const phoneNumber = useRef<HTMLInputElement>(null);

    function handleClick() {
        if (phoneNumber.current) {
            getPhoneNumber(phoneNumber.current.value);
        }
    }

    return (
        <div className='flex sm:justify-center items-center px-4 sm:px-0'>
            <div className="bg-white flex flex-col p-5 md:p-6  border-2 shadow-md shadow-gray-100/10  border-palladium rounded-xl w-full sm:max-w-[440px]">
                <div className="flex flex-col justify-between">
                    <h1 className='font-medium text-[22px] leading-[130%] md:mr-8'>Provide your phone</h1>
                    <p className='text-slate-500 mt-2 text-base'>Fill in your phone number to receive the code</p>
                </div>
                <div className="space-y-4 my-6">
                    <div className="relative flex items-center">
                        <Chat weight='fill' className='w-6 h-6 absolute left-4 inset-y-0 my-auto'/>
                        <input
                            ref={phoneNumber}
                            type="text"
                            name="password"
                            id="password"
                            placeholder="Insert your phone number"
                            className="focus:outline-none block w-full rounded-xl placeholder-gray-500 bg-gray-100 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-black"
                        />
                    </div>
                </div>
                <div className="flex justify-between mt-4 gap-x-4">
                    <button
                        onClick={() => void router.push('/user')}
                        className='rounded-xl flex gap-x-4 mb-8 text-black h-11 w-1/2 items-center justify-center px-6 border border-gray-500'>Cancel</button>
                    <button
                        onClick={handleClick}
                        className="bg-black rounded-xl flex h-11 w-1/2 items-center justify-center px-6">
                        <span
                            className="text-base font-light text-white">
                            Send SMS
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}