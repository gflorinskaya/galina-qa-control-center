export const profile = {
  name: 'Galina',
  role: 'Senior Software QA Engineer / SDET',
  experience: '10+ years',
  status: 'open_to_senior_qa_sdet_roles',
  headline: 'QA control center operator for releases that prefer evidence over hope.',
  location: 'United States',
  contact: {
    email: 'Available on resume',
    linkedin: 'Available on resume / LinkedIn',
    github: 'Available on resume',
  },
  primaryStack: [
    'Python',
    'PyTest',
    'API Testing',
    'SQL',
    'CI/CD',
    'Kubernetes',
    'Cloud Testing',
    'Performance Testing',
  ],
  superpowers: [
    'turns vague requirements into testable scenarios',
    'finds edge cases hiding inside small changes',
    'writes clear bugs developers can actually use',
    'balances automation with practical product risk',
    'keeps release conversations calm, specific, and evidence-based',
  ],
  knownDependency: 'coffee_before_morning_sql',
};

export const systemStatuses = [
  { label: 'System Status', value: 'Hireable', detail: 'Ready for thoughtful teams and useful bug reports.' },
  { label: 'Bug Radar', value: 'Always On', detail: 'False positives reviewed politely.' },
  { label: 'Regression Risk', value: 'Under Investigation', detail: 'Scope expands when evidence asks nicely.' },
  { label: 'Coffee Dependency', value: 'Documented', detail: 'Morning SQL accuracy improves after caffeine.' },
  { label: 'Senior QA Instincts', value: 'Active', detail: 'Minor changes are treated as risk hypotheses.' },
];

export const resumeEndpoints = [
  {
    method: 'GET',
    path: '/resume',
    response: {
      role: 'Senior Software QA Engineer / SDET',
      experience: '10+ years',
      focus: 'test automation, API validation, CI/CD, cloud environments, Kubernetes, and release risk analysis',
      certification: 'Certified Kubernetes Administrator (CKA)',
      summary:
        'Senior QA/SDET with strong automation, cloud, and backend testing experience across scalable software systems.',
    },
  },
  {
    method: 'GET',
    path: '/skills',
    response: {
      strongestSignals: [
        'Python + PyTest automation',
        'API and integration testing',
        'CI/CD quality gates',
        'Kubernetes and cloud validation',
        'SQL/data validation',
        'clear bug investigation',
      ],
      testingStyle: 'risk-based, evidence-driven, practical',
      automationStyle: 'stable, maintainable, and tied to product risk',
    },
  },
  {
    method: 'GET',
    path: '/experience',
    response: {
      experienceAreas: [
        'enterprise QA automation',
        'cloud and Kubernetes validation',
        'microservices testing',
        'regression strategy',
        'performance and reliability checks',
        'cross-platform and API testing',
      ],
      tools: [
        'Python',
        'PyTest',
        'Postman',
        'SoapUI',
        'Selenium',
        'Playwright',
        'GitHub Actions',
        'Jenkins',
        'Docker',
        'Kubernetes',
        'Terraform',
        'SQL',
      ],
    },
  },
  {
    method: 'GET',
    path: '/team-fit',
    response: {
      bestFit:
        'Teams that value practical automation, clear release risk, and strong collaboration between QA, development, DevOps, and product.',
      communication: 'clear defects, reproducible evidence, focused questions, and calm release notes',
      releasePhilosophy: 'test what matters, automate what lasts, and make risk visible before release day',
    },
  },
];

