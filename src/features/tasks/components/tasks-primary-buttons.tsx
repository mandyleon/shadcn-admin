import { Download, Plus, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTasks as useTasksUI } from './tasks-provider'
import { useTasks as useTasksData } from '../data/tasks'

export function TasksPrimaryButtons() {
  const { setOpen } = useTasksUI()
  // use the data hook to get refetch and isFetching
  const { refetch, isFetching } = useTasksData()
  return (
    <div className='flex gap-2'>
      <Button
        variant='outline'
        className='space-x-1'
        onClick={() => setOpen('import')}
      >
        <span>Import</span> <Download size={18} />
      </Button>
      <Button
        className='space-x-1'
        onClick={() => setOpen('create')}
      >
        <span>Create</span> <Plus size={18} />
      </Button>
      <Button
        variant='outline'
        className='space-x-1'
  onClick={() => void refetch?.()}
        aria-label='Refresh list'
        title='Refresh list'
      >
        <span>Refresh</span>
        <RefreshCw className={`ms-2 h-4 w-4 ${isFetching ? 'animate-spin' : ''}`} />
      </Button>
    </div>
  )
}
