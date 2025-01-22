export default function TabButton(props) {
  return (
    <button
      className={props.isSelected == true ? "active" : ""}
      onClick={props.onSelect}
    >
      {props.children}
    </button>
  );
}
