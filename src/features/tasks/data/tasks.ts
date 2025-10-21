// import { faker } from '@faker-js/faker'

// // Set a fixed seed for consistent data generation
// faker.seed(12345)

//     'todo',
//     'in progress',
//     'done',
//     'canceled',
//     'backlog',
//   ] as const


// Hook principal para obtener tasks desde watches
import { useWatches } from '../../../core-watch-finder/hooks'
import { Watch } from '../../../core-watch-finder/models'
import { Task } from './schema'

export function useTasks(params = { count: 100 }) {
  const { data, ...rest } = useWatches(params)
  // Mapear los watches al tipo Task que espera el template
  const tasks: Task[] = data?.results?.map((watch: Watch) => ({
    id: String(watch.id),
    title: `${watch.brand} ${watch.model}`,
    status: 'todo', // Puedes ajustar según la lógica de tu API
    label: 'feature', // Puedes ajustar según la lógica de tu API
    priority: 'medium', // Puedes ajustar según la lógica de tu API
    description: watch.description || '',
    imageFilename: watch.imageFilename,
    dateCreated: watch.dateCreated,
    price: watch.price,
    referenceCode: watch.referenceCode,
  })) ?? []
  return { tasks, ...rest }
}

// Alias para compatibilidad
//export const useTasksFromWatches = useTasks;

// ...existing code...
