import React, { useState, useEffect } from 'react';
import { Settings, RotateCcw, Target } from 'lucide-react';
import { DEFAULT_MVP_TASKS } from './data/mvpTemplate';
import { useLocalStorage } from './hooks/useLocalStorage';
import { calculateProgress, getCurrentTask, getNextTask, getPreviousTask } from './utils/taskUtils';
import ProgressBar from './components/ProgressBar';
import CurrentTask from './components/CurrentTask';
import PhaseOverview from './components/PhaseOverview';
import TaskEditor from './components/TaskEditor';
import './App.css';

function App() {
  const [tasks, setTasks] = useLocalStorage('mvp-tasks', DEFAULT_MVP_TASKS);
  const [currentTaskId, setCurrentTaskId] = useLocalStorage('current-task-id', null);
  const [showEditor, setShowEditor] = useState(false);
  const [showOverview, setShowOverview] = useState(false);


  const progress = calculateProgress(tasks);
  const currentTask = currentTaskId 
    ? tasks.find(task => task.id === currentTaskId) 
    : getCurrentTask(tasks);

  // Update current task ID when it changes
  useEffect(() => {
    if (currentTask && currentTask.id !== currentTaskId) {
      setCurrentTaskId(currentTask.id);
    }
  }, [currentTask, currentTaskId, setCurrentTaskId]);

  const handleToggleComplete = (taskId = currentTask?.id) => {
    if (!taskId) return;
    
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task => 
        task.id === taskId 
          ? { ...task, completed: !task.completed }
          : task
      );
      
      // If we just completed the current task, move to next incomplete task
      const toggledTask = prevTasks.find(t => t.id === taskId);
      if (toggledTask && !toggledTask.completed) {
        setTimeout(() => {
          const nextIncompleteTask = getCurrentTask(updatedTasks);
          if (nextIncompleteTask && nextIncompleteTask.id !== taskId) {
            setCurrentTaskId(nextIncompleteTask.id);
          }
        }, 0);
      }
      
      return updatedTasks;
    });
  };

  const handleNextTask = () => {
    if (!currentTask) return;
    const nextTask = getNextTask(tasks, currentTask.id);
    if (nextTask) {
      setCurrentTaskId(nextTask.id);
    }
  };

  const handlePreviousTask = () => {
    if (!currentTask) return;
    const prevTask = getPreviousTask(tasks, currentTask.id);
    if (prevTask) {
      setCurrentTaskId(prevTask.id);
    }
  };

  const handleTaskClick = (taskId) => {
    setCurrentTaskId(taskId);
    setShowOverview(false);
  };

  const handleResetTasks = () => {
    if (window.confirm('Are you sure you want to reset all tasks? This will clear all your progress.')) {
      setTasks(DEFAULT_MVP_TASKS);
      setCurrentTaskId(null);
    }
  };

  const handleSaveTasks = (newTasks) => {
    setTasks(newTasks);
    // Update current task if it no longer exists
    if (currentTaskId && !newTasks.find(task => task.id === currentTaskId)) {
      const nextTask = getCurrentTask(newTasks);
      setCurrentTaskId(nextTask?.id || null);
    }
  };

  const hasNext = currentTask ? !!getNextTask(tasks, currentTask.id) : false;
  const hasPrevious = currentTask ? !!getPreviousTask(tasks, currentTask.id) : false;

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <Target size={32} />
            <h1>MVP Planner</h1>
          </div>
          
          <ProgressBar progress={progress} className="header-progress" />
          
          <div className="header-actions">
            <button 
              onClick={() => setShowOverview(!showOverview)}
              className={`action-button ${showOverview ? 'active' : ''}`}
              title="View all phases"
            >
              Overview
            </button>
            <button 
              onClick={() => setShowEditor(true)}
              className="action-button"
              title="Customize tasks"
            >
              <Settings size={20} />
            </button>

            <button 
              onClick={handleResetTasks}
              className="action-button reset-button"
              title="Reset all tasks"
            >
              <RotateCcw size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="app-main">
        {showOverview ? (
          <PhaseOverview 
            tasks={tasks}
            onTaskClick={handleTaskClick}
            currentTaskId={currentTask?.id}
          />
        ) : (
          <CurrentTask
            task={currentTask}
            onToggleComplete={handleToggleComplete}
            onNext={handleNextTask}
            onPrevious={handlePreviousTask}
            hasNext={hasNext}
            hasPrevious={hasPrevious}
          />
        )}
      </main>

      {showEditor && (
        <TaskEditor
          tasks={tasks}
          onSave={handleSaveTasks}
          onClose={() => setShowEditor(false)}
        />
      )}
    </div>
  );
}

export default App;