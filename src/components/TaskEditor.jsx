import React, { useState } from 'react';
import { X, Save, Plus, Trash2 } from 'lucide-react';
import { PHASE_INFO } from '../data/mvpTemplate';

const TaskEditor = ({ tasks, onSave, onClose }) => {
  const [editedTasks, setEditedTasks] = useState([...tasks]);

  const handleTaskChange = (taskId, field, value) => {
    setEditedTasks(prev => 
      prev.map(task => 
        task.id === taskId ? { ...task, [field]: value } : task
      )
    );
  };

  const handleAddTask = (phase) => {
    const newTask = {
      id: `custom-${Date.now()}`,
      phase,
      title: 'New Task',
      description: 'Add your task description here',
      completed: false,
      priority: 'medium'
    };
    setEditedTasks(prev => [...prev, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setEditedTasks(prev => prev.filter(task => task.id !== taskId));
  };

  const handleSave = () => {
    onSave(editedTasks);
    onClose();
  };

  const tasksByPhase = {};
  Object.keys(PHASE_INFO).forEach(phase => {
    tasksByPhase[phase] = editedTasks.filter(task => task.phase === phase);
  });

  return (
    <div className="task-editor-overlay">
      <div className="task-editor">
        <div className="editor-header">
          <h2>Customize Your MVP Tasks</h2>
          <div className="editor-actions">
            <button onClick={handleSave} className="save-button">
              <Save size={20} />
              Save Changes
            </button>
            <button onClick={onClose} className="close-button">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="editor-content">
          {Object.entries(PHASE_INFO).map(([phaseKey, phaseInfo]) => (
            <div key={phaseKey} className="phase-editor">
              <div className="phase-editor-header">
                <div 
                  className="phase-color-indicator" 
                  style={{ backgroundColor: phaseInfo.color }}
                />
                <h3>{phaseInfo.name}</h3>
                <button 
                  onClick={() => handleAddTask(phaseKey)}
                  className="add-task-button"
                  title="Add new task"
                >
                  <Plus size={16} />
                </button>
              </div>

              <div className="tasks-editor-list">
                {tasksByPhase[phaseKey].map(task => (
                  <div key={task.id} className="task-editor-item">
                    <div className="task-editor-main">
                      <input
                        type="text"
                        value={task.title}
                        onChange={(e) => handleTaskChange(task.id, 'title', e.target.value)}
                        className="task-title-input"
                        placeholder="Task title"
                      />
                      <textarea
                        value={task.description}
                        onChange={(e) => handleTaskChange(task.id, 'description', e.target.value)}
                        className="task-description-input"
                        placeholder="Task description"
                        rows={2}
                      />
                    </div>
                    <div className="task-editor-controls">
                      <select
                        value={task.priority}
                        onChange={(e) => handleTaskChange(task.id, 'priority', e.target.value)}
                        className="priority-select"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                      <button
                        onClick={() => handleDeleteTask(task.id)}
                        className="delete-task-button"
                        title="Delete task"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskEditor;