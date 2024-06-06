import "./person-info.css";
import personmock from "./../../assests/personmock.png";
export function PersonInfo(props: any) {
  return (
    <div className="personinfo">
      <img src={props.pic} alt="" />
      <p style={{ paddingLeft: "10px" }}>{props.name}</p>
      <p style={{ paddingLeft: "10px" }}>{props.job}</p>
    </div>
  );
}
