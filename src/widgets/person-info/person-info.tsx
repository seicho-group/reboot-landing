import "./person-info.css";

type TProps = {
  name: string;
  job: string;
  pic: string;
};

export function PersonInfo(props: TProps) {
  return (
    <div className="personinfo">
      <img src={props.pic} alt="" />
      <p style={{ paddingLeft: "10px" }}>{props.name}</p>
      <p style={{ paddingLeft: "10px" }}>{props.job}</p>
    </div>
  );
}
