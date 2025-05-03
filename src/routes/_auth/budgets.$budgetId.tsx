import { createFileRoute, Link } from '@tanstack/react-router'
import { ynabApi } from '../../services/ynabApi'
import { loadQuery } from '../../utils/loadQuery'

export const Route = createFileRoute('/_auth/budgets/$budgetId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const queryData = await loadQuery(ynabApi.endpoints.getBudgetById, {
      budgetId: params.budgetId,
    })
    const budget = queryData.data?.data?.budget
    if (!budget) {
      throw Error(`Budget with id ${params.budgetId} not found`)
    }
    return budget
  },
})

function RouteComponent() {
  const budget = Route.useLoaderData()
  const params = Route.useParams()
  return (
    <div>
      <Link to="/budgets">Back</Link>
      <div>
        <h1>{budget.name}</h1>
        <div>First Month: {budget.first_month}</div>
        <div>Last Month: {budget.last_month}</div>
        <div>Last Modified: {budget.last_modified_on}</div>
      </div>
      <div>
        <h2>Accounts</h2>
        <ul>
          {budget.accounts?.map((account) => (
            <li key={account.id}>
              <Link
                to={`/accounts/$accountId/transactions`}
                params={{ accountId: account.id }}
                search={{ budgetId: params.budgetId }}
              >
                {account.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
