import { createFileRoute, Link } from '@tanstack/react-router'
import { zodValidator } from '@tanstack/zod-adapter'
import { z } from 'zod'
import { ynabApi } from '../../../services/ynabApi'
import { loadQuery } from '../../../utils/loadQuery'

export const Route = createFileRoute('/_auth/accounts/$accountId/transactions')(
  {
    component: RouteComponent,
    validateSearch: zodValidator(
      z.object({
        budgetId: z.string(),
      }),
    ),
    loaderDeps: ({ search: { budgetId } }) => ({ budgetId }),
    loader: async ({ params, deps }) => {
      if (!deps.budgetId) {
        throw new Error('No budgetId provided')
      }

      const oneWeekAgo = new Date()
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
      const sinceDate = oneWeekAgo.toISOString().split('T')[0]

      const queryData = await loadQuery(
        ynabApi.endpoints.getTransactionsByAccount,
        {
          budgetId: deps.budgetId,
          accountId: params.accountId,
          sinceDate,
        },
      )

      return {
        transactions: queryData.data?.data?.transactions || [],
      }
    },
  },
)

function RouteComponent() {
  const data = Route.useLoaderData()
  const params = Route.useParams()
  const search = Route.useSearch()

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })

  return (
    <div>
      <Link to="/accounts/$accountId" params={{ accountId: params.accountId }} search={{ budgetId: search.budgetId }}>
        Back to account
      </Link>
      <h1>
        Recent Transactions
      </h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Payee</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{dateFormatter.format(new Date(transaction.date))}</td>
              <td>{transaction.payee_name}</td>
              <td>{transaction.category_name}</td>
              <td style={{ color: transaction.amount < 0 ? 'red' : 'green' }}>
                ${Math.abs(transaction.amount / 1000).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
