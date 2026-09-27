'use client'
export default function PrintButton() {
  return (
    <button
      className="button button-primary print-button"
      onClick={() => window.print()}
    >
      Imprimir / salvar em PDF
    </button>
  )
}
