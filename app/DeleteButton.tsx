'use client';



export const DeleteButton = ({ id, handleRemove }: { id: number, handleRemove: (id: number) => Promise<void> }) => {
  return (
    <button
      className="bg-slate-200 hover:bg-slate-300 rounded-md p-1"
      onClick={() => handleRemove(id)}
    >
      delete
    </button>
  )
}