import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import CertificationCard from "./CertificationCard";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import Skill from "./Skill";
import Title from "./Title/Title";
import WorkCard from "./WorkCard";

describe("WorkCard", () => {
  it("renders a present role and its highlights", () => {
    const markup = renderToStaticMarkup(
      <WorkCard
        id={1}
        company="Acme"
        from="2022"
        to=""
        isPresent
        designation="Engineer"
        highlights={["Built a portfolio", "Improved performance"]}
      />
    );

    expect(markup).toContain("Acme");
    expect(markup).toContain("Engineer");
    expect(markup).toContain("2022 — Present");
    expect(markup).toContain("<li>Built a portfolio</li>");
    expect(markup).toContain("<li>Improved performance</li>");
  });

  it("renders the end date and omits an empty highlights list", () => {
    const markup = renderToStaticMarkup(
      <WorkCard
        id={2}
        company="Former employer"
        from="2020"
        to="2022"
        isPresent={false}
        designation="Developer"
        highlights={[]}
      />
    );

    expect(markup).toContain("2020 — 2022");
    expect(markup).not.toContain("<ul");
  });
});

describe("ProjectCard", () => {
  it("renders project details, technologies, and available links", () => {
    const markup = renderToStaticMarkup(
      <ProjectCard
        id={1}
        title="Portfolio"
        image="project.png"
        techStack={["Next.js", "TypeScript"]}
        description="A personal portfolio."
        liveUrl="https://example.com"
        sourceUrl="https://github.com/example/project"
      />
    );

    expect(markup).toContain('alt="Portfolio"');
    expect(markup).toContain("A personal portfolio.");
    expect(markup).toContain("Next.js");
    expect(markup).toContain("TypeScript");
    expect(markup).toContain('href="https://example.com"');
    expect(markup).toContain('href="https://github.com/example/project"');
  });

  it("omits links that were not provided", () => {
    const markup = renderToStaticMarkup(
      <ProjectCard
        id={2}
        title="Private project"
        image="private.png"
        techStack={[]}
        description="A private project."
      />
    );

    expect(markup).not.toContain(">Live</a>");
    expect(markup).not.toContain(">Source</a>");
  });
});

describe("CertificationCard", () => {
  it("renders certification details and an optional badge link", () => {
    const markup = renderToStaticMarkup(
      <CertificationCard
        id={1}
        title="Cloud Certification"
        issuer="Example Academy"
        date="2025"
        expiry=""
        badge="https://example.com/badge"
      />
    );

    expect(markup).toContain("Cloud Certification");
    expect(markup).toContain("Example Academy");
    expect(markup).toContain("2025");
    expect(markup).toContain('href="https://example.com/badge"');
    expect(markup).toContain("View Badge");
  });

  it("omits the badge link when no badge is available", () => {
    const markup = renderToStaticMarkup(
      <CertificationCard
        id={2}
        title="Internal Training"
        issuer="Example Academy"
        date="2025"
        expiry=""
        badge=""
      />
    );

    expect(markup).not.toContain("View Badge");
  });
});

describe("Skill", () => {
  it("renders the skill name and its logo", () => {
    const markup = renderToStaticMarkup(
      <Skill id={1} name="TypeScript" logo="/typescript.svg" />
    );

    expect(markup).toContain("TypeScript");
    expect(markup).toContain('alt="TypeScript"');
    expect(markup).toContain("/typescript.svg");
  });
});

describe("Title", () => {
  it("renders the provided section title", () => {
    const markup = renderToStaticMarkup(<Title name="Projects" />);

    expect(markup).toContain("<h2");
    expect(markup).toContain("Projects");
  });
});

describe("Navbar", () => {
  it("renders the brand and section navigation links", () => {
    const markup = renderToStaticMarkup(<Navbar />);

    expect(markup).toContain("kishanlalbj");
    for (const section of ["Home", "About", "Work", "Projects", "Certifications", "Contact"]) {
      expect(markup).toContain(`>${section}<`);
    }
  });
});
