import Input from "../form/input";
import Select from "../form/select";
import Button from "../layouts/Button";
import styles from "./css/projectForm.module.css";
import { useState, useEffect } from "react";

function ProjectForm() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3307/categories', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      setCategories(data);
    })
    .catch((err) => console.log(err));
  }, [])

  return (
    <form className={styles.form_style}>
      <Input
        type="text"
        name="textInput"
        id="textInput"
        text="Project Name"
        placeholder="Create a project name"
        onChange="function()"
      />
      <Input
        type="number"
        name="numberInput"
        id="numberInput"
        text="Project Budget"
        placeholder="Create a project budget"
        onChange="function()"
      />
      <Select
        name="select_category"
        id="select_category"
        text="Select an option"
        options={categories}
      />
      <div className={styles.btn_block}>
        <Button route="./" btnText="New event" />
      </div>
    </form>
  );
}

export default ProjectForm;
