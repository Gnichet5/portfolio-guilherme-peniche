import {
  BrainCircuit,
  Fingerprint,
  ArrowRight,
  Workflow,
  Database,
  Cpu,
  ChartNoAxesCombined,
} from 'lucide-react'
import type { Project } from '@/lib/constants'
import type { Locale } from '@/lib/i18n'
import { copy } from '@/lib/copy'
export default function ProjectVisual({
  visual,
  locale,
}: {
  visual: Project['visual']
  locale: Locale
}) {
  const c = copy[locale].visual
  return (
    <div className={`project-visual visual-${visual}`} aria-hidden="true">
      <div className="visual-topline">
        <span>{c.concept}</span>
        <span>GP / LAB</span>
      </div>
      {visual === 'janus' && (
        <div className="janus-visual">
          <div className="janus-node small-node">
            <Database size={22} />
            <span>{c.memory}</span>
          </div>
          <span className="node-line" />
          <div className="janus-node main-node">
            <BrainCircuit size={43} strokeWidth={1} />
            <span>JANUS</span>
          </div>
          <span className="node-line" />
          <div className="janus-node small-node">
            <Workflow size={22} />
            <span>{c.tools}</span>
          </div>
        </div>
      )}
      {visual === 'fraud' && (
        <div className="fraud-visual">
          <div className="scan-mark">
            <Fingerprint size={68} strokeWidth={1} />
          </div>
          <div>
            <span className="visual-label">{c.transactions}</span>
            <strong>
              {c.fraud[0]}
              <br />
              {c.fraud[1]}
            </strong>
            <div className="visual-pills">
              <span>{c.precision}</span>
              <span>Recall</span>
              <span>F1</span>
            </div>
          </div>
        </div>
      )}
      {visual === 'research' && (
        <div className="research-visual">
          <div className="research-symbol">
            <Cpu size={48} strokeWidth={1} />
            <span className="research-orbit" />
          </div>
          <div>
            <span className="visual-label">{c.reinforcement}</span>
            <strong>
              {c.research[0]}
              <br />
              {c.research[1]}
            </strong>
            <div className="visual-pills">
              <span>{c.agent}</span>
              <ArrowRight size={14} />
              <span>{c.environment}</span>
            </div>
          </div>
        </div>
      )}
      {visual === 'finance' && (
        <div className="finance-visual">
          <div className="finance-donut">
            <ChartNoAxesCombined size={32} strokeWidth={1.4} />
          </div>
          <div>
            <span className="visual-label">{c.rules}</span>
            <strong>
              {c.finance[0]}
              <br />
              {c.finance[1]}
            </strong>
            <div className="visual-pills">
              <span>{c.purchase}</span>
              <ArrowRight size={14} />
              <span>{c.allocation}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
