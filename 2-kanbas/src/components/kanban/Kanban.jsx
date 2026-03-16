import {useState} from "react";
import mockData from "../../mockData.js";
import {DragDropContext, Draggable, Droppable} from "@hello-pangea/dnd";
import "./kanban.scss";
import {Card} from "../card/Card.jsx";

export const Kanban = () => {
    const [data, setData] = useState(mockData);
    const onDragEnd = (result) => {
        if (!result.destination) return;
        const {source, destination} = result;
        if (source.droppableId !== destination.droppableId) {
            const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
            const destinationColIndex = data.findIndex((e) => e.id === destination.droppableId);
            const sourceCol = data[sourceColIndex];
            const destinationCol = data[destinationColIndex];
            const sourceTask = [...sourceCol.tasks];
            const destinationTask = [...destinationCol.tasks];
            const [removed] = sourceTask.splice(source.index, 1);
            destinationTask.splice(destination.index, 0, removed);
            const newData = [...data];

            newData[sourceColIndex] = {
                ...newData[sourceColIndex],
                tasks: sourceTask
            };

            newData[destinationColIndex] = {
                ...newData[destinationColIndex],
                tasks: destinationTask
            };

            setData(newData);
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="kanban">
                {
                    data.map((section) => (
                        <Droppable key={section.id} droppableId={section.id}>
                            {(provided) => (
                                <div className="kanban__section"
                                     ref={provided.innerRef}
                                     {...provided.droppableProps}
                                >
                                    <div className="kanban__section__title">{section.title}</div>
                                    <div className="kanban__section__content">
                                        {
                                            section.tasks.map((task, index) => (
                                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={{
                                                                ...provided.draggableProps.style,
                                                                opacity: snapshot.isDragging ? 0.5 : 1
                                                            }}
                                                        >
                                                            <Card>{task.title}</Card>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))
                                        }
                                        {provided.placeholder}
                                    </div>
                                </div>
                            )}
                        </Droppable>
                    ))
                }
            </div>
        </DragDropContext>
    )
}