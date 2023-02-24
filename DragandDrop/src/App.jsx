import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const data = [
  {
    name: "name0",
  },
  {
    name: "name1",
  },
  {
    name: "name2",
  },
  {
    name: "name3",
  },
  {
    name: "name4",
  },
  {
    name: "name5",
  },
  {
    name: "name6",
  },
  {
    name: "name7",
  },
  {
    name: "name8",
  },

  {
    name: "name9",
  },
  {
    name: "name10",
  },
  {
    name: "name11",
  },

  {
    name: "name12",
  },
];
function App() {
  const [count, setCount] = useState(0);

  const [characters, updateCharacters] = useState(data);
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="App">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="provided">
          {(provided) => (
            <div
              className="provided"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {/* <div className="cont"> */}
              {characters &&
                characters.map((item, index) => {
                  return (
                    <Draggable
                      key={index}
                      draggableId={index.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="con"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {item.name}
                        </div>
                      )}
                    </Draggable>
                  );
                })}
            </div>
            // </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
