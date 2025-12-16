import { MVP_PHASES } from '../data/mvpTemplate';

export function calculateProgress(tasks) {
  if (!tasks || tasks.length === 0) return 0;
  const completedTasks = tasks.filter(task => task.completed).length;
  return Math.round((completedTasks / tasks.length) * 100);
}

export function getPhaseProgress(tasks, phase) {
  const phaseTasks = tasks.filter(task => task.phase === phase);
  if (phaseTasks.length === 0) return 0;
  const completedTasks = phaseTasks.filter(task => task.completed).length;
  return Math.round((completedTasks / phaseTasks.length) * 100);
}

export function getCurrentTask(tasks) {
  // Find the first incomplete task
  return tasks.find(task => !task.completed) || null;
}

export function getTasksByPhase(tasks) {
  const tasksByPhase = {};
  Object.values(MVP_PHASES).forEach(phase => {
    tasksByPhase[phase] = tasks.filter(task => task.phase === phase);
  });
  return tasksByPhase;
}

export function getNextTask(tasks, currentTaskId) {
  const currentIndex = tasks.findIndex(task => task.id === currentTaskId);
  if (currentIndex === -1 || currentIndex === tasks.length - 1) return null;
  return tasks[currentIndex + 1];
}

export function getPreviousTask(tasks, currentTaskId) {
  const currentIndex = tasks.findIndex(task => task.id === currentTaskId);
  if (currentIndex <= 0) return null;
  return tasks[currentIndex - 1];
}