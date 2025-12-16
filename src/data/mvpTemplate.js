export const MVP_PHASES = {
  IDEATION: 'ideation',
  PLANNING: 'planning',
  DESIGN: 'design',
  DEVELOPMENT: 'development',
  TESTING: 'testing',
  DEPLOYMENT: 'deployment'
};

export const DEFAULT_MVP_TASKS = [
  // IDEATION PHASE (10 tasks)
  {
    id: 'idea-1',
    phase: MVP_PHASES.IDEATION,
    title: 'Define the core problem your MVP solves',
    description: 'Clearly articulate the main problem or pain point your app addresses',
    completed: false,
    priority: 'high'
  },
  {
    id: 'idea-2',
    phase: MVP_PHASES.IDEATION,
    title: 'Identify target audience and user personas',
    description: 'Define who will use your app and create detailed user personas',
    completed: false,
    priority: 'high'
  },
  {
    id: 'idea-3',
    phase: MVP_PHASES.IDEATION,
    title: 'Research competitors and market landscape',
    description: 'Analyze existing solutions and identify your competitive advantage',
    completed: false,
    priority: 'medium'
  },
  {
    id: 'idea-4',
    phase: MVP_PHASES.IDEATION,
    title: 'Define unique value proposition',
    description: 'Clearly state what makes your solution unique and valuable',
    completed: false,
    priority: 'high'
  },
  {
    id: 'idea-5',
    phase: MVP_PHASES.IDEATION,
    title: 'List core features for MVP',
    description: 'Identify the minimum set of features needed to solve the core problem',
    completed: false,
    priority: 'high'
  },
  {
    id: 'idea-6',
    phase: MVP_PHASES.IDEATION,
    title: 'Validate idea with potential users',
    description: 'Conduct interviews or surveys to validate your assumptions',
    completed: false,
    priority: 'high'
  },
  {
    id: 'idea-7',
    phase: MVP_PHASES.IDEATION,
    title: 'Define success metrics and KPIs',
    description: 'Establish how you will measure the success of your MVP',
    completed: false,
    priority: 'medium'
  },
  {
    id: 'idea-8',
    phase: MVP_PHASES.IDEATION,
    title: 'Create elevator pitch',
    description: 'Develop a concise 30-second explanation of your app',
    completed: false,
    priority: 'medium'
  },
  {
    id: 'idea-9',
    phase: MVP_PHASES.IDEATION,
    title: 'Estimate budget and timeline',
    description: 'Create rough estimates for development time and costs',
    completed: false,
    priority: 'medium'
  },
  {
    id: 'idea-10',
    phase: MVP_PHASES.IDEATION,
    title: 'Document the app concept',
    description: 'Create a comprehensive document outlining your app concept',
    completed: false,
    priority: 'low'
  },

  // PLANNING PHASE (12 tasks)
  {
    id: 'plan-1',
    phase: MVP_PHASES.PLANNING,
    title: 'Create detailed user stories',
    description: 'Write user stories for each core feature from the user perspective',
    completed: false,
    priority: 'high'
  },
  {
    id: 'plan-2',
    phase: MVP_PHASES.PLANNING,
    title: 'Define technical requirements',
    description: 'Specify technical constraints, platforms, and requirements',
    completed: false,
    priority: 'high'
  },
  {
    id: 'plan-3',
    phase: MVP_PHASES.PLANNING,
    title: 'Choose technology stack',
    description: 'Select programming languages, frameworks, and tools',
    completed: false,
    priority: 'high'
  },
  {
    id: 'plan-4',
    phase: MVP_PHASES.PLANNING,
    title: 'Design database schema',
    description: 'Plan data structure and relationships',
    completed: false,
    priority: 'high'
  },
  {
    id: 'plan-5',
    phase: MVP_PHASES.PLANNING,
    title: 'Create API specifications',
    description: 'Define API endpoints and data formats',
    completed: false,
    priority: 'high'
  },
  {
    id: 'plan-6',
    phase: MVP_PHASES.PLANNING,
    title: 'Plan app architecture',
    description: 'Design overall system architecture and component structure',
    completed: false,
    priority: 'high'
  },
  {
    id: 'plan-7',
    phase: MVP_PHASES.PLANNING,
    title: 'Create development timeline',
    description: 'Break down development into sprints with specific deliverables',
    completed: false,
    priority: 'medium'
  },
  {
    id: 'plan-8',
    phase: MVP_PHASES.PLANNING,
    title: 'Set up project management tools',
    description: 'Configure tools for task tracking and team collaboration',
    completed: false,
    priority: 'medium'
  },
  {
    id: 'plan-9',
    phase: MVP_PHASES.PLANNING,
    title: 'Plan testing strategy',
    description: 'Define testing approach, tools, and coverage requirements',
    completed: false,
    priority: 'medium'
  },
  {
    id: 'plan-10',
    phase: MVP_PHASES.PLANNING,
    title: 'Choose hosting and deployment platform',
    description: 'Select cloud provider and deployment strategy',
    completed: false,
    priority: 'medium'
  },
  {
    id: 'plan-11',
    phase: MVP_PHASES.PLANNING,
    title: 'Plan security measures',
    description: 'Identify security requirements and implementation approach',
    completed: false,
    priority: 'medium'
  },
  {
    id: 'plan-12',
    phase: MVP_PHASES.PLANNING,
    title: 'Create risk assessment and mitigation plan',
    description: 'Identify potential risks and plan mitigation strategies',
    completed: false,
    priority: 'low'
  },

  // DESIGN PHASE (8 tasks)
  {
    id: 'design-1',
    phase: MVP_PHASES.DESIGN,
    title: 'Create user flow diagrams',
    description: 'Map out how users will navigate through your app',
    completed: false,
    priority: 'high'
  },
  {
    id: 'design-2',
    phase: MVP_PHASES.DESIGN,
    title: 'Design wireframes for key screens',
    description: 'Create low-fidelity wireframes for main app screens',
    completed: false,
    priority: 'high'
  },
  {
    id: 'design-3',
    phase: MVP_PHASES.DESIGN,
    title: 'Create high-fidelity mockups',
    description: 'Design detailed visual mockups with colors, fonts, and imagery',
    completed: false,
    priority: 'high'
  },
  {
    id: 'design-4',
    phase: MVP_PHASES.DESIGN,
    title: 'Design app logo and branding',
    description: 'Create visual identity including logo, colors, and typography',
    completed: false,
    priority: 'medium'
  },
  {
    id: 'design-5',
    phase: MVP_PHASES.DESIGN,
    title: 'Create interactive prototype',
    description: 'Build clickable prototype to test user interactions',
    completed: false,
    priority: 'medium'
  },
  {
    id: 'design-6',
    phase: MVP_PHASES.DESIGN,
    title: 'Conduct usability testing on designs',
    description: 'Test designs with potential users and gather feedback',
    completed: false,
    priority: 'medium'
  },
  {
    id: 'design-7',
    phase: MVP_PHASES.DESIGN,
    title: 'Create design system and style guide',
    description: 'Document design patterns, components, and guidelines',
    completed: false,
    priority: 'low'
  },
  {
    id: 'design-8',
    phase: MVP_PHASES.DESIGN,
    title: 'Prepare assets for development',
    description: 'Export and organize all design assets for developers',
    completed: false,
    priority: 'medium'
  },

  // DEVELOPMENT PHASE (15 tasks)
  {
    id: 'dev-1',
    phase: MVP_PHASES.DEVELOPMENT,
    title: 'Set up development environment',
    description: 'Configure local development setup and tools',
    completed: false,
    priority: 'high'
  },
  {
    id: 'dev-2',
    phase: MVP_PHASES.DEVELOPMENT,
    title: 'Initialize project repository',
    description: 'Set up version control and project structure',
    completed: false,
    priority: 'high'
  },
  {
    id: 'dev-3',
    phase: MVP_PHASES.DEVELOPMENT,
    title: 'Set up database and data models',
    description: 'Implement database schema and data access layer',
    completed: false,
    priority: 'high'
  },
  {
    id: 'dev-4',
    phase: MVP_PHASES.DEVELOPMENT,
    title: 'Implement user authentication',
    description: 'Build user registration, login, and session management',
    completed: false,
    priority: 'high'
  },
  {
    id: 'dev-5',
    phase: MVP_PHASES.DEVELOPMENT,
    title: 'Build core feature #1',
    description: 'Implement the first core feature of your MVP',
    completed: false,
    priority: 'high'
  },
  {
    id: 'dev-6',
    phase: MVP_PHASES.DEVELOPMENT,
    title: 'Build core feature #2',
    description: 'Implement the second core feature of your MVP',
    completed: false,
    priority: 'high'
  },
  {
    id: 'dev-7',
    phase: MVP_PHASES.DEVELOPMENT,
    title: 'Build core feature #3',
    description: 'Implement the third core feature of your MVP',
    completed: false,
    priority: 'high'
  },
  {
    id: 'dev-8',
    phase: MVP_PHASES.DEVELOPMENT,
    title: 'Implement API endpoints',
    description: 'Build backend API for frontend communication',
    completed: false,
    priority: 'high'
  },
  {
    id: 'dev-9',
    phase: MVP_PHASES.DEVELOPMENT,
    title: 'Create responsive frontend UI',
    description: 'Build user interface that works on all devices',
    completed: false,
    priority: 'high'
  },
  {
    id: 'dev-10',
    phase: MVP_PHASES.DEVELOPMENT,
    title: 'Implement error handling',
    description: 'Add comprehensive error handling and user feedback',
    completed: false,
    priority: 'medium'
  },
  {
    id: 'dev-11',
    phase: MVP_PHASES.DEVELOPMENT,
    title: 'Add data validation',
    description: 'Implement input validation and data sanitization',
    completed: false,
    priority: 'medium'
  },
  {
    id: 'dev-12',
    phase: MVP_PHASES.DEVELOPMENT,
    title: 'Implement security measures',
    description: 'Add authentication, authorization, and data protection',
    completed: false,
    priority: 'medium'
  },
  {
    id: 'dev-13',
    phase: MVP_PHASES.DEVELOPMENT,
    title: 'Optimize performance',
    description: 'Improve app speed, loading times, and resource usage',
    completed: false,
    priority: 'medium'
  },
  {
    id: 'dev-14',
    phase: MVP_PHASES.DEVELOPMENT,
    title: 'Add analytics and monitoring',
    description: 'Implement user analytics and error monitoring',
    completed: false,
    priority: 'low'
  },
  {
    id: 'dev-15',
    phase: MVP_PHASES.DEVELOPMENT,
    title: 'Create admin dashboard',
    description: 'Build administrative interface for app management',
    completed: false,
    priority: 'low'
  },

  // TESTING PHASE (8 tasks)
  {
    id: 'test-1',
    phase: MVP_PHASES.TESTING,
    title: 'Write unit tests',
    description: 'Create tests for individual functions and components',
    completed: false,
    priority: 'high'
  },
  {
    id: 'test-2',
    phase: MVP_PHASES.TESTING,
    title: 'Write integration tests',
    description: 'Test how different parts of the app work together',
    completed: false,
    priority: 'high'
  },
  {
    id: 'test-3',
    phase: MVP_PHASES.TESTING,
    title: 'Conduct manual testing',
    description: 'Manually test all features and user flows',
    completed: false,
    priority: 'high'
  },
  {
    id: 'test-4',
    phase: MVP_PHASES.TESTING,
    title: 'Test on different devices and browsers',
    description: 'Ensure compatibility across platforms and browsers',
    completed: false,
    priority: 'high'
  },
  {
    id: 'test-5',
    phase: MVP_PHASES.TESTING,
    title: 'Perform security testing',
    description: 'Test for vulnerabilities and security issues',
    completed: false,
    priority: 'medium'
  },
  {
    id: 'test-6',
    phase: MVP_PHASES.TESTING,
    title: 'Conduct performance testing',
    description: 'Test app performance under various load conditions',
    completed: false,
    priority: 'medium'
  },
  {
    id: 'test-7',
    phase: MVP_PHASES.TESTING,
    title: 'User acceptance testing',
    description: 'Have real users test the app and provide feedback',
    completed: false,
    priority: 'high'
  },
  {
    id: 'test-8',
    phase: MVP_PHASES.TESTING,
    title: 'Fix bugs and issues',
    description: 'Address all critical bugs found during testing',
    completed: false,
    priority: 'high'
  },

  // DEPLOYMENT PHASE (7 tasks)
  {
    id: 'deploy-1',
    phase: MVP_PHASES.DEPLOYMENT,
    title: 'Set up production environment',
    description: 'Configure production servers and infrastructure',
    completed: false,
    priority: 'high'
  },
  {
    id: 'deploy-2',
    phase: MVP_PHASES.DEPLOYMENT,
    title: 'Configure domain and SSL',
    description: 'Set up custom domain and secure HTTPS connection',
    completed: false,
    priority: 'high'
  },
  {
    id: 'deploy-3',
    phase: MVP_PHASES.DEPLOYMENT,
    title: 'Set up CI/CD pipeline',
    description: 'Automate testing and deployment processes',
    completed: false,
    priority: 'medium'
  },
  {
    id: 'deploy-4',
    phase: MVP_PHASES.DEPLOYMENT,
    title: 'Deploy to production',
    description: 'Release the app to production environment',
    completed: false,
    priority: 'high'
  },
  {
    id: 'deploy-5',
    phase: MVP_PHASES.DEPLOYMENT,
    title: 'Set up monitoring and alerts',
    description: 'Configure system monitoring and error alerts',
    completed: false,
    priority: 'medium'
  },
  {
    id: 'deploy-6',
    phase: MVP_PHASES.DEPLOYMENT,
    title: 'Create alpha tester group',
    description: 'Recruit and organize alpha testers for initial feedback',
    completed: false,
    priority: 'high'
  },
  {
    id: 'deploy-7',
    phase: MVP_PHASES.DEPLOYMENT,
    title: 'Deploy to alpha testers',
    description: 'Release the app to alpha testing group',
    completed: false,
    priority: 'high'
  }
];

export const PHASE_INFO = {
  [MVP_PHASES.IDEATION]: {
    name: 'Ideation',
    description: 'Define and validate your app concept',
    color: '#8B5CF6'
  },
  [MVP_PHASES.PLANNING]: {
    name: 'Planning',
    description: 'Plan technical requirements and architecture',
    color: '#06B6D4'
  },
  [MVP_PHASES.DESIGN]: {
    name: 'Design',
    description: 'Create user experience and visual design',
    color: '#10B981'
  },
  [MVP_PHASES.DEVELOPMENT]: {
    name: 'Development',
    description: 'Build your MVP application',
    color: '#F59E0B'
  },
  [MVP_PHASES.TESTING]: {
    name: 'Testing',
    description: 'Test and validate your application',
    color: '#EF4444'
  },
  [MVP_PHASES.DEPLOYMENT]: {
    name: 'Deployment',
    description: 'Deploy to alpha testers',
    color: '#8B5CF6'
  }
};