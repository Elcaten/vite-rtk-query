import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { zodValidator } from '@tanstack/zod-adapter'
import { z } from 'zod'
import { ynabApi } from '../../../services/ynabApi'
import { loadQuery } from '../../../utils/loadQuery'

export const Route = createFileRoute('/_auth/accounts/$accountId')({
    validateSearch: zodValidator(
        z.object({
            budgetId: z.string(),
        }),
    ),
    loaderDeps: ({ search: { budgetId } }) => ({ budgetId }),
    loader: async ({ params, deps }) => {
        const queryData = await loadQuery(ynabApi.endpoints.getAccountById, {
            accountId: params.accountId,
            budgetId: deps.budgetId
        })
        const account = queryData.data?.data?.account
        if (!account) {
            throw Error(`Account with id ${params.accountId} not found`)
        }
        return account
    },
    component: RouteComponent,
})

function RouteComponent() {
    const account = Route.useLoaderData()
    const search = Route.useSearch()

    return <div>
        <Link to="/budgets/$budgetId" params={{ budgetId: search.budgetId }}>Back</Link>
        <div>
            <div>{account.name}</div>
            <Outlet />
        </div>
    </div>
}

