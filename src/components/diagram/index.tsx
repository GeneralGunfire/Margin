import { DirectionTwoWays, InteractivePlaceholder, VectorResultant } from "./vectors";

/**
 * Lesson ```diagram blocks. First line "name: <diagram>", then "key: value" lines.
 * Add a new diagram by adding a case below (keep the toolkit in toolkit.tsx).
 */
function parse(src: string) {
  const o: Record<string, string> = {};
  for (const line of src.split("\n")) {
    const m = line.match(/^\s*([A-Za-z]+):\s*(.*?)\s*$/);
    if (m) o[m[1]] = m[2];
  }
  return o;
}

export function DiagramBlock({ source }: { source: string }) {
  const o = parse(source);
  switch (o.name) {
    case "perpendicular-resultant":
      return (
        <VectorResultant
          ax={Number(o.ax)} ay={Number(o.ay)} aLabel={o.aLabel} bLabel={o.bLabel} rLabel={o.rLabel} thetaLabel={o.thetaLabel}
          axes={o.axes === "true"} from={o.from === "y" ? "y" : "x"} caption={o.caption}
        />
      );
    case "direction-two-ways":
      return <DirectionTwoWays />;
    case "interactive-placeholder":
      return <InteractivePlaceholder title={o.title ?? "Interactive"} note={o.note ?? ""} />;
    default:
      return <p className="text-sm text-muted-foreground">Unknown diagram: {o.name}</p>;
  }
}