export const skills = [
  {
    name: 'API Testing',
    level: 95,
    note: 'REST APIs, Postman, SoapUI, contracts, schemas, negative paths, auth, permissions, and JSON that "looks fine" until it does not.',
  },
  {
    name: 'Test Automation',
    level: 94,
    note: 'Python, PyTest, Selenium, Playwright, reusable frameworks, useful assertions, and failures that explain themselves.',
  },
  {
    name: 'CI/CD',
    level: 90,
    note: 'GitHub Actions, Jenkins, quality gates, build validation, and fewer "but it worked locally" conversations.',
  },
  {
    name: 'Kubernetes / Cloud',
    level: 90,
    note: 'CKA-certified Kubernetes experience across AWS, GCP, Azure, Docker, Terraform, and deployment validation.',
  },
  {
    name: 'SQL / Data Validation',
    level: 88,
    note: 'SQL queries, backend state checks, joins, data setup, record transitions, and suspicious count mismatches.',
  },
  {
    name: 'Microservices Testing',
    level: 86,
    note: '.NET Core services, Docker containers, Redis, RabbitMQ, HTTP messaging, integration points, and runtime behavior.',
  },
  {
    name: 'Performance / Reliability Testing',
    level: 88,
    note: 'Performance, regression, functional, integration, queue behavior, response time, and user-visible risk.',
  },
  {
    name: 'Bug Investigation',
    level: 99,
    note: 'Logs, SQL, DevTools, API responses, repro evidence, and calm persistence when the bug says "not me."',
  },
  {
    name: 'Test Strategy',
    level: 96,
    note: 'Test plans, test suites, SDLC coverage, Agile release support, and risk-based regression.',
  },
  {
    name: 'Clear Bug Reporting',
    level: 98,
    note: 'Clean titles, repro steps, evidence, expected behavior, actual behavior, impact, and no detective work required from the developer.',
  },
];

export const recruiterProfile = {
  summary:
    'Senior Software QA Engineer / SDET with 10+ years of experience designing QA strategies, building automation frameworks, validating APIs and microservices, supporting CI/CD pipelines, and testing cloud/Kubernetes-based systems. CKA-certified with hands-on experience across AWS, GCP, Azure, Docker, Terraform, SQL, and Python/PyTest automation.',
  coreSkills: [
    'Test automation strategy',
    'Python + PyTest',
    'API and integration testing',
    'CI/CD pipeline validation',
    'Kubernetes and cloud testing',
    'SQL/data validation',
    'Regression and functional testing',
    'Performance and reliability testing',
    'Bug investigation and documentation',
    'Agile release support',
  ],
  selectedStrengths: [
    'Builds automation that improves coverage and reduces repetitive manual effort.',
    'Connects UI behavior, API responses, logs, and database state during investigation.',
    'Validates cloud and Kubernetes deployments with a QA mindset.',
    'Communicates defects with clear evidence and practical release risk.',
    'Works across QA, development, DevOps, and product to improve release confidence.',
  ],
  tools: [
    'Python',
    'PyTest',
    'Postman',
    'SoapUI',
    'Selenium',
    'Playwright',
    'Cypress',
    'GitHub Actions',
    'Jenkins',
    'Docker',
    'Kubernetes',
    'Terraform',
    'AWS',
    'GCP',
    'Azure',
    'SQL',
    'JIRA',
    'Confluence',
    'Linux',
    'Shell scripting',
  ],
  bestTeamFit:
    'Teams that value practical automation, clear release risk, and strong collaboration between QA, development, DevOps, and product.',
  certifications: ['Certified Kubernetes Administrator (CKA)'],
  contact: 'Contact details available through resume, LinkedIn, or GitHub.',
};

