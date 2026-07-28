/* eslint-disable @next/next/no-img-element */
type Project = {
  number: string;
  title: string;
  subtitle: string;
  objective: string;
  contribution: string;
  tools: string[];
  process: string[];
  result: string;
  decisions: string[];
  images: { src: string; alt: string }[];
};

const projects: Project[] = [
  {
    number: "01",
    title: "Pullout Frame Design",
    subtitle: "Structural analysis & production documentation",
    objective:
      "Develop a manufacturable pullout-frame concept for a heavier-load storage application and evaluate its structural response under a 200 lb load case.",
    contribution:
      "Designed the frame concept in SolidWorks, produced a manufacturing-ready engineering drawing, and set up the SolidWorks Simulation study.",
    tools: ["SolidWorks", "SolidWorks Simulation", "Engineering drawings", "GD&T"],
    process: [
      "Defined the frame geometry around the storage product and assembly interfaces.",
      "Applied dimensions and tolerances to communicate the concept for manufacturing review.",
      "Evaluated the frame under the documented 200 lb load case and reviewed the stress distribution.",
    ],
    result:
      "Delivered a documented pullout-frame concept with an accompanying structural analysis for design review.",
    decisions: [
      "Kept the concept compatible with surrounding hardware and real assembly constraints.",
      "Used simulation as an early design-screening tool before physical fabrication.",
    ],
    images: [
      { src: "/projects/image3.webp", alt: "Pullout frame engineering drawing and CAD model" },
      { src: "/projects/image9.webp", alt: "SolidWorks Simulation stress plot for the pullout frame" },
    ],
  },
  {
    number: "02",
    title: "Modu-Max CTS+ & Modu-Cab",
    subtitle: "Modular medical-storage product development",
    objective:
      "Model and refine configurable storage hardware for manufacturing, assembly, and customer-facing space-planning workflows.",
    contribution:
      "Created and revised SolidWorks components and assemblies, designed basket-mounting features, reverse-engineered physical trays, and prepared geometry for Revit integration.",
    tools: ["SolidWorks", "Revit", "AutoCAD", "STEP/DWG export", "Dimensional inspection"],
    process: [
      "Modeled repeated structural frames, rails, baskets, panels, and connection features.",
      "Used physical parts to rebuild basket-tray geometry when source CAD and drawings were unavailable.",
      "Exported simplified, compatible assemblies for room layouts and customer visualization.",
    ],
    result:
      "Produced detailed product geometry used for engineering documentation, product configuration, and Revit-based client visualization.",
    decisions: [
      "Designed integrated grooves to support removable baskets and maintain access to stored items.",
      "Balanced assembly detail with the practical needs of downstream Revit visualization.",
    ],
    images: [
      { src: "/projects/image8.webp", alt: "Modu-Max CTS Plus SolidWorks assembly" },
      { src: "/projects/image17.webp", alt: "Modu-Cab cabinet and removable basket configuration" },
      { src: "/projects/image6.webp", alt: "Reverse-engineered wire basket tray CAD model" },
      { src: "/projects/image18.webp", alt: "Reverse-engineered perforated basket tray CAD model" },
    ],
  },
  {
    number: "03",
    title: "RC Aircraft Assembly",
    subtitle: "Additive manufacturing & systems integration",
    objective:
      "Produce and assemble flight-ready aircraft components while integrating propulsion and flight-control hardware into the airframe.",
    contribution:
      "3D-printed more than 30 components, checked fit and dimensional consistency, bonded fuselage and wing sections, and installed two motors and three servos.",
    tools: ["Bambu Lab", "RC motors", "Servos", "Calipers", "Hand assembly"],
    process: [
      "Printed aircraft components with attention to orientation and part quality.",
      "Checked fit before aligning and bonding the fuselage and wing sections.",
      "Integrated motors, servos, and control linkages, then troubleshot fitment during assembly.",
    ],
    result:
      "Completed major aircraft assembly and electromechanical integration work as part of UCI's Assembly & Systems team.",
    decisions: [
      "Verified printed-part fit before permanent bonding to reduce assembly rework.",
      "Positioned control hardware around the available internal geometry and linkage paths.",
    ],
    images: [
      { src: "/projects/image7.webp", alt: "Assembled white RC aircraft" },
      { src: "/projects/image10.webp", alt: "Top view of the RC aircraft assembly" },
      { src: "/projects/image13.webp", alt: "Servos prepared for RC aircraft integration" },
      { src: "/projects/image15.webp", alt: "Servo installed inside the RC aircraft structure" },
    ],
  },
  {
    number: "04",
    title: "Autonomous Robot",
    subtitle: "Controls, fabrication & hardware integration",
    objective:
      "Improve autonomous path execution for a competition robot while supporting the fabrication and integration of its mechanical, pneumatic, electrical, and controls systems.",
    contribution:
      "Developed and tuned Arduino/C++ control software, created calibration routines, and assisted with fabrication, wiring, and hardware integration.",
    tools: ["Arduino/C++", "SolidWorks", "Pneumatics", "Calibration", "Fabrication tools"],
    process: [
      "Built calibration routines to improve sensor accuracy and movement repeatability.",
      "Iterated motion commands and path timing through repeated testing.",
      "Connected controls work with the robot's fabricated structure, wiring, and pneumatic system.",
    ],
    result:
      "Reduced the robot's run time by approximately 15 seconds through calibration-based motion and control adjustments.",
    decisions: [
      "Prioritized repeatable sensor calibration before increasing motion speed.",
      "Adjusted controls with awareness of center of gravity and the robot's physical response.",
    ],
    images: [
      { src: "/projects/image14.webp", alt: "Fabricated autonomous competition robot" },
      { src: "/projects/image22.webp", alt: "SolidWorks model of the autonomous robot" },
      { src: "/projects/image1.webp", alt: "Underside CAD view of the autonomous robot" },
      { src: "/projects/image2.webp", alt: "Pneumatic propulsion system diagram" },
    ],
  },
  {
    number: "05",
    title: "Level 1 High-Power Rocket",
    subtitle: "Design, simulation, fabrication & flight",
    objective:
      "Design and fabricate a Level 1 certification rocket, using simulation to evaluate stability and predicted flight performance before launch.",
    contribution:
      "Designed the rocket in SolidWorks, evaluated it in OpenRocket, laser-cut the fins, 3D-printed the nose cone, checked tolerances, and assembled the airframe.",
    tools: ["SolidWorks", "OpenRocket", "Bambu Lab", "Laser cutting", "Assembly tools"],
    process: [
      "Iterated the geometry in CAD and reviewed stability and predicted performance in OpenRocket.",
      "Laser-cut the fin set and maintained alignment during airframe integration.",
      "Printed and fit-checked a custom nose cone, then adjusted the design based on assembly results.",
    ],
    result:
      "Successfully achieved Level 1 certification. The documented prediction was approximately 900 m apogee, 228 m/s maximum velocity, and a 1.3-caliber stability margin.",
    decisions: [
      "Used simulation to verify a stable configuration before committing to fabrication.",
      "Iterated the nose-cone fit from physical tolerance checks rather than relying on nominal CAD alone.",
    ],
    images: [
      { src: "/projects/image12.webp", alt: "Ricardo holding the rocket before launch" },
      { src: "/projects/image19.webp", alt: "Completed Level 1 rocket on the launch field" },
      { src: "/projects/image5.webp", alt: "Rocket fin and motor-mount assembly during fabrication" },
      { src: "/projects/image16.webp", alt: "SolidWorks model of the custom rocket nose cone" },
    ],
  },
];

