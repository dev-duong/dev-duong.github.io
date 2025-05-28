const ProjectUnavailable = () => (
  <div className="flex flex-col items-center justify-center h-[60vh] text-center">
    <h1 className="text-4xl font-bold mb-4">Currently Unavailable</h1>
    <p className="text-lg mb-6">
      This project page is not ready yet.
      <br />
      Please check back soon!
    </p>
    <a
      href="/projects"
      className="text-blue-500 underline hover:text-blue-700 transition"
    >
      ← Back to Projects
    </a>
  </div>
);

export default ProjectUnavailable;
