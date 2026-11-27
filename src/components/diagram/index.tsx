import { DirectionTwoWays, InteractivePlaceholder, VectorComponentsExplorer, VectorResultant } from "./vectors";
import {
  CircuitNetworkExplorer,
  CoulombAndFieldVisual,
  FaradayLenzExplorer,
  InclineForcesExplorer,
  InverseSquareExplorer,
} from "./physics";
import {
  AcidBaseRedoxVisual,
  EnthalpyProfileExplorer,
  GasLawsExplorer,
  ImfBoilingPointVisual,
  StoichRoadmapVisual,
  VseprPolarityExplorer,
} from "./chemistry";
import {
  AfrikaansGrammarTransformer,
  AfrikaansStompiBuilder,
  AfrikaansTransactionalTemplates,
  EnglishEditingGrammarLab,
  EnglishVisualLiteracyExplorer,
  EnglishWritingFormatsExplorer,
} from "./languages";
import {
  HistorySourceAnalysisLab,
  HistoryTimelineExplorer,
  ReligionConceptsMatrix,
  ReligionStateModelsExplorer,
  TourismForexAndItineraryLab,
  TourismSadcAndServiceExplorer,
} from "./humanities";
import {
  BusinessEnvironmentsRing,
  BusinessGanttAndCostLab,
  BusinessMarketingProductionMatrix,
  LoApsAndFundingLab,
  LoGoalsAndLifestyleWheel,
} from "./businessAndLo";
import { ExpAlwaysPositiveVisual, ExponentAnatomy, FactorPowerVisual, RootVsPowerExplorer, SurdExtraneousVisual, SurdSplitExplorer } from "./exponents";
import { CompletingSquareVisual, DiscriminantExplorer, InequalitySignVisual, LineParabolaIntersectionVisual, ParabolaVertexVisual } from "./quadratics";
import { DifferencePyramid, QuadraticDotPattern } from "./patterns";
import { CastExplorer, ReductionCircleVisual, TrigEquationWave } from "./trigonometry";
import { AverageGradientVisual, ExponentialExplorer, HyperbolaExplorer, ParabolaExplorer, TrigGraphExplorer } from "./functions";
import { ContingencyTableVisual, IndependenceExplorer, ThreeEventVennVisual, TreeDiagramVisual, VennExplorer } from "./probability";
import { DepreciationCurves, FinanceTimeline } from "./finance";
import {
  AnalyticalLineExplorer,
  CircleAngleCentre,
  CircleChordCentre,
  CyclicQuadExplorer,
  InclinationExplorer,
  TangentCircleExplorer,
  TrigRulesTriangle,
} from "./geometry";
import { HistogramPolygonVisual, MeasurementSolidsVisual, OgiveQuartilesVisual, SkewnessBoxVisual } from "./statistics";

/**
 * Lesson ```diagram blocks. First line "name: <diagram>", then "key: value" lines.
 * Add a new diagram by adding a case below (keep the toolkit in toolkit.tsx).
 */
