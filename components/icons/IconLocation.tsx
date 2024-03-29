interface IconLocationProps {
  width: number;
  height: number;
  color: string;
}

const IconLocation = ({ width, height, color }: IconLocationProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 47 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5 0C10.5216 0 0 10.4629 0 23.369C0 46.3588 23.5 55 23.5 55C23.5 55 47 46.3588 47 23.369C47.0009 10.4629 36.4793 0 23.5 0ZM23.5 34.5064C17.3143 34.5064 12.3002 29.5202 12.3002 23.369C12.3002 17.2178 17.3143 12.2317 23.5 12.2317C29.6857 12.2317 34.6998 17.2178 34.6998 23.369C34.6998 29.5202 29.6857 34.5064 23.5 34.5064Z"
        fill={color}
      />
    </svg>
  );
};

export default IconLocation;
