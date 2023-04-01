const UserPreferenceOptions = ({ option, checked }) => {
  console.log(
    "🚀 ~ file: UserPreferenceOptions.js:2 ~ UserPreferenceOptions ~ checked:",
    checked
  );

  return (
    <div className="row">
      <div className="form-check">
        <input
          classNames="form-check-input"
          type="checkbox"
          checked={checked}
        />
        <label className="form-check-label">{option}</label>
      </div>
    </div>
  );
};

export default UserPreferenceOptions;
