/** Full-screen loader shown while the session is being checked. Fades in after a beat so quick loads don't flash. */
export default function Splash() {
  return (
    <div role="status" aria-live="polite" className="splash grid min-h-screen place-items-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-5">
        <span className="text-3xl font-light tracking-tight">Margin</span>
        <span className="loader-line" aria-hidden="true" />
        <span className="sr-only">Loading</span>
      </div>
    </div>
  );
}
