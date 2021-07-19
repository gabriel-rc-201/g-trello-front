import React, { useRef, useContext } from "react";
import { useDrag, useDrop } from "react-dnd";

import BoardContext from "../Board/context";

import { Container } from "./styles";

export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "CARD",
      item: { data },
      index,
      listIndex,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );

  // item -> eh o card q eu toh segurando
  // data -> eh card q ta em baixo do card q eu toh segurando
  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      const draggedId = item.data.id;
      const targetId = data.id;

      const listOutId = item.data.listId;
      const listInId = data.listId;

      if (listOutId === listInId) {
        return;
      }

      console.log("test");

      move(listOutId, listInId, draggedId, targetId);
      // item.data.listId = listInId;
    },
  });

  dragRef(dropRef(ref));
  // dragRef(ref);

  return (
    <Container ref={ref} style={{ opacity }}>
      <h4>{data.name}</h4>
      <p>{data.description}</p>
    </Container>
  );
}
