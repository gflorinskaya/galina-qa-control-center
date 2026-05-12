export const engineeringToolbox = [
  {
    area: 'API Testing',
    tools: ['Postman', 'REST APIs', 'PyTest'],
    usage: 'Validate contracts, auth, negative paths, response schemas, status codes, and data consistency.',
    seniorSignal: 'Tests behavior behind the UI, not only the visible screen.',
  },
  {
    area: 'Test Automation',
    tools: ['Python', 'PyTest', 'Playwright', 'Selenium'],
    usage: 'Build maintainable checks with useful assertions, readable failures, and coverage tied to product risk.',
    seniorSignal: 'Automates stable high-value paths and avoids creating a second flaky product.',
  },
  {
    area: 'CI/CD',
    tools: ['GitHub Actions', 'quality gates', 'pipeline validation'],
    usage: 'Verify lint, tests, build output, and release readiness signals before changes reach users.',
    seniorSignal: 'Treats the pipeline as a product quality surface, not a decorative badge.',
  },
  {
    area: 'Data Validation',
    tools: ['SQL Server', 'backend state checks', 'test data setup'],
    usage: 'Confirm database state, record transitions, joins, counts, and side effects after UI or API actions.',
    seniorSignal: 'Checks whether the system actually changed, not only whether the button looked confident.',
  },
  {
    area: 'Cloud / DevOps',
    tools: ['Kubernetes', 'Docker', 'AWS', 'Azure', 'GCP'],
    usage: 'Review deployment behavior, environment drift, service health, configuration, and release signals.',
    seniorSignal: 'Connects test failures to infrastructure, configuration, and runtime behavior.',
  },
  {
    area: 'Performance Testing',
    tools: ['Locust', 'traffic models', 'queue analysis'],
    usage: 'Model realistic traffic, peak behavior, queue growth, latency, recovery, and user-visible delays.',
    seniorSignal: 'Asks what production will feel like before production explains it loudly.',
  },
  {
    area: 'Test Management',
    tools: ['Jira', 'Xray', 'Confluence'],
    usage: 'Organize coverage, link risks to test evidence, document decisions, and make status readable.',
    seniorSignal: 'Turns test documentation into shared understanding instead of noise.',
  },
  {
    area: 'Debugging',
    tools: ['DevTools', 'logs', 'API responses', 'database checks'],
    usage: 'Trace issues through UI behavior, network calls, backend responses, data state, and reproducible evidence.',
    seniorSignal: 'Narrows root cause with evidence before guessing at the UI.',
  },
];
