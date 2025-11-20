export default function Asignacion({ form, onChange }) {
  return (
    <div className="p-4 border rounded-lg shadow bg-white space-y-4">
      <h2 className="text-xl font-semibold text-blue-600">Asignación</h2>

      <input
        type="text"
        className="w-full border p-2 rounded"
        placeholder="Responsables (coma para separar)"
        value={form.responsables || ""}
        onChange={(e) => onChange("responsables", e.target.value)}
      />

      <input
        type="date"
        className="w-full border p-2 rounded"
        value={form.fechaControl || ""}
        onChange={(e) => onChange("fechaControl", e.target.value)}
      />
    </div>
  );
}
