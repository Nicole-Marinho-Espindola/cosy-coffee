import Project from "../projects/ProjectForm";
import styles from './css/newProject.module.css'

function NewProject() {
  return (
    <div className={styles.container}>
      <h1>New Event Form</h1>
      <p>Here you can add new events for Cosy Coffee</p>
      <Project />
    </div>
  );
}

export default NewProject;
