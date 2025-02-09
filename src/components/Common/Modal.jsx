import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full modal-panel ">
        <div className="flex justify-between items-center border-b mb-2">
          <h2 className="text-xl font-bold my-4 mx-0 pt-0 text-gray-700">{project.title}</h2>
          <button
            onClick={onClose}
            className=" text-gray-500 text-[30px]  rounded-full hover:bg-gray-600 hover:text-white transition duration-200 w-[45px] h-[45px]"
          >
            ×
          </button>
        </div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto mb-4 rounded"
        />
        <p className="mb-2">{project.description}</p>
        <p className="mb-4">
          <strong>Skills:</strong> {project.skills.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default Modal;
