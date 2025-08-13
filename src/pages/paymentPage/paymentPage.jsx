// src/app/payment/page.jsx (or wherever your main page file is)
// This file is a Server Component and does not have the "use client" directive.

import Footer from "@/components/Footer/Footer";
import PaymentSectionClient from "@/components/PaymentSectionClient/PaymentSectionClient"; // Import the client component

// The main page component now simply renders the client component.
export default function PaymentPage() {
    return(
        <div className={'w-full min-h-screen h-auto bg-[#000000] relative'}>
            <PaymentSectionClient/>
            <Footer/>
        </div>
    );
}