import { privateDataPatterns, technicalCaseStudies } from './data/caseStudies.js';
import { knownIssues, profile, recruiterProfile, resumeEndpoints, skills, workModes } from './data/profile.js';
import { qaArcadeGames, qaArcadePrivateDataPatterns } from './data/qaArcadeGames.js';
import { automationQualityGate } from './data/qualityGate.js';
import { engineeringToolbox } from './data/toolbox.js';

export function getResumeApiResponse(path = '/resume') {
  const endpoint = resumeEndpoints.find((item) => item.path === path);

  if (!endpoint) {
    return {
      statusCode: 404,
      message: 'Endpoint not found. QA recommends checking the acceptance criteria.',
      data: null,
    };
  }

  return {
    statusCode: 200,
    method: endpoint.method,
    path: endpoint.path,
    message: 'Candidate profile loaded successfully. Healthy requirement skepticism detected.',
    data: endpoint.response,
  };
}

export function getAllResumeApiResponses() {
  return resumeEndpoints.map((endpoint) => getResumeApiResponse(endpoint.path));
}

export function calculateHireabilityScore(candidateProfile = profile) {
  const experienceScore = candidateProfile.experience.includes('10+') ? 30 : 15;
  const automationScore = candidateProfile.primaryStack.includes('PyTest') ? 20 : 10;
  const apiScore = candidateProfile.primaryStack.includes('API Testing') ? 15 : 5;
  const cloudScore = candidateProfile.primaryStack.includes('Kubernetes') ? 15 : 5;
  const communicationScore = candidateProfile.superpowers.length >= 5 ? 20 : 10;

  return experienceScore + automationScore + apiScore + cloudScore + communicationScore;
}

export function runWorkModeSimulation(modeTitle) {
  const mode = workModes.find((item) => item.title === modeTitle);

  if (!mode) {
    return {
      status: 'Unknown mode',
      detectedRisks: [],
      actions: ['Ask one calm clarifying question before proceeding.'],
      recommendation: 'Ask one calm clarifying question before proceeding.',
    };
  }

  return {
    title: mode.title,
    input: mode.input,
    detectedRisks: mode.detectedRisks,
    detectedSignals: mode.detectedRisks,
    actions: mode.actions,
    status: mode.status,
    recommendation: mode.recommendation,
  };
}

export function detectSuspiciousRequirement(requirementText) {
  const suspiciousWords = ['just', 'quick', 'quickly', 'minor', 'simple', 'as needed', 'small change', 'only'];
  const normalizedText = requirementText.toLowerCase();

  return suspiciousWords.filter((word) => normalizedText.includes(word));
}

export function expandsRegressionScope(requirementText) {
  return detectSuspiciousRequirement(requirementText).length > 0;
}

export function getRiskLevelForWorkMode(modeTitle) {
  const simulation = runWorkModeSimulation(modeTitle);
  const riskCount = simulation.detectedRisks.length;

  if (riskCount >= 5) return 'high';
  if (riskCount >= 3) return 'medium';
  if (riskCount > 0) return 'low';

  return 'unknown';
}

export function runCoffeeDependencyCheck() {
  return knownIssues.some((item) => item.issue.toLowerCase().includes('coffee') && item.workaround);
}

export function knownIssuesHaveWorkarounds() {
  return knownIssues.every((item) => Boolean(item.workaround && item.status && item.severity));
}

export function getMaxSkillLevel() {
  return Math.max(...skills.map((skill) => skill.level));
}

export function getRecruiterSummary() {
  return recruiterProfile.summary;
}

export function toolboxItemsAreComplete(items = engineeringToolbox) {
  return items.every(
    (item) =>
      Boolean(item.area) &&
      Array.isArray(item.tools) &&
      item.tools.length > 0 &&
      Boolean(item.usage) &&
      Boolean(item.seniorSignal),
  );
}

export function caseStudiesAreComplete(studies = technicalCaseStudies) {
  return studies.every(
    (study) =>
      Boolean(study.problem) &&
      Boolean(study.approach) &&
      Array.isArray(study.validated) &&
      study.validated.length > 0 &&
      Boolean(study.result),
  );
}

export function containsPrivateLookingData(value) {
  const text = Array.isArray(value) || typeof value === 'object' ? JSON.stringify(value) : String(value);

  return privateDataPatterns.some((pattern) => pattern.test(text));
}

export function caseStudiesAreEmployerSafe(studies = technicalCaseStudies) {
  return studies.every((study) => !containsPrivateLookingData(study));
}

export function qualityGateIncludesCoreChecks(gate = automationQualityGate) {
  const normalizedChecks = gate.map((item) => item.check.toLowerCase());

  return ['lint checks', 'unit tests', 'component tests', 'production build', 'github actions ci'].every((check) =>
    normalizedChecks.includes(check),
  );
}

export function qaArcadeGamesAreComplete(games = qaArcadeGames) {
  return games.every(
    (game) =>
      Boolean(game.id) &&
      Boolean(game.topic) &&
      Boolean(game.title) &&
      Boolean(game.scenario) &&
      Array.isArray(game.choices) &&
      game.choices.length > 0 &&
      game.choices.some((choice) => choice.recommended) &&
      Boolean(game.result) &&
      Boolean(game.whyItMatters) &&
      Boolean(game.takeaway),
  );
}

export function containsPrivateLookingQaArcadeData(value) {
  const text = Array.isArray(value) || typeof value === 'object' ? JSON.stringify(value) : String(value);

  return qaArcadePrivateDataPatterns.some((pattern) => pattern.test(text));
}

export function qaArcadeGamesAreEmployerSafe(games = qaArcadeGames) {
  return games.every((game) => !containsPrivateLookingQaArcadeData(game));
}
