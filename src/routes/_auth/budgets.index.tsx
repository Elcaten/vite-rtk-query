import { createFileRoute, Link } from '@tanstack/react-router'
import { ynabApi } from '../../services/ynabApi'
import { loadQuery } from '../../utils/loadQuery'

export const Route = createFileRoute('/_auth/budgets/')({
  component: RouteComponent,
  loader: async () => loadQuery(ynabApi.endpoints.getBudgets, {}),
})

function RouteComponent() {
  const budgets = Route.useLoaderData()
  return (
    <div>
      <h1>Budgets</h1>
      <ul>
        {budgets.data?.data.budgets.map((budget) => (
          <li key={budget.id}>
            <Link to={`/budgets/$budgetId`} params={{ budgetId: budget.id }}>
              {budget.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
