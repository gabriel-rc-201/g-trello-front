import React from "react";
import { useDrop } from "react-dnd";

import { MdAdd } from "react-icons/md";

import Card from "../Card";

import { Container } from "./styles";

export default function List({ data, index: listIndex }) {
  // const [collectedProps, drop] = useDrop(() => ({
  //   accept: "CARD",
  // }));

  return (
    <Container>
      <header>
        <h2>{data.name}</h2>
        <button type="button">
          <MdAdd size={24} color="#FFF" />
        </button>
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>
    </Container>
  );
}
