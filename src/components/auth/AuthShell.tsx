import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Artwork panel. Shows a shimmering placeholder, then fades the image in once it has loaded.
 * The image lives at public/auth-art.jpg.
 */
function Art() {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (ref.current?.complete && ref.current.naturalWidth > 0) setLoaded(true); // cached
  }, []);
  return (
    <div aria-hidden="true" className="art-placeholder relative h-full min-h-96 overflow-hidden rounded-3xl">
      <img
        ref={ref}
        src="/auth-art.jpg"
        alt=""
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-1000 ease-out motion-reduce:transition-none ${
          loaded ? "scale-100 opacity-100" : "scale-105 opacity-0"
        }`}
      />
    </div>
  );
}

/** Split sign-in layout: form on the left, artwork on the right (hidden on small screens). */
export default function AuthShell({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground lg:grid lg:grid-cols-2">
      <div className="flex min-h-screen flex-col justify-center px-6 py-12 sm:px-12 lg:px-[12%]">
        <div className="rise-group mx-auto w-full max-w-md">
          <h1 className="mb-6 text-5xl font-light tracking-tight sm:text-6xl">{title}</h1>
          {description && <p className="mb-8 text-muted-foreground">{description}</p>}
          {children}
        </div>
      </div>
      <div className="art-in hidden p-3 lg:block">
        <Art />
      </div>
    </main>
  );
}
