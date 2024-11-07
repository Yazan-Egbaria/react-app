const Checkbox = ({ label, name, checked, onChange }) => {
  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default Checkbox;
