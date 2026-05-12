import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { technicalCaseStudies } from '../data/caseStudies.js';
import { qaCatMessages } from '../data/qaCatMessages.js';
import {
  interviewQuestions,
  knownIssues,
  profile,
  recruiterProfile,
  resumeEndpoints,
  skills,
  systemStatuses,
  testLabExamples,
  workModes,
} from '../data/profile.js';
import { qaArcadeGames } from '../data/qaArcadeGames.js';
import { automationQualityGate } from '../data/qualityGate.js';
import { engineeringToolbox } from '../data/toolbox.js';
import {
  caseStudiesAreComplete,
  caseStudiesAreEmployerSafe,
  calculateHireabilityScore,
  containsPrivateLookingData,
  containsPrivateLookingQaArcadeData,
  detectSuspiciousRequirement,
  expandsRegressionScope,
  getAllResumeApiResponses,
  getMaxSkillLevel,
  getRecruiterSummary,
  getResumeApiResponse,
  getRiskLevelForWorkMode,
  knownIssuesHaveWorkarounds,
  qualityGateIncludesCoreChecks,
  qaArcadeGamesAreComplete,
  qaArcadeGamesAreEmployerSafe,
  runCoffeeDependencyCheck,
  runWorkModeSimulation,
  toolboxItemsAreComplete,
} from '../qaBrain.js';