export const testLabExamples = [
  {
    type: 'Sample Bug Report',
    title: 'Order Comment Field Accepts Long Input and Cuts Off Text',
    expected: 'The field should prevent overflow, wrap text, or enforce a reasonable max length.',
    actual: 'Long text is accepted but not fully visible, making it hard for users to review or edit.',
    risk: 'Users may save incomplete or unreadable instructions.',
    evidence: 'Reproduced with a long plain-text comment in a clean test account.',
  },
  {
    type: 'Sample Test Case',
    title: 'User Cannot Submit Form When Required Fields Are Missing',
    steps: ['Open the form', 'Leave required fields blank', 'Select Submit', 'Review validation messages'],
    expected: 'Submission is blocked and each missing required field has a clear validation message.',
    risk: 'Incomplete records can create downstream support and reporting issues.',
  },
  {
    type: 'Sample API Test Idea',
    title: 'PATCH Request Rejects Unauthorized Status Change',
    expected: 'API returns 403 for users without permission and does not modify the resource.',
    actual: 'Validate with role-specific access and confirm the resource is not modified.',
    risk: 'Permission gaps can expose workflow actions to the wrong users.',
  },
  {
    type: 'Regression Risk Analysis',
    title: 'Checkout Button Copy Update',
    expected: 'Button text changes without breaking state, permissions, analytics, keyboard access, or error handling.',
    risk: 'A visible UI change may hide behavior, accessibility, tracking, or localization regressions.',
    recommendation: 'Run targeted UI, accessibility, permissions, and analytics smoke checks.',
  },
  {
    type: 'Exploratory Charter',
    title: 'Search Filters Under Messy Real-User Behavior',
    mission: 'Explore filtering, sorting, empty states, refresh behavior, and persistence across sessions.',
    risk: 'Users may trust filtered results that are stale, incomplete, or confusing.',
    notes: 'Focus on combinations, invalid input, back button behavior, and slow responses.',
  },
];

export const workModes = [
  {
    title: 'Quick QA Check',
    input: 'Can you just quickly test this small change?',
    detectedRisks: [
      'The words "just" and "quickly" are carrying suspicious emotional load.',
      'Regression scope may be larger than the code diff suggests.',
      'Test data, permissions, and integration points still matter.',
    ],
    actions: ['Identify touched workflows', 'Run targeted smoke checks', 'Document what was and was not covered'],
    status: 'Working as designed',
    recommendation: 'Approve only after the quick check becomes a responsible check.',
  },
  {
    title: 'It Works on My Machine',
    input: 'It works on my machine.',
    detectedRisks: [
      'Environment drift may be hiding the defect.',
      'Test data or feature flags may differ.',
      'The bug may need better evidence, not early retirement.',
    ],
    actions: ['Compare environments', 'Capture request and response data', 'Attach logs and exact repro steps'],
    status: 'Evidence collected',
    recommendation: 'Turn the machine into a variable, not the final verdict.',
  },
  {
    title: 'Requirements Are Clear',
    input: 'The requirements are clear.',
    detectedRisks: [
      'Clear to whom remains under investigation.',
      'Acceptance criteria may not cover edge cases.',
      'Downstream behavior may be assumed instead of specified.',
    ],
    actions: ['Ask focused questions', 'Convert assumptions into examples', 'Confirm error and permission behavior'],
    status: 'Clarity pending',
    recommendation: 'Write the examples before the examples write the bug report.',
  },
  {
    title: 'Only One Button Changed',
    input: 'Only one button changed.',
    detectedRisks: [
      'Role-based behavior may be impacted.',
      'Error states need validation.',
      'Accessibility may be affected.',
      'API permissions may still matter.',
      'Button was not alone.',
    ],
    actions: ['Check keyboard and screen reader behavior', 'Verify permissions', 'Confirm disabled and loading states'],
    status: 'Small UI fix successfully converted into responsible regression scope.',
    recommendation: 'Treat the button as a doorway into the workflow.',
  },
  {
    title: 'No Regression Needed',
    input: 'We do not need regression.',
    detectedRisks: [
      'Confidence is being used as a test plan.',
      'Connected workflows may be affected.',
      'Recent changes may interact in non-obvious ways.',
    ],
    actions: ['Identify high-risk paths', 'Run lean regression', 'Share residual risk clearly'],
    status: 'Regression minimized, not magically removed',
    recommendation: 'Use risk-based regression instead of wish-based regression.',
  },
  {
    title: 'Release Today',
    input: 'Can we release today?',
    detectedRisks: [
      'Open defects need impact review.',
      'Rollback and monitoring plans may be missing.',
      'Last-minute fixes need focused validation.',
    ],
    actions: ['Check release blockers', 'Confirm smoke coverage', 'Validate rollback and owner readiness'],
    status: 'Release confidence check initiated',
    recommendation: 'Release when the risks are known, accepted, and monitored.',
  },
  {
    title: 'API Looks Fine',
    input: 'The API response looks fine.',
    detectedRisks: [
      'Happy-path JSON can hide authorization issues.',
      'Schema, nulls, pagination, and error handling still need checks.',
      'Response time and caching behavior may affect users.',
    ],
    actions: ['Validate schema and status codes', 'Test negative paths', 'Check auth and boundary data'],
    status: 'JSON reviewed beyond the happy path',
    recommendation: 'Trust the response after it survives unfriendly inputs.',
  },
  {
    title: 'Only UI Issue',
    input: 'This is only a UI issue.',
    detectedRisks: [
      'UI issues can block task completion.',
      'Accessibility and responsive behavior are user impact.',
      'A display bug may point to bad data or state handling.',
    ],
    actions: ['Check affected workflows', 'Review accessibility impact', 'Verify data source and state changes'],
    status: 'User impact reviewed',
    recommendation: 'Classify by user risk, not by which layer looked suspicious first.',
  },
];

