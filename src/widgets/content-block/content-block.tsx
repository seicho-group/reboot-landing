import "./content-block.css";
export function ContentBlockName(props: any) {
  return (
    <div
      style={{
        margin: "60px 20px 20px 20px",
        height: "30px",
        fontSize: "20px",
        fontWeight: "500",
      }}
    >
      {props.header}
    </div>
  );
}