describe('Portfolio helper logic', () => {
  it('keeps the repository README as the project documentation source', () => {
    const readmePath = 'README.md';
    const readmeText = readFileSync(readmePath, 'utf8');

    expect(existsSync(readmePath)).toBe(true);
    expect(readmeText).toContain('# Galina QA Control Center');
    expect(readmeText).toContain('https://gflorinskaya.github.io/galina-qa-control-center/');
    expect(readmeText).toContain('## Test strategy');
    expect(readmeText).toContain('## Quality checks');
    expect(readmeText).not.toMatch(/TODO|placeholder|After GitHub Pages is configured/i);
  });

  it('documents current GitHub Pages deployment metadata', () => {
    const viteConfigText = readFileSync('vite.config.js', 'utf8');
    const deployWorkflowPath = '.github/workflows/deploy.yml';
    const deployWorkflowText = readFileSync(deployWorkflowPath, 'utf8');

    expect(viteConfigText).toContain("base: '/galina-qa-control-center/'");
    expect(existsSync(deployWorkflowPath)).toBe(true);
    expect(deployWorkflowText).toContain('actions/configure-pages@v5');
    expect(deployWorkflowText).not.toContain('enablement: true');
    expect(deployWorkflowText).toContain('FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true');
    expect(deployWorkflowText).toContain('actions/upload-pages-artifact@v3');
    expect(deployWorkflowText).toContain('actions/deploy-pages@v4');
    expect(deployWorkflowText).toContain('path: dist');
  });

  it('returns a successful resume API response', () => {
    const response = getResumeApiResponse('/resume');

    expect(response.statusCode).toBe(200);
    expect(response.data.role).toContain('SDET');
    expect(response.message).toContain('Candidate profile loaded successfully');
  });

  it('returns API-style responses for every portfolio endpoint', () => {
    const responses = getAllResumeApiResponses();

    expect(responses).toHaveLength(4);
    expect(responses.every((response) => response.statusCode === 200)).toBe(true);
    expect(responses.map((response) => response.path)).toEqual(['/resume', '/skills', '/experience', '/team-fit']);
  });

  it('calculates a hireability score above the portfolio threshold', () => {
    expect(calculateHireabilityScore()).toBeGreaterThanOrEqual(90);
  });

  it('detects vague requirement language that should trigger clarification', () => {
    const suspiciousWords = detectSuspiciousRequirement('This is just a minor small change, quick check only.');

    expect(suspiciousWords).toEqual(expect.arrayContaining(['just', 'quick', 'minor', 'small change', 'only']));
  });

  it('expands regression scope for quick-check language', () => {
    expect(expandsRegressionScope('Can you just quickly test this small change?')).toBe(true);
  });

  it('returns risk guidance for the Quick QA Check scenario', () => {
    const result = runWorkModeSimulation('Quick QA Check');

    expect(result.status).toBe('Working as designed');
    expect(result.detectedRisks.join(' ')).toMatch(/Regression scope/i);
    expect(result.recommendation).toContain('responsible check');
  });

  it('treats a one-button change as a workflow risk', () => {
    const result = runWorkModeSimulation('Only One Button Changed');

    expect(result.detectedRisks).toContain('Button was not alone.');
    expect(getRiskLevelForWorkMode('Only One Button Changed')).toBe('high');
  });

  it('keeps every work-mode scenario complete', () => {
    workModes.forEach((mode) => {
      expect(mode.detectedRisks.length).toBeGreaterThan(0);
      expect(mode.actions.length).toBeGreaterThan(0);
      expect(mode.status).toBeTruthy();
      expect(mode.recommendation).toBeTruthy();
    });
  });

  it('returns a clarification path for an unknown work mode', () => {
    const result = runWorkModeSimulation('Mystery Ticket');

    expect(result.status).toBe('Unknown mode');
    expect(result.recommendation).toContain('clarifying question');
  });

  it('keeps the coffee dependency documented as a known issue', () => {
    expect(runCoffeeDependencyCheck()).toBe(true);
  });

  it('keeps known issues actionable and complete', () => {
    expect(knownIssuesHaveWorkarounds()).toBe(true);
    expect(knownIssues.every((item) => item.workaround.length > 0)).toBe(true);
  });

  it('reports the highest skill level from the skill data', () => {
    expect(getMaxSkillLevel()).toBe(99);
  });

  it('exposes a recruiter-ready professional summary', () => {
    expect(getRecruiterSummary()).toContain('Senior Software QA Engineer / SDET');
    expect(getRecruiterSummary()).toContain('CKA-certified');
  });

  it('keeps engineering toolbox entries complete', () => {
    expect(engineeringToolbox.map((item) => item.area)).toEqual(
      expect.arrayContaining([
        'API Testing',
        'Test Automation',
        'CI/CD',
        'Data Validation',
        'Cloud / DevOps',
        'Performance Testing',
      ]),
    );
    engineeringToolbox.forEach((item) => {
      expect(item.tools.length).toBeGreaterThan(0);
      expect(item.usage).toBeTruthy();
      expect(item.seniorSignal).toBeTruthy();
    });
    expect(toolboxItemsAreComplete()).toBe(true);
  });

  it('keeps technical case studies structured around problem, approach, validation, and result', () => {
    expect(technicalCaseStudies).toHaveLength(3);
    expect(caseStudiesAreComplete()).toBe(true);
    technicalCaseStudies.forEach((caseStudy) => {
      expect(caseStudy.problem).toBeTruthy();
      expect(caseStudy.approach).toBeTruthy();
      expect(caseStudy.validated.length).toBeGreaterThan(0);
      expect(caseStudy.result).toBeTruthy();
    });
  });

  it('keeps case studies free of private-looking data', () => {
    expect(caseStudiesAreEmployerSafe()).toBe(true);
    expect(containsPrivateLookingData('BUG-123 https://internal.example.test patient record')).toBe(true);
  });

  it('covers performance, permissions, and cross-layer investigation in the case studies', () => {
    const caseStudyText = JSON.stringify(technicalCaseStudies).toLowerCase();

    expect(caseStudyText).toMatch(/load|performance|queue/);
    expect(caseStudyText).toMatch(/permissions|regression/);
    expect(caseStudyText).toContain('ui');
    expect(caseStudyText).toContain('api');
    expect(caseStudyText).toContain('sql');
  });

  it('keeps the automation quality gate aligned with CI checks', () => {
    expect(automationQualityGate.map((item) => item.check)).toEqual(
      expect.arrayContaining(['Lint checks', 'Unit tests', 'Component tests', 'Production build', 'GitHub Actions CI']),
    );
    expect(qualityGateIncludesCoreChecks()).toBe(true);
  });

  it('does not claim deployment is complete inside the quality gate', () => {
    const qualityGateText = JSON.stringify(automationQualityGate).toLowerCase();

    expect(qualityGateText).not.toContain('deployed');
    expect(qualityGateText).not.toContain('published');
    expect(qualityGateText).not.toContain('github pages');
  });

  it('keeps every QA Arcade game ready for a complete investigation flow', () => {
    expect(qaArcadeGames).toHaveLength(10);
    expect(qaArcadeGamesAreComplete()).toBe(true);
    qaArcadeGames.forEach((game) => {
      expect(game.topic).toBeTruthy();
      expect(game.scenario).toBeTruthy();
      expect(game.choices.length).toBeGreaterThan(0);
      expect(game.result).toBeTruthy();
      expect(game.whyItMatters).toBeTruthy();
      expect(game.takeaway).toBeTruthy();
    });
  });

  it('covers senior QA/SDET technical topics in QA Arcade', () => {
    const gameText = JSON.stringify(qaArcadeGames).toLowerCase();

    expect(gameText).toContain('kubernetes');
    expect(gameText).toContain('pipeline');
    expect(gameText).toContain('python');
    expect(gameText).toContain('pytest');
    expect(gameText).toContain('api');
    expect(gameText).toContain('contract');
    expect(gameText).toContain('sql');
    expect(gameText).toContain('data');
    expect(gameText).toContain('backend enforcement');
    expect(gameText).toContain('flaky');
  });

  it('keeps the Kubernetes game focused on deployment troubleshooting', () => {
    const gameText = JSON.stringify(qaArcadeGames.find((game) => game.id === 'kubernetes-pod-panic')).toLowerCase();

    expect(gameText).toContain('kubernetes');
    expect(gameText).toContain('crashloopbackoff');
    expect(gameText).toContain('environment variable');
  });

  it('keeps the CI/CD game focused on pipeline root-cause checks', () => {
    const gameText = JSON.stringify(qaArcadeGames.find((game) => game.id === 'ci-cd-pipeline-rescue')).toLowerCase();

    expect(gameText).toContain('pipeline');
    expect(gameText).toContain('github actions');
    expect(gameText).toContain('node version');
  });

  it('keeps the PyTest game focused on meaningful Python automation', () => {
    const gameText = JSON.stringify(qaArcadeGames.find((game) => game.id === 'pytest-puzzle')).toLowerCase();

    expect(gameText).toContain('python');
    expect(gameText).toContain('pytest');
    expect(gameText).toContain('fixture');
  });

  it('keeps the API game focused on contracts, permissions, and data format', () => {
    const gameText = JSON.stringify(qaArcadeGames.find((game) => game.id === 'api-response-inspector')).toLowerCase();

    expect(gameText).toContain('contract');
    expect(gameText).toContain('permissions');
    expect(gameText).toContain('iso format');
  });

  it('keeps the Data Detective game focused on SQL and backend state validation', () => {
    const gameText = JSON.stringify(qaArcadeGames.find((game) => game.id === 'data-detective')).toLowerCase();

    expect(gameText).toContain('sql');
    expect(gameText).toContain('database');
    expect(gameText).toContain('backend state');
  });

  it('keeps Permission Escape Room focused on backend/API enforcement', () => {
    const gameText = JSON.stringify(qaArcadeGames.find((game) => game.id === 'permission-escape-room')).toLowerCase();

    expect(gameText).toContain('api call');
    expect(gameText).toContain('backend enforcement');
    expect(gameText).toContain('403');
  });

  it('keeps Flaky Test Detective focused on CI, timing, data, and environment risk', () => {
    const gameText = JSON.stringify(qaArcadeGames.find((game) => game.id === 'flaky-test-detective')).toLowerCase();

    expect(gameText).toContain('ci');
    expect(gameText).toContain('timing');
    expect(gameText).toContain('test data');
    expect(gameText).toContain('environment');
  });

  it('keeps QA Arcade data free of private-looking security and environment details', () => {
    expect(qaArcadeGamesAreEmployerSafe()).toBe(true);
    expect(containsPrivateLookingQaArcadeData('https://internal.example.test secret=abc 123456789012')).toBe(true);
  });

  it('prevents private-looking content from slipping into visible portfolio data', () => {
    const portfolioDataText = JSON.stringify({
      profile,
      systemStatuses,
      resumeEndpoints,
      skills,
      recruiterProfile,
      testLabExamples,
      workModes,
      knownIssues,
      interviewQuestions,
      technicalCaseStudies,
      qaArcadeGames,
      automationQualityGate,
      engineeringToolbox,
      qaCatMessages,
    });
    const forbiddenPatterns = [
      /https?:\/\//i,
      /localhost:\d+/i,
      /\b[A-Z]{2,}-\d+\b/,
      /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/,
      /\b\d{12}\b/,
      /\b(secret|token|password)\s*[:=]/i,
      /\bpatient\b/i,
      /\bproduction data\b/i,
      /\bproprietary\b/i,
    ];

    expect(forbiddenPatterns.filter((pattern) => pattern.test(portfolioDataText))).toEqual([]);
  });
});
