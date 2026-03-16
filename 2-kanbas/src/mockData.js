
import { v4 as uuidv4 } from 'uuid'

const mockData = [
    {
        id: uuidv4(),
        title: ' 📃 Por hacer',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn JavaScript'
            },
            {
                id: uuidv4(),
                title: 'Learn Git'
            },
            {
                id: uuidv4(),
                title: 'Learn Python'
            },
        ]
    },
    {
        id: uuidv4(),
        title: ' ✏️ En progreso',
        tasks: [
            {
                id: uuidv4(),
                title: 'Curso Javascript'
            },
            {
                id: uuidv4(),
                title: 'Curso React'
            }
        ]
    },
    {
        id: uuidv4(),
        title: ' ✔️ Completado',
        tasks: [
            {
                id: uuidv4(),
                title: 'Curso HTML'
            }
        ]
    }
]

export default mockData
