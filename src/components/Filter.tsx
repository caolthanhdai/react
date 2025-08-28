type Filter = "all" | "done" | "active";

interface FilterProps {
  filter: Filter;
  onChange: (filter: Filter) => void;
}

function Filter({ filter, onChange }: FilterProps) {
  return (
    <div style={{ margin: "10px 0" }}>
      <button
        style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
        onClick={() => onChange("all")}
      >
        All
      </button>
      <button
        style={{ fontWeight: filter === "active" ? "bold" : "normal" }}
        onClick={() => onChange("active")}
      >
        Active
      </button>
      <button
        style={{ fontWeight: filter === "done" ? "bold" : "normal" }}
        onClick={() => onChange("done")}
      >
        Done
      </button>
    </div>
  );
}

export default Filter;