function parse(src: string) {
  const o: Record<string, string> = {};
  for (const line of src.split("\n")) {
    const m = line.match(/^\s*([A-Za-z-]+):\s*(.*?)\s*$/);
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
    case "vector-components-explorer":
      return <VectorComponentsExplorer />;
    case "incline-forces-explorer":
      return <InclineForcesExplorer />;
    case "inverse-square-explorer":
      return <InverseSquareExplorer />;
    case "coulomb-2d-and-field-visual":
      return <CoulombAndFieldVisual />;
    case "faraday-lenz-explorer":
      return <FaradayLenzExplorer />;
    case "circuit-ohms-power-explorer":
      return <CircuitNetworkExplorer />;
    case "vsepr-polarity-explorer":
      return <VseprPolarityExplorer />;
    case "imf-boiling-point-visual":
      return <ImfBoilingPointVisual />;
    case "gas-laws-explorer":
      return <GasLawsExplorer />;
    case "stoich-roadmap-visual":
      return <StoichRoadmapVisual />;
    case "enthalpy-profile-explorer":
      return <EnthalpyProfileExplorer />;
    case "acid-base-redox-visual":
      return <AcidBaseRedoxVisual />;
    case "english-visual-literacy-explorer":
      return <EnglishVisualLiteracyExplorer />;
    case "english-editing-grammar-lab":
      return <EnglishEditingGrammarLab />;
    case "english-writing-formats-explorer":
      return <EnglishWritingFormatsExplorer />;
    case "afrikaans-stompi-builder":
      return <AfrikaansStompiBuilder />;
    case "afrikaans-grammar-transformer":
      return <AfrikaansGrammarTransformer />;
    case "afrikaans-transactional-templates":
      return <AfrikaansTransactionalTemplates />;
    case "history-source-analysis-lab":
      return <HistorySourceAnalysisLab />;
    case "history-timeline-explorer":
      return <HistoryTimelineExplorer />;
    case "religion-state-models-explorer":
      return <ReligionStateModelsExplorer />;
    case "religion-concepts-matrix":
      return <ReligionConceptsMatrix />;
    case "tourism-forex-and-itinerary-lab":
      return <TourismForexAndItineraryLab />;
    case "tourism-sadc-and-service-explorer":
      return <TourismSadcAndServiceExplorer />;
    case "business-environments-ring":
      return <BusinessEnvironmentsRing />;
    case "business-gantt-and-cost-lab":
      return <BusinessGanttAndCostLab />;
    case "business-marketing-production-matrix":
      return <BusinessMarketingProductionMatrix />;
    case "lo-aps-and-funding-lab":
      return <LoApsAndFundingLab />;
    case "lo-goals-and-lifestyle-wheel":
      return <LoGoalsAndLifestyleWheel />;
    case "interactive-placeholder":
      return <InteractivePlaceholder title={o.title ?? "Interactive"} note={o.note ?? ""} />;
    case "exponent-anatomy":
      return <ExponentAnatomy />;
    case "root-vs-power":
      return <RootVsPowerExplorer />;
    case "surd-split":
      return <SurdSplitExplorer />;
    case "factor-power":
      return <FactorPowerVisual />;
    case "exp-always-positive":
      return <ExpAlwaysPositiveVisual />;
    case "surd-extraneous-visual":
      return <SurdExtraneousVisual />;
    case "completing-square-area":
      return <CompletingSquareVisual />;
    case "parabola-vertex-visual":
      return <ParabolaVertexVisual />;
    case "discriminant-explorer":
      return <DiscriminantExplorer />;
    case "inequality-sign":
      return <InequalitySignVisual />;
    case "line-parabola-visual":
      return <LineParabolaIntersectionVisual />;
    case "difference-pyramid":
      return <DifferencePyramid />;
    case "quadratic-dot-pattern":
      return <QuadraticDotPattern />;
    case "cast-explorer":
      return <CastExplorer />;
    case "reduction-circle":
      return <ReductionCircleVisual />;
    case "trig-equation-wave":
      return <TrigEquationWave />;
    case "parabola-explorer":
      return <ParabolaExplorer />;
    case "hyperbola-explorer":
      return <HyperbolaExplorer />;
    case "exponential-explorer":
      return <ExponentialExplorer />;
    case "average-gradient-visual":
      return <AverageGradientVisual />;
    case "trig-graph-explorer":
      return <TrigGraphExplorer />;
    case "venn-explorer":
      return <VennExplorer />;
    case "three-event-venn":
      return <ThreeEventVennVisual />;
    case "independence-explorer":
      return <IndependenceExplorer />;
    case "tree-diagram-visual":
      return <TreeDiagramVisual />;
    case "contingency-table-visual":
      return <ContingencyTableVisual />;
    case "depreciation-curves":
      return <DepreciationCurves />;
    case "finance-timeline":
      return <FinanceTimeline />;
    case "analytical-line-explorer":
      return <AnalyticalLineExplorer />;
    case "inclination-explorer":
      return <InclinationExplorer />;
    case "circle-chord-centre":
      return <CircleChordCentre />;
    case "circle-angle-centre":
      return <CircleAngleCentre />;
    case "cyclic-quad-explorer":
      return <CyclicQuadExplorer />;
    case "tangent-circle-explorer":
      return <TangentCircleExplorer />;
    case "trig-rules-triangle":
      return <TrigRulesTriangle />;
    case "histogram-polygon-visual":
      return <HistogramPolygonVisual />;
    case "ogive-quartiles-visual":
      return <OgiveQuartilesVisual />;
    case "skewness-box-visual":
      return <SkewnessBoxVisual />;
    case "measurement-solids-visual":
      return <MeasurementSolidsVisual />;
    default:
      return <p className="text-sm text-muted-foreground">Unknown diagram: {o.name}</p>;
  }
}
