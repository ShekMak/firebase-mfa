import toast from "react-hot-toast";

export function notify(message: string) {
    toast(message, {
        duration: 5000,
        position: "top-right"
    });
}