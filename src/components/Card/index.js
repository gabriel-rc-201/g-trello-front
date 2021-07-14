import React from "react";
import { useDrag } from "react-dnd";

import { Container } from "./styles";

export default function Card({ isDragging, data }) {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "CARDS",
      item: { data },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );

  return (
    <Container ref={dragRef} style={{ opacity }} isDragging={isDragging}>
      <h4>{data.name}</h4>
      <p>{data.description}</p>
    </Container>
  );
}
