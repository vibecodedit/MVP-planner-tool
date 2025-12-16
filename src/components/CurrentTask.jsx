import React from 'react';
import { CheckCircle, Circle, ArrowRight, ArrowLeft } from 'lucide-react';
import { PHASE_INFO } from '../data/mvpTemplate';

const CurrentTask = ({ task, onToggleComplete, onNext, onPrevious, hasNext, hasPrevious }) => {
  if (!task) {
    return (
      <div className="current-task completed-all">
        <div className="task-icon">
          <CheckCircle size={48} className="text-green-500" />
        </div>
        <h2>🎉 Congratulations!</h2>
        <p>You've completed all tasks! Your MVP is ready for alpha testing.</p>
      </div>
    );
  }

  const phaseInfo = PHASE_INFO[task.phase];

  return (
    <div className="current-task">
      <div className="task-header">
        <div className="phase-badge" style={{ backgroundColor: phaseInfo.color }}>
          {phaseInfo.name}
        </div>
        <div className="task-navigation">
          <button 
            onClick={onPrevious} 
            disabled={!hasPrevious}
            className="nav-button"
            title="Previous task"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={onNext} 
            disabled={!hasNext}
            className="nav-button"
            title="Next task"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="task-content">
        <div className="task-icon" onClick={() => onToggleComplete(task.id)}>
          {task.completed ? (
            <CheckCircle size={32} className="text-green-500 cursor-pointer" />
          ) : (
            <Circle size={32} className="text-gray-400 cursor-pointer hover:text-blue-500" />
          )}
        </div>
        
        <div className="task-details">
          <h2 className={task.completed ? 'completed' : ''}>{task.title}</h2>
          <p className="task-description">{task.description}</p>
          <div className="task-meta">
            <span className={`priority priority-${task.priority}`}>
              {task.priority.toUpperCase()} PRIORITY
            </span>
          </div>
        </div>
      </div>
      
      <div className="task-actions">
        <button 
          onClick={() => onToggleComplete(task.id)}
          className={`complete-button ${task.completed ? 'completed' : ''}`}
        >
          {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
        </button>
      </div>
    </div>
  );
};

export default CurrentTask;