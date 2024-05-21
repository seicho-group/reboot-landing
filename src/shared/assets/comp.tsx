type TProps = {
  mainColor?: string;
};

export const Comp = ({ mainColor }: TProps) => {
  return (
    <svg
      width="125"
      height="141"
      viewBox="0 0 125 141"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.0869 33.2517L70.9718 0.685989L66.5931 140.663H0.0996094L5.0869 33.2517Z"
        fill={mainColor}
      />
      <path
        d="M70.7217 0.601196L122.459 17.2608L124.599 140.662H66.5938L70.7217 0.601196Z"
        fill={mainColor}
      />
      <path
        d="M118 36.5C118 44.5 116.502 52.3373 102.501 50.5C88.4999 48.6628 86.4995 38.5 86.4995 31C86.4996 23.5 93 19 102.502 21C113.264 23.2654 118 28.5 118 36.5Z"
        fill="#2E2E2E"
      />
    </svg>
  );
};
