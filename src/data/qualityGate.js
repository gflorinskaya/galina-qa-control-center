export const automationQualityGate = [
  {
    check: 'Lint checks',
    command: 'npm run lint',
    status: 'Passing',
    signal: 'Code style and obvious mistakes are checked before changes move forward.',
  },
  {
    check: 'Unit tests',
    command: 'npm run test',
    status: 'Passing',
    signal: "Helper logic validates the app's QA-themed behavior and risk detection.",
  },
  {
    check: 'Component tests',
    command: 'npm run test',
    status: 'Passing',
    signal: 'Core portfolio sections render and interactive views stay usable.',
  },
  {
    check: 'Helper logic tests',
    command: 'npm run test',
    status: 'Passing',
    signal: 'Resume API responses, work modes, known issues, toolbox data, and case studies are validated.',
  },
  {
    check: 'Production build',
    command: 'npm run build',
    status: 'Passing',
    signal: 'Vite confirms the app can be packaged for deployment.',
  },
  {
    check: 'GitHub Actions CI',
    command: 'npm ci -> lint -> test -> build',
    status: 'Configured',
    signal: 'The repository has a repeatable quality gate for pushes and pull requests.',
  },
  {
    check: 'Coffee dependency',
    command: 'documented in known issues',
    status: 'Documented',
    signal: 'Documented as a harmless known issue. Mitigation remains warm and preferably in a mug.',
  },
];
