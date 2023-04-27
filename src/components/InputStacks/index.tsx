import { useContext } from "react";
import { UserContext } from "../../providers/User/UserContext";
import { Tags } from "./style";

function InputStacks() {
  const { tags, setTags } = useContext(UserContext);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (["Enter", "Tab", ","].includes(event.key)) {
      event.preventDefault();
      const value = event.currentTarget.value.toUpperCase().trim();
      if (value) {
        setTags([...tags, value]);
        event.currentTarget.value = "";
      }
    }
  };

  const handleDelete = (i: number) => {
    setTags([...tags.filter((tag, index) => index !== i)]);
  };

  return (
    <>
      <Tags>
        {tags.map((tag, index) => (
          <div key={index}>
            <li>{tag}</li>
            <span onClick={() => handleDelete(index)}>X</span>
          </div>
        ))}
      </Tags>
      <input
        type="text"
        id="stacks"
        placeholder="Stacks da vaga"
        defaultValue=""
        onKeyDown={handleKeyDown}
        list="stackslist"
      />
      <datalist id="stackslist">
        <option value="HTML" />
        <option value="CSS" />
        <option value="JavaScript" />
        <option value="React" />
        <option value="TypeScript" />
        <option value="Node" />
        <option value="PHP" />
        <option value="Python" />
        <option value="Java" />
        <option value="C#" />
        <option value="C++" />
        <option value="C" />
        <option value="Ruby" />
        <option value="Go" />
        <option value="Swift" />
        <option value="Kotlin" />
        <option value="Rust" />
        <option value="Dart" />
        <option value="SQL" />
        <option value="NoSQL" />
        <option value="MongoDB" />
        <option value="MySQL" />
        <option value="PostgreSQL" />
        <option value="Oracle" />
        <option value="Firebase" />
        <option value="AWS" />
        <option value="Azure" />
        <option value="GCP" />
        <option value="Docker" />
        <option value="Kubernetes" />
        <option value="Linux" />
        <option value="Windows" />
        <option value="MacOS" />
        <option value="Git" />
        <option value="GitHub" />
        <option value="GitLab" />
        <option value="BitBucket" />
        <option value="Scrum" />
        <option value="Kanban" />
        <option value="Agile" />
        <option value="DevOps" />
        <option value="UX" />
        <option value="UI" />
        <option value="Figma" />
        <option value="Design" />
        <option value="Frontend" />
        <option value="Backend" />
        <option value="Fullstack" />
        <option value="Mobile" />
      </datalist>
    </>
  );
}

export default InputStacks;
