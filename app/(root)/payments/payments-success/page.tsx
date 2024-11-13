"use client";
import { Suspense } from "react";
import { Button } from "@nextui-org/react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function PaymentSuccessContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const amount = searchParams.get("amount");
    const type = searchParams.get("type");

    // Redirect if `amount` or `type` is missing
    useEffect(() => {
        if (!amount || !type) {
            router.push("/protected/private/");
        }
    }, [amount, type, router]);

    const handleBack = () => {
        router.push("/protected/private");
    };

    return (
        <div className={`flex flex-col items-center justify-center text-center w-full h-screen overflow-scroll sm:overflow-hidden ${
            type === "0"
                ? "bg-gradient-to-tl from-yellow-400 via-amber-400 to-orange-400"
                : type === "1"
                ? "bg-gradient-to-tl from-cyan-400 via-sky-400 to-blue-400"
                : type === "2"
                ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
                : ""
        }`}>
            <form className="bg-white p-5 border rounded-md text-black">
                <div className="flex flex-col">
                    <span className="font-bold font-poppins text-4xl m-2 text-black">Thank You!</span>
                    <span className="font-roboto">You successfully sent</span>
                </div>
                
                <div className="flex flex-col mt-10">
                    <span className={`text-6xl font-poppins font-extrabold inline-block text-transparent bg-clip-text ${
                        type === "0"
                            ? "bg-gradient-to-tl from-yellow-400 via-amber-400 to-orange-400"
                            : type === "1"
                            ? "bg-gradient-to-tl from-cyan-400 via-sky-400 to-blue-400"
                            : type === "2"
                            ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
                            : ""
                    }`}>
                        ${amount}
                    </span>
                </div>
                <div className="mt-10">
                    <Button radius="full" variant="bordered" onClick={handleBack}>
                        <IoMdArrowRoundBack className="font-bold text-xl text-black" />
                        <span className="font-roboto font-bold text-black">Back</span>
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default function PaymentSuccess() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PaymentSuccessContent />
        </Suspense>
    );
}
