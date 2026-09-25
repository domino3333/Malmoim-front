const PersonAvatarIcon = ({ size = 40, color, className, style, ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ ...style, ...(color ? { color } : {}) }}
        aria-hidden="true"
        focusable="false"
        {...props}
    >
        <circle cx="24" cy="24" r="24" fill="currentColor" fillOpacity="0.14" />
        <circle cx="24" cy="18" r="6" fill="currentColor" />
        <path d="M12 37.5c0-6.7 5.4-11 12-11s12 4.3 12 11V39H12v-1.5Z" fill="currentColor" />
    </svg>
);

export default PersonAvatarIcon;
