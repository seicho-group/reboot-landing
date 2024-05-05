type Props = {
  mainColor?: string;
};

export const Phone = ({ mainColor }: Props) => {
  return (
    <svg
      width="101"
      height="140"
      viewBox="0 0 101 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="65.2236"
        height="130.181"
        rx="11.09"
        transform="matrix(0.929524 0.368762 -0.353766 0.935334 43.0537 -3)"
        fill="#A2B3C3"
      />
      <rect
        width="27.7804"
        height="27.1374"
        rx="9.24167"
        transform="matrix(0.929524 0.368762 -0.353766 0.935334 44.5879 0.346283)"
        fill="#AFC1CF"
      />
      <ellipse
        cx="6.44183"
        cy="6.29273"
        rx="6.44183"
        ry="6.29273"
        transform="matrix(0.929524 0.368762 -0.353766 0.935334 52.4355 17.3463)"
        fill="#313332"
      />
      <ellipse
        cx="6.44183"
        cy="6.29273"
        rx="6.44183"
        ry="6.29273"
        transform="matrix(0.929524 0.368762 -0.353766 0.935334 45.0635 2.30603)"
        fill="#2E2E2E"
      />
      <ellipse
        cx="2.61699"
        cy="2.55642"
        rx="2.61699"
        ry="2.55642"
        transform="matrix(0.929524 0.368762 -0.353766 0.935334 59.9844 10.5995)"
        fill="#C6C8C7"
      />
      <ellipse
        cx="1.00654"
        cy="0.983239"
        rx="1.00654"
        ry="0.983239"
        transform="matrix(0.929524 0.368762 -0.353766 0.935334 42.6807 20.4153)"
        fill="#6B6C6D"
      />
      <rect
        width="65.2236"
        height="130.181"
        rx="11.09"
        transform="matrix(0.929524 0.368762 -0.353766 0.935334 43.0537 -3)"
        fill={mainColor || "#313131"}
      />
      <rect
        width="27.7804"
        height="27.1374"
        rx="9.24167"
        transform="matrix(0.929524 0.368762 -0.353766 0.935334 44.5879 0.346283)"
        fill="white"
        opacity={0.4}
      />
      <ellipse
        cx="6.44183"
        cy="6.29273"
        rx="6.44183"
        ry="6.29273"
        transform="matrix(0.929524 0.368762 -0.353766 0.935334 52.4355 17.3463)"
        fill="#313332"
      />
      <ellipse
        cx="6.44183"
        cy="6.29273"
        rx="6.44183"
        ry="6.29273"
        transform="matrix(0.929524 0.368762 -0.353766 0.935334 45.0635 2.30603)"
        fill="#2E2E2E"
      />
      <ellipse
        cx="2.61699"
        cy="2.55642"
        rx="2.61699"
        ry="2.55642"
        transform="matrix(0.929524 0.368762 -0.353766 0.935334 59.9844 10.5995)"
        fill="#C6C8C7"
      />
      <ellipse
        cx="1.00654"
        cy="0.983239"
        rx="1.00654"
        ry="0.983239"
        transform="matrix(0.929524 0.368762 -0.353766 0.935334 42.6807 20.4153)"
        fill="#6B6C6D"
      />
    </svg>
  );
};
