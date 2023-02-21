import {useRouter} from "next/router";
import {Input} from "@/components/Input";

type Props ={
    getCode: (code: string) => void
}

export function Code({getCode}: Props) {
    const router = useRouter();
    let code = new Array<string>(6).fill('');

    function handleClick() {
        const finalCode = code.reduce((previousValue, currentValue) => {
            return previousValue.concat(currentValue);
        })
        getCode(finalCode);
    }

    return (
        <div className="bg-white flex flex-col p-5 md:p-6  border-2 border-palladium rounded-xl w-full sm:max-w-[440px]">
            <div className="flex justify-between">
                <div>
                    <h1 className='font-medium text-[22px] leading-[130%] md:mr-8'>Verify your phone</h1>
                    <p className='text-slate-500 mt-2 text-base'>We sent you an SMS code to your phone number</p>
                </div>
            </div>
            <div className='flex gap-x-4 mt-6 md:mt-8 pb-4'>
                {
                    code.map((value, index) => {
                        return (
                            <Input
                                key={index}
                                index={index}
                                getValue={(value, index) => {
                                    code[index] = value;
                                }}
                            />
                        )
                    })
                }
            </div>
            <div className="flex mt-4 gap-x-4">
                <button
                    onClick={() => void router.push('/user')}
                    className='rounded-xl flex gap-x-4 mb-8 text-black h-11 w-1/2 items-center justify-center px-6 border border-gray-500'>
                    Cancel
                </button>
                <button
                    onClick={handleClick}
                    className="bg-black rounded-xl flex h-11 w-1/2 items-center justify-center px-6">
                    <span
                        className="text-base font-light text-white">
                        Submit
                    </span>
                </button>
            </div>
        </div>
    )
}