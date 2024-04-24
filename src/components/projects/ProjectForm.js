import Input from "../form/Input";
import styles from "./css/projectForm.module.css";

function Project() {
  return (
    <form className={styles.form_style}>
      <Input
        type="text"
        name="textInput"
        id="textInput"
        text="Project Name"
        placeholder="Create a project name"
        onChange='function()'
      />
      <Input
        type="text"
        name="textInput"
        id="textInput"
        text="Project Name"
        placeholder="Create a project name"
        onChange='function()'
      />
       <Input
        type="text"
        name="textInput"
        id="textInput"
        text="Project Name"
        placeholder="Create a project name"
        onChange='function()'
      />
      <div>
        <button>Create</button>
      </div>
    </form>
  );
}

export default Project;