const skills = [
  "SolidWorks",
  "Engineering drawings",
  "CAD assemblies",
  "SolidWorks Simulation",
  "Revit & AutoCAD",
  "Arduino / C++",
  "3D printing",
  "Laser cutting",
  "OpenRocket",
  "Fabrication & assembly",
  "Mechanical integration",
  "Electromechanical integration",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <header className="project-heading">
        <div className="project-index" aria-hidden="true">{project.number}</div>
        <div>
          <p className="eyebrow">Featured case study</p>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
      </header>

      <div className="project-gallery">
        {project.images.map((image, index) => (
          <figure className={index === 0 ? "gallery-primary" : ""} key={image.src}>
            <img
              src={image.src}
              alt={image.alt}
              className="project-image"
              loading={project.number === "01" && index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </figure>
        ))}
      </div>

      <div className="project-summary">
        <div>
          <p className="detail-label">Objective</p>
          <p>{project.objective}</p>
        </div>
        <div>
          <p className="detail-label">My contribution</p>
          <p>{project.contribution}</p>
        </div>
        <div className="result-block">
          <p className="detail-label">Key result</p>
          <p>{project.result}</p>
        </div>
      </div>

      <div className="project-details">
        <div>
          <p className="detail-label">Engineering process</p>
          <ol className="process-list">
            {project.process.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </div>
        <div>
          <p className="detail-label">Engineering decisions</p>
          <ul className="decision-list">
            {project.decisions.map((decision) => <li key={decision}>{decision}</li>)}
          </ul>
          <div className="tool-list" aria-label="Tools used">
            {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="monogram" href="#top" aria-label="Ricardo Montano, back to top">RM</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-resume" href="/Ricardo-Montano-Resume.pdf" download>Résumé <Arrow /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="availability"><span /> Seeking 2027 early-career opportunities</p>
          <h1>Ricardo<br /><span>Montano</span></h1>
          <p className="hero-role">Mechanical Engineering Student <span>at UC Irvine</span></p>
          <p className="hero-statement">
            I build mechanical systems from CAD to hardware - combining design, manufacturing, fabrication, and test to deliver reliable aerospace and electromechanical assemblies.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View projects <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href="/Ricardo-Montano-Resume.pdf" download>Download résumé</a>
            <a className="text-link" href="https://www.linkedin.com/in/rickymont2005" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a className="text-link" href="mailto:rickymont2005@gmail.com">Email <Arrow /></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Selected engineering work">
          <div className="hero-technical-label"><span>Selected hardware</span><span>2026</span></div>
          <div className="hero-image-wrap">
            <img src="/projects/image9.webp" alt="SolidWorks structural simulation of a pullout frame" className="hero-image" loading="eager" decoding="async" />
          </div>
          <div className="hero-visual-footer">
            <span>CAD / FEA / FABRICATION</span>
            <span>Irvine, California</span>
          </div>
        </div>
        <div className="hero-stats" aria-label="Portfolio highlights">
          <div><strong>40+</strong><span>Components & assemblies modeled at DSI</span></div>
          <div><strong>30+</strong><span>Flight-ready RC aircraft components produced</span></div>
          <div><strong>L1</strong><span>High-power rocket certification achieved</span></div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-kicker"><span>01</span> Profile</div>
        <div className="about-content">
          <p className="lead">Hands-on engineering, grounded in how parts are made, assembled, and tested.</p>
          <div className="about-copy">
            <p>I&apos;m a Mechanical Engineering student at UC Irvine focused on mechanical design, aerospace hardware, manufacturing, and electromechanical integration.</p>
            <p>My work spans production SolidWorks assemblies and drawings, additive manufacturing, structural simulation, controls, fabrication, and physical fit checks. I enjoy the point where a clean CAD model meets real tolerances, hardware, and test results.</p>
          </div>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section-kicker"><span>02</span> Experience</div>
        <div className="experience-card">
          <div className="experience-topline">
            <div>
              <p className="eyebrow">Distribution Systems International</p>
              <h2>Product & Design Engineering Intern</h2>
            </div>
            <p>June 2026 - Present</p>
          </div>
          <div className="experience-body">
            <p className="experience-intro">Supporting modular hospital-storage product development from concept and reverse engineering through manufacturing documentation and customer visualization.</p>
            <ul>
              <li>Revised 30+ engineering drawings and modeled 40+ components and assemblies in SolidWorks.</li>
              <li>Applied GD&T and dimensional tolerancing while designing around fabrication and assembly constraints.</li>
              <li>Performed dimensional inspections, fit checks, and functional testing to diagnose issues and guide hardware revisions.</li>
              <li>Maintained bills of materials and exported assemblies for 10+ customer-facing Revit layouts.</li>
            </ul>
          </div>
          <div className="experience-footer"><span>SolidWorks</span><span>Engineering drawings</span><span>Manufacturing</span><span>Revit integration</span></div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-kicker"><span>03</span> Featured projects</div>
        <div className="projects-intro">
          <h2>Engineering work,<br />from intent to hardware.</h2>
          <p>Five case studies across product design, structural analysis, aerospace assembly, autonomous controls, and high-power rocketry.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => <ProjectCard project={project} key={project.number} />)}
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="section-kicker"><span>04</span> Capabilities</div>
        <div className="skills-layout">
          <div>
            <h2>Tools for the full build cycle.</h2>
            <p>From a parametric model and drawing package to fabrication, integration, and test.</p>
          </div>
          <div className="skill-grid">
            {skills.map((skill, index) => <div className="skill-item" key={skill}><span>{String(index + 1).padStart(2, "0")}</span>{skill}</div>)}
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <p className="eyebrow">Let&apos;s build what comes next.</p>
        <h2>Open to 2027 mechanical,<br />aerospace & integration roles.</h2>
        <p className="contact-copy">Interested in mechanical design, manufacturing, test, and aerospace hardware opportunities.</p>
        <div className="contact-actions">
          <a className="button button-light" href="mailto:rickymont2005@gmail.com">rickymont2005@gmail.com <Arrow /></a>
          <a className="button button-outline" href="https://www.linkedin.com/in/rickymont2005" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a className="button button-outline" href="/Ricardo-Montano-Resume.pdf" download>Download résumé ↓</a>
        </div>
        <footer>
          <span>Ricardo Montano</span>
          <span>Mechanical Engineering · UC Irvine · Class of 2027</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </section>
    </main>
  );
}
