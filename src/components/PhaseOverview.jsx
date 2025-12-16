import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import { PHASE_INFO } from '../data/mvpTemplate';
import { getPhaseProgress } from '../utils/taskUtils';

const PhaseOverview = ({ tasks, onTaskClick, currentTaskId }) => {
  const tasksByPhase = {};
  Object.keys(PHASE_INFO).forEach(phase => {
    tasksByPhase[phase] = tasks.filter(task => task.phase === phase);
  });

  return (
    <div className="phase-overview">
      <h3>MVP Development Phases</h3>
      {Object.entries(PHASE_INFO).map(([phaseKey, phaseInfo]) => {
        const phaseTasks = tasksByPhase[phaseKey] || [];
        const progress = getPhaseProgress(tasks, phaseKey);
        const isCurrentPhase = phaseTasks.some(task => task.id === currentTaskId);
        
        return (
          <div 
            key={phaseKey} 
            className={`phase-card ${isCurrentPhase ? 'current-phase' : ''}`}
          >
            <div className="phase-header">
              <div 
                className="phase-color-indicator" 
                style={{ backgroundColor: phaseInfo.color }}
              />
              <div className="phase-info">
                <h4>{phaseInfo.name}</h4>
                <p>{phaseInfo.description}</p>
              </div>
              <div className="phase-progress">
                <span className="progress-percentage">{progress}%</span>
                <div className="mini-progress-bar">
                  <div 
                    className="mini-progress-fill" 
                    style={{ 
                      width: `${progress}%`,
                      backgroundColor: phaseInfo.color 
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="phase-tasks">
              {phaseTasks.map(task => (
                <div 
                  key={task.id}
                  className={`task-item ${task.id === currentTaskId ? 'current-task-item' : ''} ${task.completed ? 'completed' : ''}`}
                  onClick={() => onTaskClick(task.id)}
                >
                  <div className="task-status">
                    {task.completed ? (
                      <CheckCircle size={16} className="text-green-500" />
                    ) : task.id === currentTaskId ? (
                      <Clock size={16} className="text-blue-500" />
                    ) : (
                      <Circle size={16} className="text-gray-400" />
                    )}
                  </div>
                  <span className="task-title">{task.title}</span>
                  <span className={`task-priority priority-${task.priority}`}>
                    {task.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PhaseOverview;