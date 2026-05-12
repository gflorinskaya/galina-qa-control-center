export const technicalCaseStudies = [
  {
    title: 'Cloud Printing Load Testing',
    problem: 'Need to validate whether a cloud printing workflow can handle realistic traffic patterns.',
    approach:
      'Built scenario-based load simulations with hospital-size patterns, traffic peaks, printer distribution modes, timing offsets, queue behavior, and recovery checks.',
    validated: [
      'API latency',
      'job creation',
      'queue growth',
      'endpoint reliability',
      'error patterns',
      'recovery behavior',
    ],
    result: 'Improved visibility into realistic load risk and release confidence.',
  },
  {
    title: 'Admin / User Management Regression Strategy',
    problem: 'User, group, and permission changes can create hidden access and workflow risks.',
    approach:
      'Combined UI validation, API checks, role-based testing, regression coverage, and exploratory testing.',
    validated: [
      'invitation flows',
      'permissions',
      'error states',
      'role behavior',
      'data consistency',
    ],
    result: 'Improved release confidence and clearer defect reporting.',
  },
  {
    title: 'API + UI Bug Investigation',
    problem: 'A UI issue may be caused by backend logic, stale data, permissions, or API response differences.',
    approach: 'Investigated through UI, DevTools, API responses, test data, and SQL/backend state.',
    validated: [
      'expected vs actual behavior',
      'reproducibility',
      'data state',
      'user impact',
    ],
    result: 'Created actionable bug reports with evidence and clear reproduction steps.',
  },
];

export const privateDataPatterns = [
  /https?:\/\//i,
  /\b[A-Z]{2,}-\d+\b/,
  /\bpatient\b/i,
  /\bclient\b/i,
  /\binternal\b/i,
  /\bproprietary\b/i,
];
