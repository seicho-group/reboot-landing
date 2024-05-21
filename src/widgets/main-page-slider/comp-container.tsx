import { css, keyframes } from "emotion";
import { Comp } from "../../shared/assets/comp.tsx";

type Props = {
  endPoint: [number, number];
  color?: string;
};

const compKeyframes = keyframes`
    from, 65% {
        transform: translate(2000px, 0)scale(0%);
    }
    
    70%, 85% {
        transform: translate(300px, 100px) scale(150%);
    }

    95%, to {
        transform: translate(2000px, 0) scale(0%);
    }`;

export const CompContainer = ({ endPoint, color }: Props) => {
  const laptopStyles = css({
    position: "absolute",
    left: endPoint[0] + "px",
    animation: `${compKeyframes} 9s ease-in-out infinite`,
  });
  return (
    <div id={"laptop"} className={laptopStyles}>
      <Comp mainColor={color} />
    </div>
  );
};
