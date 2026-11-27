import { useState } from "react";
import katex from "katex";
import { AngleArc, Arrow, Axes, Compass, Diagram, InteractivePlaceholder, Label, Line, RightAngle, along, roleColour, unit, type P } from "./toolkit";
import { cn } from "@/lib/utils";

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

function VecTex({ tex }: { tex: string }) {
  return <span dangerouslySetInnerHTML={{ __html: katex.renderToString(tex, { throwOnError: false, strict: false }) }} />;
}

/**
 * Interactive 2D vector explorer: adjust resultant magnitude R and angle theta (0..360 deg)
 * and see live x/y components, quadrant signs, and resultant triangle.
 */
export function VectorComponentsExplorer() {
  const [mag, setMag] = useState(50);
  const [deg, setDeg] = useState(37);

  const rad = (deg * Math.PI) / 180;
  const rx = mag * Math.cos(rad);
  const ry = mag * Math.sin(rad);

  const W = 320, H = 220;
  const ox = 160, oy = 110;
  const scale = 1.45;
  const ex = ox + rx * scale;
  const ey = oy - ry * scale;

  const quad =
    deg === 0 || deg === 90 || deg === 180 || deg === 270 || deg === 360
      ? "On axis"
      : deg < 90
        ? "Q I (+x, +y)"
        : deg < 180
          ? "Q II (−x, +y)"
          : deg < 270
            ? "Q III (−x, −y)"
            : "Q IV (+x, −y)";

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Interactive 2D vector &amp; components explorer</span>
        <span className="text-xs text-muted-foreground tabular-nums">{quad}</span>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[320px_1fr]">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[320px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <defs>
            <marker id="vec-exp-r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill={roleColour.result} />
            </marker>
            <marker id="vec-exp-x" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill={roleColour.a} />
            </marker>
            <marker id="vec-exp-y" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill={roleColour.b} />
            </marker>
          </defs>

          <line x1={18} y1={oy} x2={W - 18} y2={oy} stroke="var(--dg-line)" strokeOpacity={0.4} strokeWidth={1.2} />
          <line x1={ox} y1={16} x2={ox} y2={H - 16} stroke="var(--dg-line)" strokeOpacity={0.4} strokeWidth={1.2} />
          <text x={W - 20} y={oy - 6} fontSize={10} textAnchor="end" fill="var(--dg-line)">+x (E)</text>
          <text x={ox + 6} y={24} fontSize={10} fill="var(--dg-line)">+y (N)</text>

          {/* Dashed rectangle guide */}
          <line x1={ex} y1={oy} x2={ex} y2={ey} stroke="var(--dg-line)" strokeOpacity={0.35} strokeDasharray="3 3" strokeWidth={1.1} />
          <line x1={ox} y1={ey} x2={ex} y2={ey} stroke="var(--dg-line)" strokeOpacity={0.35} strokeDasharray="3 3" strokeWidth={1.1} />

          {/* x component */}
          {Math.abs(rx) > 1.5 && (
            <line x1={ox} y1={oy} x2={ex} y2={oy} stroke={roleColour.a} strokeWidth={2.3} markerEnd="url(#vec-exp-x)" />
          )}
          {/* y component drawn tail-to-head at ex */}
          {Math.abs(ry) > 1.5 && (
            <line x1={ex} y1={oy} x2={ex} y2={ey} stroke={roleColour.b} strokeWidth={2.3} markerEnd="url(#vec-exp-y)" />
          )}
          {/* Resultant */}
          <line x1={ox} y1={oy} x2={ex} y2={ey} stroke={roleColour.result} strokeWidth={2.8} markerEnd="url(#vec-exp-r)" />

          {/* Angle arc from +x axis */}
          {deg > 0 && deg < 360 && (
            <path
              d={`M ${ox + 26},${oy} A 26,26 0 ${deg > 180 ? 1 : 0} 0 ${(ox + 26 * Math.cos(rad)).toFixed(1)},${(oy - 26 * Math.sin(rad)).toFixed(1)}`}
              fill="none"
              stroke={roleColour.result}
              strokeWidth={1.5}
              strokeOpacity={0.75}
            />
          )}

          <text
            x={(ox + ex) / 2}
            y={(oy + ey) / 2 + (ry >= 0 ? -10 : 14)}
            fontSize={11}
            fontWeight={700}
            textAnchor="middle"
            fill={roleColour.result}
            style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}
          >
            R = {mag} N
          </text>
        </svg>

        <div className="space-y-3 text-xs">
          <div className="space-y-1">
            <div className="flex justify-between">
              <label htmlFor="vec-mag" className="font-medium text-foreground">Magnitude R</label>
              <span className="tabular-nums text-muted-foreground">{mag} N</span>
            </div>
            <input id="vec-mag" type="range" min={10} max={60} step={5} value={mag} onChange={(e) => setMag(Number(e.target.value))} className="w-full accent-primary" />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between">
              <label htmlFor="vec-deg" className="font-medium text-foreground">Direction θ (from +x-axis)</label>
              <span className="tabular-nums text-muted-foreground">{deg}°</span>
            </div>
            <input id="vec-deg" type="range" min={0} max={355} step={5} value={deg} onChange={(e) => setDeg(Number(e.target.value))} className="w-full accent-primary" />
          </div>

          <div className="flex flex-wrap gap-1">
            {[37, 130, 215, 310].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setDeg(preset)}
                className={cn(
                  "rounded px-2 py-0.5 text-[11px] tabular-nums transition-colors",
                  deg === preset ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
                )}
              >
                {preset}°
              </button>
            ))}
          </div>

          <div className="space-y-1.5 rounded bg-secondary/50 p-2.5 text-muted-foreground">
            <div className="overflow-x-auto"><VecTex tex={`R_x = ${mag}\\cos ${deg}^\\circ = ${rx.toFixed(1).replace(".", "{,")}\\text{ N}`} /></div>
            <div className="overflow-x-auto"><VecTex tex={`R_y = ${mag}\\sin ${deg}^\\circ = ${ry.toFixed(1).replace(".", "{,")}\\text{ N}`} /></div>
            <div className="overflow-x-auto text-foreground"><VecTex tex={`\\sqrt{R_x^2 + R_y^2} = ${Math.hypot(rx, ry).toFixed(1).replace(".", "{,")}\\text{ N}`} /></div>
          </div>
        </div>
      </div>
    </figure>
  );
}

