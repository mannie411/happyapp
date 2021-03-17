import React, { useState } from "react";

export default function Category({ value }) {
  const [category, setCategory] = useState([]);

  const categories = [
    "Programming",
    "Miscellaneous",
    "Pun",
    "Dark",
    "Spooky",
    "Christmas",
  ];

  const handleChecked = (e) => {
    if (e.target.checked) {
      const c = [...category, e.target.value];
      setCategory(c);
    } else {
      const idx = category.indexOf(e.target.value);
      if (idx !== null) category.splice(idx, 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category) return;
    value(category);
  };

  return (
    <div>
      <form className="form-inline" onSubmit={handleSubmit}>
        <label>Categories: </label>
        {categories.map((c, i) => (
          <div className="checkbox" style={{ padding: "0 10px" }} key={i}>
            <label>
              <input type="checkbox" value={c} onChange={handleChecked} /> {c}
            </label>
          </div>
        ))}
        <button
          type="submit"
          className="btn btn-primary"
          style={{ margin: "10px" }}
        >
          Apply
        </button>
      </form>
    </div>
  );
}
