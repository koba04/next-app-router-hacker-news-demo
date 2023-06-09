export const CommentInput = ({ label, type, name, autoFocus } : { label: string, type: string, name: string, autoFocus: boolean }) => (
  <label className="flex flex-col gap-1">
    <span>{label}</span>
    <input type={type} name={name} autoFocus={autoFocus} className="border-2 border-gray-200 w-full p-1" />
  </label>
)