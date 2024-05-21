import { css, keyframes } from "emotion";
import { Laptop } from "../../shared/assets/laptop.tsx";

type Props = {
  endPoint: [number, number];
  color?: string;
};

const laptopKeyframes = keyframes`
    from, 35% {
        transform: translate(2000px, 0) rotate(0deg) scale(0%);
    }
    
    40%, 55% {
        transform: translate(400px, 150px) rotate(360deg) scale(120%);
    }

    60%, to {
        transform: translate(2000px, 0) rotate(0deg) scale(0%);
    }`;

export const LaptopContainer = ({ endPoint, color }: Props) => {
  const laptopStyles = css({
    position: "absolute",
    left: endPoint[0] + "px",
    animation: `${laptopKeyframes} 9s ease-in-out infinite`,
  });
  return (
    <div id={"laptop"} className={laptopStyles}>
      <Laptop mainColor={color} />
    </div>
  );
};
