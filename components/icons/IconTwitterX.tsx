interface IconTwitterXProps {
  width: number;
  height: number;
  color: string;
  opacity: number;
}

const IconTwitterX = ({ width, height, color, opacity }: IconTwitterXProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 73 73`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity={opacity}>
        <path
          d="M55.7424 5.79102H66.0034L43.5862 31.4125L69.9583 66.2775H49.3091L33.136 45.132L14.6302 66.2775H4.36302L28.3405 38.8725L3.04163 5.79102H24.215L38.8341 25.1188L55.7424 5.79102ZM52.1411 60.1358H57.8269L21.1255 11.6101H15.0242L52.1411 60.1358Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default IconTwitterX;
