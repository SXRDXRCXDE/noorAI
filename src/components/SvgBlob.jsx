export default function SvgBlob({
                                    width = 880,
                                    height = 444,
                                    ...props
                                }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 1122 572"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g filter="url(#filter0_d_0_4)">
                <path
                    d="M529.829 66.2299C649.158 58.6583 744.047 -10.6273 861.512 2.6971C979.601 16.0923 1092.28 70.6459 1114.9 132.596C1137.85 195.44 994.47 242.322 971.995 305.213C951.024 363.896 1046.89 428.43 990.612 480.401C934.298 532.407 807.251 556.898 693.306 562.585C586.972 567.892 497.98 526.492 395.892 510.082C295.593 493.96 173.234 505.548 98.6722 467.004C23.3474 428.066 -9.17774 365.329 10.7428 310.984C29.532 259.726 157.515 240.675 199.038 193.199C240.576 145.705 165.635 72.6705 246.224 41.7376C325.01 11.4969 432.743 72.3901 529.829 66.2299Z"
                    stroke="#737373"
                    strokeWidth="0.756273"
                    fill="none"
                    shapeRendering="crispEdges"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_0_4"
                    x="0.619703"
                    y="0.622131"
                    width="1121.14"
                    height="570.807"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_4" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_4" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}
