import { useContext } from "react";
import { UserContext } from "../../providers/User/UserContext";
import { Tags } from "./style";
import { stacks } from "./stacks";

function InputStacks() {
  const { tags, setTags } = useContext(UserContext);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (["Enter", "Tab", ",", " "].includes(event.key)) {
      event.preventDefault();
      const value = event.currentTarget.value.toUpperCase().trim();
      const find = stacks.find((stack) => stack.toUpperCase().startsWith(value))
      if (find) {
        setTags([...tags, find]);
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
          {stacks.map((stack: string) => (
            <option value={stack}/>
          ))}
      </datalist>
    </>
  );
}

export default InputStacks;
