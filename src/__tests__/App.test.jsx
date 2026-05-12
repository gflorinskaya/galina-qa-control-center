import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import App from '../App.jsx';

describe('Galina QA Control Center UI', () => {
  it('renders the landing status and main title', () => {
    render(<App />);

    expect(screen.getByText(/System Status: Hireable/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Galina QA Control Center/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Bug Radar/i).length).toBeGreaterThan(0);
  });

  it('uses hero links that navigate to the profile and test lab sections', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: /Run Profile Check/i })).toHaveAttribute(
      'href',
      '#professional-profile',
    );
    expect(screen.getByRole('link', { name: /Open Test Lab/i })).toHaveAttribute('href', '#test-lab');
  });

  it('uses clean section anchors without visible document numbering', () => {
    render(<App />);

    expect(screen.queryByText(/Section 02/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Section 03/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Section 0\d/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Section 1\d/i)).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Professional Profile/i }).closest('section')).toHaveAttribute(
      'id',
      'professional-profile',
    );
    expect(screen.getByRole('heading', { name: /Test Lab/i }).closest('section')).toHaveAttribute('id', 'test-lab');
  });

  it('shows profile API endpoints by default', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /Professional Profile/i })).toBeInTheDocument();
    expect(
      screen.getByText(/My QA\/SDET profile in three views: API-style experience data, practical skill tree, and recruiter-friendly highlights/i),
    ).toBeInTheDocument();
    expect(screen.getByText('/resume')).toBeInTheDocument();
    expect(screen.getByText('/skills')).toBeInTheDocument();
    expect(screen.getByText('/experience')).toBeInTheDocument();
    expect(screen.getByLabelText('/team-fit response')).toHaveTextContent('releasePhilosophy');
  });

  it('switches to the Skill Tree profile view', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /Skill Tree/i }));

    [
      'API Testing',
      'Test Automation',
      'Bug Investigation',
      'SQL / Data Validation',
      'CI/CD',
      'Kubernetes / Cloud',
      'Performance / Reliability Testing',
      'Microservices Testing',
      'Test Strategy',
      'Clear Bug Reporting',
    ].forEach((skillName) => {
      expect(screen.getByRole('heading', { name: skillName })).toBeInTheDocument();
    });
    expect(screen.getByText(/Clear Bug Reporting/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Bug Investigation level 99/i)).toBeInTheDocument();
    expect(screen.getByText(/JSON that "looks fine" until it does not/i)).toBeInTheDocument();
    expect(screen.getByText(/when the bug says "not me\."/i)).toBeInTheDocument();
    expect(screen.getByText(/fewer "but it worked locally" conversations/i)).toBeInTheDocument();
    expect(screen.getByText(/no detective work required from the developer/i)).toBeInTheDocument();
  });

  it('switches to the recruiter-readable profile view', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /Recruiter Mode/i }));

    expect(screen.getByText(/Professional Summary/i)).toBeInTheDocument();
    expect(screen.getByText(/Senior Software QA Engineer \/ SDET/i)).toBeInTheDocument();
    expect(screen.getByText(/Best Team Fit/i)).toBeInTheDocument();
  });

  it('renders test lab examples with polished sample content', () => {
    render(<App />);

    expect(
      screen.getByText(/Practical QA examples: bug reports, test cases, API checks, regression risks/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Sample Bug Report/i)).toBeInTheDocument();
    expect(screen.getByText(/Order Comment Field Accepts Long Input/i)).toBeInTheDocument();
    expect(screen.getByText(/PATCH Request Rejects Unauthorized Status Change/i)).toBeInTheDocument();
    expect(screen.getByText(/Validate with role-specific access/i)).toBeInTheDocument();
  });

  it('renders the engineering toolbox technical areas', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /Engineering Toolbox/i })).toBeInTheDocument();
    expect(screen.getByText(/Tools I use, how I use them/i)).toBeInTheDocument();
    expect(screen.getAllByText(/API Testing/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Performance Testing/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Tests behavior behind the UI/i)).toBeInTheDocument();
    expect(screen.getAllByText(/What this shows/i).length).toBeGreaterThan(0);
  });

  it('renders technical case studies in a consistent structure', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /Technical Case Studies/i })).toBeInTheDocument();
    expect(screen.getByText(/Practical examples of how I approach load, regression, permissions/i)).toBeInTheDocument();
    expect(screen.getByText(/Cloud Printing Load Testing/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Problem/i).length).toBeGreaterThanOrEqual(3);
    expect(screen.getAllByText(/Approach/i).length).toBeGreaterThanOrEqual(3);
    expect(screen.getAllByText(/Validated/i).length).toBeGreaterThanOrEqual(3);
    expect(screen.getAllByText(/Result/i).length).toBeGreaterThanOrEqual(3);
  });

  it('renders QA Arcade with all game entries', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /QA Arcade/i })).toBeInTheDocument();
    expect(screen.getByText(/Small interactive scenarios about bugs, pipelines, code, cloud, APIs, data/i)).toBeInTheDocument();
    expect(screen.getByText('Why it matters')).toBeInTheDocument();
    expect(screen.getByText('Takeaway')).toBeInTheDocument();
    expect(screen.getByText('Investigation selected')).toBeInTheDocument();
    expect(screen.getByText(/investigation coverage/i)).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /Bug Hunt|Red Flag Detector|CI\/CD Pipeline Rescue|Kubernetes Pod Panic|PyTest Puzzle|API Response Inspector|Data Detective|Load Test Lunch Rush|Permission Escape Room|Flaky Test Detective/i })).toHaveLength(10);
  });

  it('uses polished QA Arcade labels', () => {
    render(<App />);

    expect(screen.queryByText(/Funny status/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/QA\/SDET signal/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Selected actions/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Possible checks/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/generated result/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/risk coverage/i)).not.toBeInTheDocument();
  });

  it('supports QA Arcade game selection and investigation choices', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /Kubernetes Pod Panic/i }));
    await user.click(screen.getByRole('button', { name: /Check logs/i }));
    await user.click(screen.getByRole('button', { name: /Check environment variables/i }));

    expect(screen.getByText(/CrashLoopBackOff/i)).toBeInTheDocument();
    expect(screen.getByText(/Check logs, Check environment variables/i)).toBeInTheDocument();
    expect(screen.getByText(/missing API_BASE_URL environment variable/i)).toBeInTheDocument();
    expect(screen.getByText(/Environment configuration is part of release quality/i)).toBeInTheDocument();
    expect(screen.getByText(/not a deployment strategy/i)).toBeInTheDocument();
  });

  it('shows workflow risk for the one-button-change scenario', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /Only One Button Changed/i }));

    expect(screen.getByText(/Button was not alone/i)).toBeInTheDocument();
    expect(screen.getByText(/Accessibility may be affected/i)).toBeInTheDocument();
    expect(screen.getByText(/responsible regression scope/i)).toBeInTheDocument();
  });

  it('shows interview answers from the question list', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /How do you decide what to automate/i }));

    expect(screen.getByText(/I automate stable, repeatable, high-value checks first/i)).toBeInTheDocument();
  });

  it('renders the automation quality gate', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /Automation Quality Gate/i })).toBeInTheDocument();
    expect(screen.getByText(/This portfolio has its own quality gate because QA work should come with evidence/i)).toBeInTheDocument();
    expect(screen.getByText(/Lint checks/i)).toBeInTheDocument();
    expect(screen.getByText(/Unit tests/i)).toBeInTheDocument();
    expect(screen.getByText(/Production build/i)).toBeInTheDocument();
    expect(screen.getAllByText(/GitHub Actions CI/i).length).toBeGreaterThan(0);
  });

  it('documents known issues with severity, status, and practical workarounds', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /Known Issues/i })).toBeInTheDocument();
    expect(screen.getByText(/Harmless quirks, documented with the same seriousness as any good defect/i)).toBeInTheDocument();
    expect(screen.getByText(/Needs coffee before morning SQL queries/i)).toBeInTheDocument();
    expect(screen.getByText(/Finds edge cases during quick checks/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Severity/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Workaround/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Status/i).length).toBeGreaterThan(0);
  });

  it('keeps repository README checklist copy out of the visible dashboard', () => {
    render(<App />);

    expect(screen.queryByRole('heading', { name: /Project README Preview/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/What this GitHub project demonstrates at a glance/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/React\/Vite app structure with reusable sections/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/QA-focused portfolio content without private employer/i)).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Engineering Toolbox/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Technical Case Studies/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /QA Arcade/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Automation Quality Gate/i })).toBeInTheDocument();
  });

  it('does not show prompt-like or placeholder copy in the visible dashboard', () => {
    render(<App />);
    const visibleText = document.body.textContent;

    [
      'TODO',
      'placeholder',
      'Contact Placeholder',
      'Generic but realistic',
      'private endpoints',
      'client data',
      'mystery Jira breadcrumbs',
      'Funny status',
      'QA/SDET signal',
      'recommended choices',
      'privateDataIncluded',
      'testable helper logic',
      'component tests',
      'CI quality gate',
      'employer-safe',
      'Senior QA signal',
      'Short, natural answers',
      'hiring-manager questions',
      'resume data, testing instincts',
    ].forEach((phrase) => {
      expect(visibleText).not.toContain(phrase);
    });
  });

  it('renders the Professional Profile section with the updated subtitle', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /Professional Profile/i })).toBeInTheDocument();
    expect(
      screen.getByText(/API-style experience data, practical skill tree, and recruiter-friendly highlights/i),
    ).toBeInTheDocument();
  });

  it('API View includes resume-specific fields with CKA certification', () => {
    render(<App />);

    const resumeBlock = screen.getByLabelText('/resume response');

    expect(resumeBlock).toHaveTextContent('Senior Software QA Engineer / SDET');
    expect(resumeBlock).toHaveTextContent('Certified Kubernetes Administrator');
    expect(resumeBlock).toHaveTextContent('certification');
    expect(resumeBlock).toHaveTextContent('focus');
  });

  it('API View /experience shows experience areas and tools, not old project metadata', () => {
    render(<App />);

    const experienceBlock = screen.getByLabelText('/experience response');

    expect(experienceBlock).toHaveTextContent('experienceAreas');
    expect(experienceBlock).toHaveTextContent('Kubernetes');
    expect(experienceBlock).toHaveTextContent('PyTest');
    expect(experienceBlock).not.toHaveTextContent('portfolioProject');
    expect(experienceBlock).not.toHaveTextContent('QA Arcade mini-games');
  });

  it('Skill Tree contains resume-aligned tech stack terms', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /Skill Tree/i }));

    const skillTreeText = document.body.textContent;

    ['Python', 'PyTest', 'Kubernetes', 'CKA', 'AWS', 'GCP', 'Azure', 'Docker', 'Terraform', 'SQL', 'CI/CD'].forEach(
      (term) => {
        expect(skillTreeText).toContain(term);
      },
    );
  });

  it('Recruiter Mode includes Certified Kubernetes Administrator (CKA) and Python + PyTest', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /Recruiter Mode/i }));

    expect(screen.getByText(/Certified Kubernetes Administrator \(CKA\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Python \+ PyTest/i)).toBeInTheDocument();
  });

  it('Recruiter Mode Contact section renders a LinkedIn link', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /Recruiter Mode/i }));

    const linkedinLink = screen.getByRole('link', { name: /linkedin\.com\/in\/gflorinskaya/i });

    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/gflorinskaya');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    const emailLink = screen.getByRole('link', { name: /galina\.florinskaya@gmail\.com/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:galina.florinskaya@gmail.com');
  });

  it('does not show old generic project metadata in the rendered output', () => {
    render(<App />);
    const visibleText = document.body.textContent;

    ['portfolioProject', 'testable helper logic', 'privateDataIncluded', 'CI quality gate'].forEach((phrase) => {
      expect(visibleText).not.toContain(phrase);
    });
  });

  it('does not show placeholder contact addresses or credential stubs in the rendered output', () => {
    render(<App />);
    const visibleText = document.body.textContent;

    [
      'available_on_request@example.com',
      'LinkedIn placeholder',
      'GitHub placeholder',
      'QA/SDET certifications placeholder',
      'Replace this placeholder',
    ].forEach((phrase) => {
      expect(visibleText).not.toContain(phrase);
    });
  });

  it('renders the updated hero subtitle', () => {
    render(<App />);

    expect(
      screen.getByText(/automation experience, testing judgment, cloud knowledge, and release-risk thinking/i),
    ).toBeInTheDocument();
  });

  it('renders the updated Interview Mode subtitle', () => {
    render(<App />);

    expect(
      screen.getByText(/Quick answers about how I test, automate, investigate, and work with engineering teams/i),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Interview Mode/i })).toBeInTheDocument();
  });

  it('includes the updated QA Cat locally message', async () => {
    const user = userEvent.setup();
    render(<App />);

    for (let attempt = 0; attempt < 10; attempt += 1) {
      if (screen.getByLabelText(/QA Cat widget/i).textContent.includes("Let's see what CI thinks")) {
        break;
      }
      await user.click(screen.getByRole('button', { name: /Next QA Cat message/i }));
    }

    expect(screen.getByLabelText(/QA Cat widget/i)).toHaveTextContent("Let's see what CI thinks");
  });

  it('renders the QA Cat widget with a QA-themed message', () => {
    render(<App />);
    const widget = screen.getByLabelText(/QA Cat widget/i);

    expect(widget).toBeInTheDocument();
    expect(within(widget).getByText(/QA Cat/i)).toBeInTheDocument();
    expect(
      within(widget).getByText(
        /vague requirement|reproducible|pipeline failed|JSON looked innocent|quick check|Hidden buttons|P95|database|works locally|edge cases/i,
      ),
    ).toBeInTheDocument();
  });

  it('includes the polished QA Cat pipeline message', async () => {
    const user = userEvent.setup();
    render(<App />);

    for (let attempt = 0; attempt < 10; attempt += 1) {
      if (screen.getByLabelText(/QA Cat widget/i).textContent.includes('The pipeline failed. I brought logs.')) {
        break;
      }
      await user.click(screen.getByRole('button', { name: /Next QA Cat message/i }));
    }

    expect(screen.getByLabelText(/QA Cat widget/i)).toHaveTextContent('The pipeline failed. I brought logs.');
  });

  it('cycles QA Cat messages from the floating control', async () => {
    const user = userEvent.setup();
    render(<App />);
    const firstMessage = screen.getByLabelText(/QA Cat widget/i).textContent;

    await user.click(screen.getByRole('button', { name: /Next QA Cat message/i }));

    expect(screen.getByLabelText(/QA Cat widget/i).textContent).not.toBe(firstMessage);
  });

  it('minimizes the QA Cat widget to a compact control', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /Minimize QA Cat/i }));

    expect(screen.queryByLabelText(/QA Cat widget/i)).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Show QA Cat/i })).toBeInTheDocument();
  });
});
