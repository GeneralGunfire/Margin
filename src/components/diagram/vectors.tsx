import { AngleArc, Arrow, Axes, Compass, Diagram, InteractivePlaceholder, Label, Line, RightAngle, along, unit, type P } from "./toolkit";

/**
 * Vector diagrams. Physics coordinates (y up) are converted to SVG here.
 * VectorResultant draws two perpendicular vectors tail to head plus their resultant.
 * The first vector lies on the x axis (ax, signed), the second on the y axis (ay, signed).
 */
export type ResultantProps = {
  ax: number;
  ay: number;
  aLabel?: string; // label for the x-leg, e.g. "30 N"
  bLabel?: string; // label for the y-leg
  rLabel?: string; // label for the resultant
  thetaLabel?: string; // label for the angle at the tail, e.g. "θ"
  axes?: boolean; // draw +x and +y axes through the tail
  from?: "x" | "y"; // which leg the angle is measured from
  title?: string;
  desc?: string;
  caption?: string;
};

const W = 520, H = 330;

export function VectorResultant({ ax, ay, aLabel = "A", bLabel = "B", rLabel = "R", thetaLabel = "θ", axes = false, from = "x", title, desc, caption }: ResultantProps) {
  const s = Math.min(290 / Math.abs(ax || 1), 180 / Math.abs(ay || 1));
  const xs = [0, ax * s], ys = [0, ay * s];
  const cx = W / 2 - (Math.min(...xs) + Math.max(...xs)) / 2;
  const cy = H / 2 + (Math.min(...ys) + Math.max(...ys)) / 2;
  const pt = (x: number, y: number): P => [cx + x * s, cy - y * s];
  const O = pt(0, 0), A = pt(ax, 0), E = pt(ax, ay);
  const sx = Math.sign(ax) || 1, sy = Math.sign(ay) || 1;

  // Label positions, always on the outside of the triangle.
  const aPos: P = [(O[0] + A[0]) / 2, O[1] + (sy > 0 ? 24 : -24)];
  const bPos: P = [A[0] + sx * 12, (A[1] + E[1]) / 2];
  const mid = along(O, E, 0.5);
  const cDir: P = [A[0] - mid[0], A[1] - mid[1]];
  const cl = Math.hypot(cDir[0], cDir[1]) || 1;
  const rPos: P = [mid[0] - (cDir[0] / cl) * 26, mid[1] - (cDir[1] / cl) * 26];
  const leg: P = from === "x" ? A : pt(0, ay);
  const arcR = 40;
  const bis: P = (() => {
    const u = unit(O, leg);
    const v = unit(O, E);
    const m: P = [u[0] + v[0], u[1] + v[1]];
    const l = Math.hypot(m[0], m[1]) || 1;
    return [O[0] + (m[0] / l) * (arcR + 20), O[1] + (m[1] / l) * (arcR + 20)];
  })();

  return (
    <Diagram
      width={W}
      height={H}
      title={title ?? `Resultant of perpendicular vectors ${aLabel} and ${bLabel}`}
      desc={desc ?? `Vector ${aLabel} is drawn along the horizontal axis. Vector ${bLabel} starts at its head and points ${ay >= 0 ? "up" : "down"} at a right angle. The resultant ${rLabel} runs from the tail of the first to the head of the second, closing a right-angled triangle. The angle ${thetaLabel} sits at the tail.`}
      caption={caption}
    >
      {axes && <Axes origin={O} right={sx > 0 ? 70 + Math.abs(ax) * s : 70} left={sx > 0 ? 60 : 60 + Math.abs(ax) * s} up={sy > 0 ? 40 + Math.abs(ay) * s : 40} down={sy > 0 ? 40 : 40 + Math.abs(ay) * s} xLabel="+x" yLabel="+y" />}
      <Arrow from={O} to={A} role="a" />
      <Arrow from={A} to={E} role="b" />
      <Arrow from={O} to={E} role="result" />
      <RightAngle corner={A} a={O} b={E} />
      <AngleArc centre={O} a={leg} b={E} r={arcR} />
      <Label at={aPos} role="a" weight={600}>{aLabel}</Label>
      <Label at={bPos} role="b" weight={600} anchor={sx > 0 ? "start" : "end"}>{bLabel}</Label>
      <Label at={rPos} role="result" weight={600}>{rLabel}</Label>
      <Label at={bis}>{thetaLabel}</Label>
    </Diagram>
  );
}

/** The same resultant with its direction stated two ways: from the horizontal and from the vertical. */
export function DirectionTwoWays() {
  const O: P = [150, 255], A: P = [330, 255], E: P = [330, 120];
  return (
    <Diagram
      width={W}
      height={330}
      title="Stating a direction two ways"
      desc="A resultant vector points up and to the right. The angle theta is measured from the horizontal east axis, and the angle alpha is measured from the vertical north axis. The two angles add up to 90 degrees."
      caption="The same resultant R. θ is measured from the east axis, α from the north axis, and θ + α = 90°. Always say which axis your angle is measured from."
    >
      <Compass at={[455, 70]} />
      <Line from={O} to={[O[0], 70]} dashed />
      <Arrow from={O} to={A} role="a" />
      <Arrow from={A} to={E} role="b" />
      <Arrow from={O} to={E} role="result" />
      <RightAngle corner={A} a={O} b={E} />
      <AngleArc centre={O} a={A} b={E} r={52} />
      <AngleArc centre={O} a={[O[0], 70]} b={E} r={80} role="b" />
      <Label at={[O[0] + 76, O[1] - 14]}>θ</Label>
      <Label at={[O[0] + 30, O[1] - 92]} role="b">α</Label>
      <Label at={[240, 285]} role="a" weight={600}>A</Label>
      <Label at={[352, 188]} role="b" weight={600} anchor="start">B</Label>
      <Label at={[212, 172]} role="result" weight={600}>R</Label>
      <Label at={[O[0] - 8, O[1] + 24]} size={13} anchor="end">tail</Label>
    </Diagram>
  );
}

export { InteractivePlaceholder };
