/* eslint-disable react/prop-types */
function InputComponent({ field, register, error }) {
  const { label, name, description, type } = field;

  const message = error ? error.message : description

  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        {...register(name)}
        className={`input input-bordered w-full max-w-xs ${error ? 'input-error' : ''}`}
      />
      <div className="label">
        <span className={`label-text-alt text-sm ${error && 'text-red-500'}`}>{message}</span>
      </div>
    </label>
  );
}

export default InputComponent;
