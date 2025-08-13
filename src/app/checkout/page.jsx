import Checkout from "@/pages/checkout/checkout";
import AOSWrapper from "@/app/context/AOSWrapper";


export default function Page() {
    return <AOSWrapper><Checkout /></AOSWrapper>;
}