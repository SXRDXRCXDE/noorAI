
import PaymentPage from "@/pages/paymentPage/paymentPage";
import AOSWrapper from "@/app/context/AOSWrapper";


export default function Page() {
    return <AOSWrapper><PaymentPage /></AOSWrapper>;
}