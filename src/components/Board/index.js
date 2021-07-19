import React, { useState } from "react";
import produce from "immer";

import BoardContext from "./context";
import { loadLists } from "../../services/api";

import List from "../List";

import { Container } from "./styles";

const data = loadLists();

export default function Board() {
  const [lists, setLists] = useState(data);

  function move(fromList, toList, from, to) {
    setLists(
      produce(lists, () => {
        // console.log(fromList);
        const dragged = lists[fromList].cards[from];

        lists[fromList].cards.splice(from, 1);
        lists[toList].cards.splice(to, 0, dragged);
      })
    );
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list) => (
          <List key={list.name} data={list} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
}
