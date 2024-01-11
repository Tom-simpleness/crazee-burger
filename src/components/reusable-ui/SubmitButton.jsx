export default function SubmitButton({ label, Icon }) {
  return (
    <button type="submit">
      <span>{label}</span>
      {Icon && Icon}
    </button>
  );
}
