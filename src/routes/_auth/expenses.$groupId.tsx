import { createFileRoute } from '@tanstack/react-router'
import { splitwiseApi } from '../../services/splitwiseApi'
import { loadQuery } from '../../utils/loadQuery'

export const Route = createFileRoute('/_auth/expenses/$groupId')({
  component: RouteComponent,
  loader: async ({ params }) =>
    loadQuery(splitwiseApi.endpoints.getGetExpenses, {
      groupId: parseInt(params.groupId),
    }),
})

function RouteComponent() {
  const expenses = Route.useLoaderData()

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Group Expenses</h1>
      <div style={{ display: 'grid', gap: '20px' }}>
        {expenses?.data?.expenses?.map((expense) => (
          <div
            key={expense.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              backgroundColor: '#fff',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
              }}
            >
              <h2 style={{ margin: '0', fontSize: '1.2em' }}>
                {expense.description}
              </h2>
              <span style={{ fontWeight: 'bold' }}>
                {expense.cost} {expense.currency_code}
              </span>
            </div>
            <div style={{ color: '#666', marginBottom: '10px' }}>
              <div>
                Date: {new Date(expense.date || '').toLocaleDateString()}
              </div>
              <div>
                Created by: {expense.created_by?.first_name}{' '}
                {expense.created_by?.last_name}
              </div>
            </div>
            {expense.details && (
              <div style={{ marginBottom: '10px', color: '#444' }}>
                {expense.details}
              </div>
            )}
            <div style={{ borderTop: '1px solid #eee', paddingTop: '10px' }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '1em' }}>
                Repayments:
              </h3>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                {expense.repayments?.map((repayment, index) => (
                  <li key={index} style={{ marginBottom: '5px' }}>
                    {repayment.amount} {expense.currency_code} from user{' '}
                    {repayment.from} to user {repayment.to}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
