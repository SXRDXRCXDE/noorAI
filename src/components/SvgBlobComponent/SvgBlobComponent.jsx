export default function SvgBlobComponent({ width = 615, height = 581, className = "" }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 615 581"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M596.184 425.888C572.597 487.257 539.099 563.032 470.583 578.759C400.261 594.9 352.945 508.161 282.264 497.944C211.383 487.699 132.773 554.835 71.8808 521.129C11.9117 487.934 -4.81238 408.271 2.55732 343.115C9.33279 283.212 79.863 248.541 108.895 193.887C140.127 135.088 117.932 49.6675 177.558 13.6593C236.517 -21.9459 310.636 23.3933 379.406 30.5257C452.659 38.123 545.286 6.3037 593.111 56.7578C641.264 107.558 593.629 188.668 594.199 257.126C594.679 314.799 617.311 370.917 596.184 425.888Z"
                fill="url(#paint0_linear_13_2414)"
                fillOpacity="0.08"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_13_2414"
                    x1="509.406"
                    y1="10.927"
                    x2="230.473"
                    y2="596.79"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#30BDE0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.32" />
                </linearGradient>
            </defs>
        </svg>
    );
}