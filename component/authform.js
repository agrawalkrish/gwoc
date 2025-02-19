'use client';

export default function AuthForm({
  title,
  fields,
  buttonText,
  loading,
  error,
  success,
  onSubmit,
  onChange,
  footer,
}) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">{title}</h1>
      <form onSubmit={onSubmit}>
        {fields.map((field) => (
          <div key={field.id} className="mb-4">
            <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              value={field.value}
              onChange={onChange}
              required={field.required}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
        ))}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          {buttonText}
        </button>
      </form>
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
}