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

export default function ProjectVisual({
  visual,
}: {
  visual: Project['visual']
}) {
  return (
    <div className={`project-visual visual-${visual}`} aria-hidden="true">
      <div className="visual-topline">
        <span>CONCEITO DO PROJETO</span>
        <span>GP / LAB</span>
      </div>
      {visual === 'janus' && (
        <div className="janus-visual">
          <div className="janus-node small-node">
            <Database size={22} />
            <span>MEMÓRIA</span>
          </div>
          <span className="node-line" />
          <div className="janus-node main-node">
            <BrainCircuit size={43} strokeWidth={1} />
            <span>JANUS</span>
          </div>
          <span className="node-line" />
          <div className="janus-node small-node">
            <Workflow size={22} />
            <span>FERRAMENTAS</span>
          </div>
        </div>
      )}
      {visual === 'fraud' && (
        <div className="fraud-visual">
          <div className="scan-mark">
            <Fingerprint size={68} strokeWidth={1} />
          </div>
          <div>
            <span className="visual-label">TRANSAÇÕES → MODELO</span>
            <strong>
              Encontrar padrões.
              <br />
              Investigar anomalias.
            </strong>
            <div className="visual-pills">
              <span>Precisão</span>
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
            <span className="visual-label">APRENDIZADO POR REFORÇO</span>
            <strong>
              Experimentar.
              <br />
              Otimizar. Escalar.
            </strong>
            <div className="visual-pills">
              <span>Agente</span>
              <ArrowRight size={14} />
              <span>Ambiente</span>
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
            <span className="visual-label">REGRAS DE NEGÓCIO</span>
            <strong>
              Do aporte
              <br />à carteira.
            </strong>
            <div className="visual-pills">
              <span>Compra</span>
              <ArrowRight size={14} />
              <span>Rateio</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
