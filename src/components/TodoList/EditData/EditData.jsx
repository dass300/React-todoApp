import "./EditData.css";
export const EditData = () => {
  return (
    <form className="edit-data">
      <input type="text" placeholder="Editing current todo item..." />
      <button>save</button>
      <button className="cancel-button">cancel</button>
    </form>
  );
};
