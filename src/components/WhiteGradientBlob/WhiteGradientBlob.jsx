export default function WhiteGradientBlob({ width = 438, height = 442, className = "" }) {
    return (
        <svg
            data-aos={`zoom-in`}
            width={width}
            height={height}
            viewBox="0 0 438 442"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M313.906 408.743C278.336 422.394 245.052 441.967 206.934 441.886C165.842 441.798 125.553 430.368 90.8429 408.265C53.0731 384.215 11.4802 355.005 1.7981 311.26C-7.80629 267.867 33.5852 230.712 41.8888 187.087C51.1559 138.4 14.8865 73.2649 53.086 41.8081C91.9839 9.77607 150.672 63.5934 200.554 56.428C248.571 49.5304 284.429 -6.98016 332.186 1.71624C379.898 10.4044 425.071 52.1004 436.304 99.3571C447.634 147.023 389.432 185.741 387.56 234.677C385.884 278.499 443.5 317.296 426.426 357.647C410.023 396.411 353.159 393.678 313.906 408.743Z"
                fill="url(#paint0_linear_13_1683)"
                fillOpacity="0.5"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_13_1683"
                    x1="215.321"
                    y1="461.614"
                    x2="220.323"
                    y2="5.3629"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0.16" />
                    <stop offset="1" stopColor="white" stopOpacity="0.13" />
                </linearGradient>
            </defs>
        </svg>
    );
}