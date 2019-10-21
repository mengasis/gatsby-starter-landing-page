import React from "react"

import feature from "../images/feature.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Mínimos Features"
      description="Las acciones dependerán de que tan creativo seas y de cuanto puedas pagar."
    />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>¿Qué necesitas para empezar?</h3>
        <p style={{ color: COLORS.gray }}>
          NADA. La inteligencia artificial del software puede leer tus pensamientos y se adapta a todas tus necesidades.
        </p>
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
  </div>
)

export default Content
