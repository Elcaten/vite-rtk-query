import { createFileRoute } from '@tanstack/react-router'
import DocumentList from '../features/DocumentList'

export const Route = createFileRoute('/doclist')({
  component: DocumentList,
})
