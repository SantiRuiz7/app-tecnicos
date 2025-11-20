import React, { useState } from "react";

function Dashboard({ user }) {
  const [view, setView] = useState("inicio");

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-lg p-5">
        <h2 className="text-xl font-bold mb-6">Menú</h2>
        <nav className="flex flex-col gap-3">
          <button
            onClick={() => setView("inicio")}
            className={`text-left px-3 py-2 rounded hover:bg-gray-200 ${view === "inicio" ? "bg-gray-300" : ""}`}
          >
            Inicio
          </button>

          <button
            onClick={() => setView("solicitudes")}
            className={`text-left px-3 py-2 rounded hover:bg-gray-200 ${view === "solicitudes" ? "bg-gray-300" : ""}`}
          >
            Solicitudes
          </button>

          <button className="text-left px-3 py-2 rounded hover:bg-gray-200">
            Técnicos
          </button>

          <button className="text-left px-3 py-2 rounded hover:bg-gray-200">
            Máquinas
          </button>

          <button className="text-left px-3 py-2 rounded hover:bg-gray-200">
            Reportes
          </button>
        </nav>
      </aside>

      {/* CONTENIDO */}
      <div className="flex-1 p-8">

        {/* HEADER */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="font-medium">Hola, {user?.name}</span>
            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Cerrar sesión
            </button>
          </div>
        </header>

        {/* CONTENIDO SEGÚN VIEW */}
        {view === "inicio" && (
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Bienvenido al sistema</h2>
            <p>Seleccioná una opción del menú para comenzar.</p>
          </section>
        )}

        {view === "solicitudes" && <Solicitudes />}
      </div>
    </div>
  );
}

// --------------------------------------
// COMPONENTE: Solicitudes
// --------------------------------------
function Solicitudes() {
  // Datos de ejemplo
  const solicitudes = [
    {
      id: 1,
      titulo: "Falla en máquina de corte",
      estado: "Pendiente",
      prioridad: "Alta",
      fecha: "2025-11-16",
    },
    {
      id: 2,
      titulo: "Mantenimiento preventivo",
      estado: "En proceso",
      prioridad: "Media",
      fecha: "2025-11-15",
    },
    {
      id: 3,
      titulo: "Cambio de aceite hidráulico",
      estado: "Completado",
      prioridad: "Baja",
      fecha: "2025-11-10",
    },
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Solicitudes / Órdenes de Trabajo</h2>

      <button 
      onClick={() => setView("inicio")}
      className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        + Nueva Solicitud
      </button>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">ID</th>
            <th className="p-2">Título</th>
            <th className="p-2">Estado</th>
            <th className="p-2">Prioridad</th>
            <th className="p-2">Fecha</th>
          </tr>
        </thead>

        <tbody>
          {solicitudes.map((s) => (
            <tr key={s.id} className="border-b hover:bg-gray-100">
              <td className="p-2">{s.id}</td>
              <td className="p-2">{s.titulo}</td>
              <td className="p-2">{s.estado}</td>
              <td className="p-2">{s.prioridad}</td>
              <td className="p-2">{s.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Dashboard;
