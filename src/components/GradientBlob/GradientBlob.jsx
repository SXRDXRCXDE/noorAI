export default function GradientBlob({ width = 635, height = 542, className = "" }) {
    return (
        <svg
            data-aos={`zoom-in`}
            width={width}
            height={height}
            viewBox="0 0 659 585"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M373.625 556.012C312.703 578.46 234.991 603.135 183.832 565.433C131.325 526.736 171.542 438.904 139.232 383.269C106.831 327.477 10.1359 315.303 1.57797 251.605C-6.85021 188.872 45.295 126.801 99.9212 90.6735C150.143 57.4591 217.111 84.5686 275.934 70.1585C339.218 54.656 392.706 -14.8674 454.505 3.81055C515.612 22.2794 522.692 102.543 556.301 154.896C592.102 210.662 669.435 254.947 657.595 320.16C645.673 385.82 555.787 404.039 503.123 447.779C458.756 484.629 428.196 535.903 373.625 556.012Z"
                fill="url(#paint0_linear_13_1656)"
                fillOpacity="0.08"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_13_1656"
                    x1="645.442"
                    y1="232.917"
                    x2="22.852"
                    y2="358.101"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#30BDE0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.32" />
                </linearGradient>
            </defs>
        </svg>
    );
}