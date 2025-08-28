import { useRef } from "react";

interface TodoFormProps {
  onAdd: (text: string) => void;
}

function TodoForm({ onAdd }: TodoFormProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = inputRef.current?.value.trim();
    if (!value) return;
    onAdd(value);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} placeholder="Nhập việc cần làm..." />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
