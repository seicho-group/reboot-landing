import arrow from "./../../../assests/arrow.svg";
import "./fast-action-panel.css";
export const FastActionsPanel = (props: any) => {
  return (
    <div style={{ backgroundColor: `${props.color}` }} className="fastaction">
      <p>{props.header}</p>
      <p style={{ fontSize: "12px" }}>{props.discription}</p>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};
