import Input from "./components/Input";
import Form, { FormHandle } from "./components/Form";
import Button from "./components/Button";
import { useRef } from "react";

const App = () => {
  const customForm = useRef<FormHandle>(null);
  const handleSave = (data: unknown) => {
    const extractdData = data as { userName: string; userAge: number };
    console.log(extractdData);
    customForm.current?.clear();
  };
  return (
    <>
      <main>
        <h1>Advanced Components Types</h1>
        <Form onSave={handleSave} ref={customForm}>
          <Input id="userName" label="enter user Name" type="text" />
          <Input id="userAge" label="enter user Age" type="number" />
          <p>
            <Button type="submit">Save</Button>
          </p>
        </Form>
      </main>
    </>
  );
};

export default App;
