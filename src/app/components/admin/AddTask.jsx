"use client";

import { useState } from "react";
import { PlusCircle, Trash2, Edit2, Check, CircleX } from "lucide-react";

// data de ejemplo para las opciones de asignación
const assigneeOptions = [
  { value: "1", label: "Juan Pérez" },
  { value: "2", label: "María García" },
  { value: "3", label: "Carlos Rodríguez" },
  { value: "4", label: "Ana López" },
];

const AddTask = () => {
  const [taskList, setTaskList] = useState([]);
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleAddTask = () => {
    if (!description.trim()) return;

    if (editingTaskId) {
      setTaskList(
        taskList.map((task) =>
          task.id === editingTaskId
            ? { ...task, description, assignedTo }
            : task
        )
      );
      setEditingTaskId(null);
    } else {
      const newTask = {
        id: Date.now().toString(),
        description,
        assignedTo,
      };
      setTaskList([...taskList, newTask]);
    }

    setDescription("");
    setAssignedTo("");
  };

  const handleRemoveTask = (taskId) => {
    setTaskList(taskList.filter((task) => task.id !== taskId));

    if (editingTaskId === taskId) {
      setEditingTaskId(null);
      setDescription("");
      setAssignedTo("");
    }
  };

  const handleEditTask = (task) => {
    setDescription(task.description);
    setAssignedTo(task.assignedTo);
    setEditingTaskId(task.id);
  };

  const cancelEdit = () => {
    setEditingTaskId(null);
    setDescription("");
    setAssignedTo("");
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-3">Tareas</h3>

      <div className="flex flex-col md:flex-row gap-4 mb-6 items-start">
        <div className="flex-grow w-full md:w-auto">
          <div className="mb-2">
            <label htmlFor="task-description" className="text-sm font-semibold">
              Tarea
            </label>
            <input
              id="task-description"
              type="text"
              name="description"
              aria-label="Descripción de la tarea"
              className="w-full px-3 py-2 text-sm mt-2 border border-gray-300 rounded-md focus:outline-none 
                focus:ring-2 focus:ring-blue-500"
              placeholder="Describir la tarea..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full md:w-64">
          <div className="mb-2">
            <label htmlFor="task-assignee" className="text-sm font-semibold">
              Asignar a
            </label>
            <select
              id="task-assignee"
              name="assignedTo"
              aria-label="Asignar tarea a"
              className="w-full px-3 py-2 text-sm mt-2 border border-gray-300 rounded-md focus:outline-none 
                focus:ring-2 focus:ring-blue-500"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
            >
              <option value="">Seleccionar...</option>
              {assigneeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-end h-full pb-2 mt-4 md:mt-0 gap-2">
          <button
            type="button"
            onClick={handleAddTask}
            name="add-task-button"
            aria-label={editingTaskId ? "Actualizar tarea" : "Agregar tarea"}
            className="flex items-center text-blue-600 hover:text-blue-800 p-2 cursor-pointer"
          >
            {editingTaskId ? (
              <>
                <Check size={20} color="#58D950" />
                <span className="sr-only">Actualizar tarea</span>
              </>
            ) : (
              <>
                <PlusCircle size={20} />
                <span className="sr-only">Agregar tarea</span>
              </>
            )}
          </button>

          {editingTaskId && (
            <button
              type="button"
              onClick={cancelEdit}
              aria-label="Cancelar edición"
              name="cancel-edit-button"
              disabled={!editingTaskId}
              className="flex items-center text-red-500 hover:text-text-red-700 p-2 cursor-pointer"
            >
              <CircleX size={20} />
            </button>
          )}
        </div>
      </div>

      {/* Lista de tareas agregadas */}
      {taskList.length > 0 && (
        <div className="border rounded-md p-4 bg-gray-50">
          <h4 className="font-medium mb-3">Tareas agregadas:</h4>
          <ul className="space-y-3">
            {taskList.map((task) => (
              <li
                key={task.id}
                className={`flex justify-between items-center p-3 rounded border ${
                  editingTaskId === task.id
                    ? "bg-blue-50 border-blue-300"
                    : "bg-white"
                }`}
              >
                <div className="flex-1">
                  <p className="font-medium">{task.description}</p>
                  <p className="text-sm text-gray-600">
                    Asignado a:{" "}
                    {assigneeOptions.find(
                      (opt) => opt.value === task.assignedTo
                    )?.label || "No asignado"}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleEditTask(task)}
                    className={`p-1 ${
                      editingTaskId === task.id
                        ? "text-blue-600"
                        : "text-gray-500 hover:text-blue-600 cursor-pointer"
                    }`}
                    aria-label="Editar tarea"
                    disabled={editingTaskId === task.id}
                  >
                    <Edit2 size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveTask(task.id)}
                    className="p-1 text-red-500 hover:text-red-700 cursor-pointer"
                    aria-label="Eliminar tarea"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AddTask;
