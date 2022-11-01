import { Input } from "./input-before/Input";

export function Sub1() {
  return (
    <div>
      <Input
        id="test-input"
        label="Test label"
        errorMessage="test error message"
        searchAction={() => console.log("do something")}
      />
    </div>
  );
}
