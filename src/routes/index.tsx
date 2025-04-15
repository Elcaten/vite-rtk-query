import { createFileRoute } from '@tanstack/react-router'
import Counter from '../features/Counter'

export const Route = createFileRoute('/')({
  component: Counter,
})
