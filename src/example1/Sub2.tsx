import { ClearableInput } from "./input-after/ClearableInput";
import { Input } from "./input-after/Input";
import { Message } from "./input-after/Message";
import { SearchableInput } from "./input-after/SearchableInput";

export function Sub2() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Input id="test-input-1" />
      </div>
      <div>
        <Input
          id="test-input-2"
          label="Test label"
          message={<Message message="error message" type="error" />}
        />
      </div>
      <div>
        <SearchableInput
          id="test-input-3"
          onSearchClick={() => console.log("test")}
        />
      </div>
      <div>
        <ClearableInput
          id="test-input-4"
          label="Test label"
          onClearClick={() => console.log("test")}
          message={<Message message="info message" type="info" />}
        />
      </div>
      <div>
        <Input
          id="test-input-1"
          message={
            <div className="border-4 border-dotted border-pink-900 text-2xl text-pink-900">
              Custom message
            </div>
          }
        />
      </div>
    </div>
  );
}