export const knownIssues = [
  {
    issue: 'Needs coffee before morning SQL queries',
    severity: 'Medium',
    workaround: 'Provide coffee, then ask about joins.',
    status: 'Documented dependency',
  },
  {
    issue: 'Finds edge cases during quick checks',
    severity: 'High',
    workaround: 'Schedule realistic validation time.',
    status: 'Working as designed',
  },
  {
    issue: 'Cannot ignore suspicious UI behavior',
    severity: 'By design',
    workaround: 'Let her inspect the workflow behind it.',
    status: 'Permanent feature',
  },
  {
    issue: 'May ask too many calm questions about vague requirements',
    severity: 'Expected',
    workaround: 'Answer them before sprint review.',
    status: 'Improves release quality',
  },
  {
    issue: 'Treats "minor change" as a risk hypothesis',
    severity: 'Useful',
    workaround: 'Share diff, impacted areas, and rollback plan.',
    status: 'Active monitoring',
  },
  {
    issue: 'Writes bug reports developers can reproduce',
    severity: 'Beneficial',
    workaround: 'Fix bug, enjoy clean acceptance notes.',
    status: 'No fix planned',
  },
];

export const interviewQuestions = [
  {
    question: 'Tell me about your QA experience.',
    answer:
      'I have 10+ years of QA/SDET experience across manual testing, automation, API validation, SQL checks, CI/CD, and release risk analysis. I focus on useful coverage, clear evidence, and practical quality decisions.',
  },
  {
    question: 'What is your API testing experience?',
    answer:
      'I test APIs beyond the happy path: status codes, schemas, auth, permissions, boundary data, negative cases, and downstream data impact.',
  },
  {
    question: 'What is your automation experience?',
    answer:
      'I build automation that is readable, stable, and tied to risk. I prefer tests that explain failures clearly and support the team instead of becoming another maintenance project.',
  },
  {
    question: 'How do you approach performance testing?',
    answer:
      'I start with realistic user behavior and business risk, then look at response time, throughput, bottlenecks, recovery, and what users actually feel during load.',
  },
  {
    question: 'How do you handle unclear requirements?',
    answer:
      'I turn assumptions into examples, ask focused questions, and document expected behavior so the team can agree before code and tests drift apart.',
  },
  {
    question: 'How do you work with developers?',
    answer:
      'I bring reproducible evidence, keep the tone respectful, and collaborate on root cause and risk. The goal is not to win a bug debate; the goal is a better release.',
  },
  {
    question: 'How do you decide what to automate?',
    answer:
      'I automate stable, repeatable, high-value checks first. I avoid automating unclear or low-value behavior until the product risk justifies the maintenance cost.',
  },
];
