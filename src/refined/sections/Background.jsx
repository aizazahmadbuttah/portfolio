/** Fixed ambient lighting: layered radial gradients + a faint masked grid. */
export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(900px 600px at 50% -10%, rgba(59,130,246,0.18), transparent 60%)",
            "radial-gradient(700px 500px at 100% 40%, rgba(99,102,241,0.08), transparent 60%)",
            "radial-gradient(600px 500px at 0% 90%, rgba(59,130,246,0.07), transparent 60%)",
          ].join(","),
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_20%,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
    </div>
  );
}
