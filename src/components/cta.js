import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Mantenlo actualizado"
      description="Debido al costo del algoritmo, es necesario presionar el botón 'Refrescar' para poder leer nuevamente sus pensamientos."
    />
    <Button>Refrescar</Button>
  </div>
)

export default CallToAction
