const FacebookIcon = ({ width = '12', height = '23', fill = 'currentColor', ...props }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 12 23"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M3.62202 22.201V12.3489H0.237305V8.50938H3.62202V5.67783C3.62202 2.39183 5.67094 0.602539 8.66354 0.602539C10.097 0.602539 11.329 0.70708 11.6881 0.753807V4.18787L9.61255 4.18879C7.985 4.18879 7.66987 4.94634 7.66987 6.058V8.50938H11.5514L11.046 12.3489H7.66986V22.201H3.62202Z" />
        </svg>
    );
};

export default FacebookIcon;