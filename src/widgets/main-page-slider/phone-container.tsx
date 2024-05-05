import { Phone } from "../../shared/assets/phone.tsx";
import { css, keyframes } from "emotion";

type Props = {
  endPoint: [number, number];
  color?: string;
};

const phoneKeyframes = keyframes`
    from {
      transform: translate(2000px, 0) rotate(0deg) scale(0%);
    } 
  
    10%, 20% { 
        transform: translate(200px, 100px) rotate(360deg) scale(150%);
    }

    30%, to {
        transform: translate(2000px, 0) rotate(0deg) scale(0%);
    }`;

export const PhoneContainer = ({ endPoint, color }: Props) => {
  const phoneStyles = css({
    position: "absolute",
    left: endPoint[0] + "px",
    // display: "none",
    // opacity: 0,
    filter: "drop-shadow( 0px 0px 3px rgba(0, 0, 0, .1))",
    animation: `${phoneKeyframes} 9s ease-in-out infinite`,
  });
  return (
    <div id={"phone"} className={phoneStyles}>
      <Phone mainColor={color} />
    </div>
  );
};
