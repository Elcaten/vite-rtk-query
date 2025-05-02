import { ynabApiBase as api } from './ynabApiBase'
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<GetUserApiResponse, GetUserApiArg>({
      query: () => ({ url: `/user` }),
    }),
    getBudgets: build.query<GetBudgetsApiResponse, GetBudgetsApiArg>({
      query: (queryArg) => ({
        url: `/budgets`,
        params: {
          include_accounts: queryArg.includeAccounts,
        },
      }),
    }),
    getBudgetById: build.query<GetBudgetByIdApiResponse, GetBudgetByIdApiArg>({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}`,
        params: {
          last_knowledge_of_server: queryArg.lastKnowledgeOfServer,
        },
      }),
    }),
    getBudgetSettingsById: build.query<
      GetBudgetSettingsByIdApiResponse,
      GetBudgetSettingsByIdApiArg
    >({
      query: (queryArg) => ({ url: `/budgets/${queryArg.budgetId}/settings` }),
    }),
    getAccounts: build.query<GetAccountsApiResponse, GetAccountsApiArg>({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/accounts`,
        params: {
          last_knowledge_of_server: queryArg.lastKnowledgeOfServer,
        },
      }),
    }),
    createAccount: build.mutation<
      CreateAccountApiResponse,
      CreateAccountApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/accounts`,
        method: 'POST',
        body: queryArg.postAccountWrapper,
      }),
    }),
    getAccountById: build.query<
      GetAccountByIdApiResponse,
      GetAccountByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/accounts/${queryArg.accountId}`,
      }),
    }),
    getCategories: build.query<GetCategoriesApiResponse, GetCategoriesApiArg>({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/categories`,
        params: {
          last_knowledge_of_server: queryArg.lastKnowledgeOfServer,
        },
      }),
    }),
    getCategoryById: build.query<
      GetCategoryByIdApiResponse,
      GetCategoryByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/categories/${queryArg.categoryId}`,
      }),
    }),
    updateCategory: build.mutation<
      UpdateCategoryApiResponse,
      UpdateCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/categories/${queryArg.categoryId}`,
        method: 'PATCH',
        body: queryArg.patchCategoryWrapper,
      }),
    }),
    getMonthCategoryById: build.query<
      GetMonthCategoryByIdApiResponse,
      GetMonthCategoryByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/months/${queryArg.month}/categories/${queryArg.categoryId}`,
      }),
    }),
    updateMonthCategory: build.mutation<
      UpdateMonthCategoryApiResponse,
      UpdateMonthCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/months/${queryArg.month}/categories/${queryArg.categoryId}`,
        method: 'PATCH',
        body: queryArg.patchMonthCategoryWrapper,
      }),
    }),
    getPayees: build.query<GetPayeesApiResponse, GetPayeesApiArg>({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/payees`,
        params: {
          last_knowledge_of_server: queryArg.lastKnowledgeOfServer,
        },
      }),
    }),
    getPayeeById: build.query<GetPayeeByIdApiResponse, GetPayeeByIdApiArg>({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/payees/${queryArg.payeeId}`,
      }),
    }),
    updatePayee: build.mutation<UpdatePayeeApiResponse, UpdatePayeeApiArg>({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/payees/${queryArg.payeeId}`,
        method: 'PATCH',
        body: queryArg.patchPayeeWrapper,
      }),
    }),
    getPayeeLocations: build.query<
      GetPayeeLocationsApiResponse,
      GetPayeeLocationsApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/payee_locations`,
      }),
    }),
    getPayeeLocationById: build.query<
      GetPayeeLocationByIdApiResponse,
      GetPayeeLocationByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/payee_locations/${queryArg.payeeLocationId}`,
      }),
    }),
    getPayeeLocationsByPayee: build.query<
      GetPayeeLocationsByPayeeApiResponse,
      GetPayeeLocationsByPayeeApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/payees/${queryArg.payeeId}/payee_locations`,
      }),
    }),
    getBudgetMonths: build.query<
      GetBudgetMonthsApiResponse,
      GetBudgetMonthsApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/months`,
        params: {
          last_knowledge_of_server: queryArg.lastKnowledgeOfServer,
        },
      }),
    }),
    getBudgetMonth: build.query<
      GetBudgetMonthApiResponse,
      GetBudgetMonthApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/months/${queryArg.month}`,
      }),
    }),
    getTransactions: build.query<
      GetTransactionsApiResponse,
      GetTransactionsApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/transactions`,
        params: {
          since_date: queryArg.sinceDate,
          type: queryArg['type'],
          last_knowledge_of_server: queryArg.lastKnowledgeOfServer,
        },
      }),
    }),
    createTransaction: build.mutation<
      CreateTransactionApiResponse,
      CreateTransactionApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/transactions`,
        method: 'POST',
        body: queryArg.postTransactionsWrapper,
      }),
    }),
    updateTransactions: build.mutation<
      UpdateTransactionsApiResponse,
      UpdateTransactionsApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/transactions`,
        method: 'PATCH',
        body: queryArg.patchTransactionsWrapper,
      }),
    }),
    importTransactions: build.mutation<
      ImportTransactionsApiResponse,
      ImportTransactionsApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/transactions/import`,
        method: 'POST',
      }),
    }),
    getTransactionById: build.query<
      GetTransactionByIdApiResponse,
      GetTransactionByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/transactions/${queryArg.transactionId}`,
      }),
    }),
    updateTransaction: build.mutation<
      UpdateTransactionApiResponse,
      UpdateTransactionApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/transactions/${queryArg.transactionId}`,
        method: 'PUT',
        body: queryArg.putTransactionWrapper,
      }),
    }),
    deleteTransaction: build.mutation<
      DeleteTransactionApiResponse,
      DeleteTransactionApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/transactions/${queryArg.transactionId}`,
        method: 'DELETE',
      }),
    }),
    getTransactionsByAccount: build.query<
      GetTransactionsByAccountApiResponse,
      GetTransactionsByAccountApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/accounts/${queryArg.accountId}/transactions`,
        params: {
          since_date: queryArg.sinceDate,
          type: queryArg['type'],
          last_knowledge_of_server: queryArg.lastKnowledgeOfServer,
        },
      }),
    }),
    getTransactionsByCategory: build.query<
      GetTransactionsByCategoryApiResponse,
      GetTransactionsByCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/categories/${queryArg.categoryId}/transactions`,
        params: {
          since_date: queryArg.sinceDate,
          type: queryArg['type'],
          last_knowledge_of_server: queryArg.lastKnowledgeOfServer,
        },
      }),
    }),
    getTransactionsByPayee: build.query<
      GetTransactionsByPayeeApiResponse,
      GetTransactionsByPayeeApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/payees/${queryArg.payeeId}/transactions`,
        params: {
          since_date: queryArg.sinceDate,
          type: queryArg['type'],
          last_knowledge_of_server: queryArg.lastKnowledgeOfServer,
        },
      }),
    }),
    getTransactionsByMonth: build.query<
      GetTransactionsByMonthApiResponse,
      GetTransactionsByMonthApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/months/${queryArg.month}/transactions`,
        params: {
          since_date: queryArg.sinceDate,
          type: queryArg['type'],
          last_knowledge_of_server: queryArg.lastKnowledgeOfServer,
        },
      }),
    }),
    getScheduledTransactions: build.query<
      GetScheduledTransactionsApiResponse,
      GetScheduledTransactionsApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/scheduled_transactions`,
        params: {
          last_knowledge_of_server: queryArg.lastKnowledgeOfServer,
        },
      }),
    }),
    createScheduledTransaction: build.mutation<
      CreateScheduledTransactionApiResponse,
      CreateScheduledTransactionApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/scheduled_transactions`,
        method: 'POST',
        body: queryArg.postScheduledTransactionWrapper,
      }),
    }),
    getScheduledTransactionById: build.query<
      GetScheduledTransactionByIdApiResponse,
      GetScheduledTransactionByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/scheduled_transactions/${queryArg.scheduledTransactionId}`,
      }),
    }),
    updateScheduledTransaction: build.mutation<
      UpdateScheduledTransactionApiResponse,
      UpdateScheduledTransactionApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/scheduled_transactions/${queryArg.scheduledTransactionId}`,
        method: 'PUT',
        body: queryArg.putScheduledTransactionWrapper,
      }),
    }),
    deleteScheduledTransaction: build.mutation<
      DeleteScheduledTransactionApiResponse,
      DeleteScheduledTransactionApiArg
    >({
      query: (queryArg) => ({
        url: `/budgets/${queryArg.budgetId}/scheduled_transactions/${queryArg.scheduledTransactionId}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: false,
})
export { injectedRtkApi as ynabApi }
export type GetUserApiResponse = /** status 200 The user info */ UserResponse
export type GetUserApiArg = void
export type GetBudgetsApiResponse =
  /** status 200 The list of budgets */ BudgetSummaryResponse
export type GetBudgetsApiArg = {
  /** Whether to include the list of budget accounts */
  includeAccounts?: boolean
}
export type GetBudgetByIdApiResponse =
  /** status 200 The requested budget */ BudgetDetailResponse
export type GetBudgetByIdApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included. */
  lastKnowledgeOfServer?: number
}
export type GetBudgetSettingsByIdApiResponse =
  /** status 200 The requested budget settings */ BudgetSettingsResponse
export type GetBudgetSettingsByIdApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
}
export type GetAccountsApiResponse =
  /** status 200 The list of requested accounts */ AccountsResponse
export type GetAccountsApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included. */
  lastKnowledgeOfServer?: number
}
export type CreateAccountApiResponse =
  /** status 201 The account was successfully created */ AccountResponse
export type CreateAccountApiArg = {
  /** The id of the budget ("last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget) */
  budgetId: string
  /** The account to create. */
  postAccountWrapper: PostAccountWrapper
}
export type GetAccountByIdApiResponse =
  /** status 200 The requested account */ AccountResponse
export type GetAccountByIdApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The id of the account */
  accountId: string
}
export type GetCategoriesApiResponse =
  /** status 200 The categories grouped by category group */ CategoriesResponse
export type GetCategoriesApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included. */
  lastKnowledgeOfServer?: number
}
export type GetCategoryByIdApiResponse =
  /** status 200 The requested category */ CategoryResponse
export type GetCategoryByIdApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The id of the category */
  categoryId: string
}
export type UpdateCategoryApiResponse =
  /** status 200 The category was successfully updated */ SaveCategoryResponse
export type UpdateCategoryApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The id of the category */
  categoryId: string
  /** The category to update */
  patchCategoryWrapper: PatchCategoryWrapper
}
export type GetMonthCategoryByIdApiResponse =
  /** status 200 The requested month category */ CategoryResponse
export type GetMonthCategoryByIdApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The budget month in ISO format (e.g. 2016-12-01) ("current" can also be used to specify the current calendar month (UTC)) */
  month: string
  /** The id of the category */
  categoryId: string
}
export type UpdateMonthCategoryApiResponse =
  /** status 200 The month category was successfully updated */ SaveCategoryResponse
export type UpdateMonthCategoryApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The budget month in ISO format (e.g. 2016-12-01) ("current" can also be used to specify the current calendar month (UTC)) */
  month: string
  /** The id of the category */
  categoryId: string
  /** The category to update.  Only `budgeted` amount can be updated and any other fields specified will be ignored. */
  patchMonthCategoryWrapper: PatchMonthCategoryWrapper
}
export type GetPayeesApiResponse =
  /** status 200 The requested list of payees */ PayeesResponse
export type GetPayeesApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included. */
  lastKnowledgeOfServer?: number
}
export type GetPayeeByIdApiResponse =
  /** status 200 The requested payee */ PayeeResponse
export type GetPayeeByIdApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The id of the payee */
  payeeId: string
}
export type UpdatePayeeApiResponse =
  /** status 200 The payee was successfully updated */ SavePayeeResponse
export type UpdatePayeeApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The id of the payee */
  payeeId: string
  /** The payee to update */
  patchPayeeWrapper: PatchPayeeWrapper
}
export type GetPayeeLocationsApiResponse =
  /** status 200 The list of payee locations */ PayeeLocationsResponse
export type GetPayeeLocationsApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
}
export type GetPayeeLocationByIdApiResponse =
  /** status 200 The payee location */ PayeeLocationResponse
export type GetPayeeLocationByIdApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** id of payee location */
  payeeLocationId: string
}
export type GetPayeeLocationsByPayeeApiResponse =
  /** status 200 The list of requested payee locations */ PayeeLocationsResponse
export type GetPayeeLocationsByPayeeApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** id of payee */
  payeeId: string
}
export type GetBudgetMonthsApiResponse =
  /** status 200 The list of budget months */ MonthSummariesResponse
export type GetBudgetMonthsApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included. */
  lastKnowledgeOfServer?: number
}
export type GetBudgetMonthApiResponse =
  /** status 200 The budget month detail */ MonthDetailResponse
export type GetBudgetMonthApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The budget month in ISO format (e.g. 2016-12-01) ("current" can also be used to specify the current calendar month (UTC)) */
  month: string
}
export type GetTransactionsApiResponse =
  /** status 200 The list of requested transactions */ TransactionsResponse
export type GetTransactionsApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30). */
  sinceDate?: string
  /** If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported. */
  type?: 'uncategorized' | 'unapproved'
  /** The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included. */
  lastKnowledgeOfServer?: number
}
export type CreateTransactionApiResponse =
  /** status 201 The transaction or transactions were successfully created */ SaveTransactionsResponse
export type CreateTransactionApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The transaction or transactions to create.  To create a single transaction you can specify a value for the `transaction` object and to create multiple transactions you can specify an array of `transactions`.  It is expected that you will only provide a value for one of these objects. */
  postTransactionsWrapper: PostTransactionsWrapper
}
export type UpdateTransactionsApiResponse =
  /** status 209 The transactions were successfully updated */ SaveTransactionsResponse
export type UpdateTransactionsApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The transactions to update. Each transaction must have either an `id` or `import_id` specified. If `id` is specified as null an `import_id` value can be provided which will allow transaction(s) to be updated by its `import_id`. If an `id` is specified, it will always be used for lookup.  You should not specify both `id` and `import_id`.  Updating an `import_id` on an existing transaction is not allowed; if an `import_id` is specified, it will only be used to lookup the transaction. */
  patchTransactionsWrapper: PatchTransactionsWrapper
}
export type ImportTransactionsApiResponse =
  /** status 200 The request was successful but there were no transactions to import */
  | TransactionsImportResponse
  | /** status 201 One or more transactions were imported successfully */ TransactionsImportResponse
export type ImportTransactionsApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
}
export type GetTransactionByIdApiResponse =
  /** status 200 The requested transaction */ TransactionResponse
export type GetTransactionByIdApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The id of the transaction */
  transactionId: string
}
export type UpdateTransactionApiResponse =
  /** status 200 The transaction was successfully updated */ TransactionResponse
export type UpdateTransactionApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The id of the transaction */
  transactionId: string
  /** The transaction to update */
  putTransactionWrapper: PutTransactionWrapper
}
export type DeleteTransactionApiResponse =
  /** status 200 The transaction was successfully deleted */ TransactionResponse
export type DeleteTransactionApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The id of the transaction */
  transactionId: string
}
export type GetTransactionsByAccountApiResponse =
  /** status 200 The list of requested transactions */ TransactionsResponse
export type GetTransactionsByAccountApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The id of the account */
  accountId: string
  /** If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30). */
  sinceDate?: string
  /** If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported. */
  type?: 'uncategorized' | 'unapproved'
  /** The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included. */
  lastKnowledgeOfServer?: number
}
export type GetTransactionsByCategoryApiResponse =
  /** status 200 The list of requested transactions */ HybridTransactionsResponse
export type GetTransactionsByCategoryApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The id of the category */
  categoryId: string
  /** If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30). */
  sinceDate?: string
  /** If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported. */
  type?: 'uncategorized' | 'unapproved'
  /** The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included. */
  lastKnowledgeOfServer?: number
}
export type GetTransactionsByPayeeApiResponse =
  /** status 200 The list of requested transactions */ HybridTransactionsResponse
export type GetTransactionsByPayeeApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The id of the payee */
  payeeId: string
  /** If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30). */
  sinceDate?: string
  /** If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported. */
  type?: 'uncategorized' | 'unapproved'
  /** The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included. */
  lastKnowledgeOfServer?: number
}
export type GetTransactionsByMonthApiResponse =
  /** status 200 The list of requested transactions */ HybridTransactionsResponse
export type GetTransactionsByMonthApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The budget month in ISO format (e.g. 2016-12-01) ("current" can also be used to specify the current calendar month (UTC)) */
  month: string
  /** If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30). */
  sinceDate?: string
  /** If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported. */
  type?: 'uncategorized' | 'unapproved'
  /** The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included. */
  lastKnowledgeOfServer?: number
}
export type GetScheduledTransactionsApiResponse =
  /** status 200 The list of requested scheduled transactions */ ScheduledTransactionsResponse
export type GetScheduledTransactionsApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included. */
  lastKnowledgeOfServer?: number
}
export type CreateScheduledTransactionApiResponse =
  /** status 201 The scheduled transaction was successfully created */ ScheduledTransactionResponse
export type CreateScheduledTransactionApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The scheduled transaction to create */
  postScheduledTransactionWrapper: PostScheduledTransactionWrapper
}
export type GetScheduledTransactionByIdApiResponse =
  /** status 200 The requested Scheduled Transaction */ ScheduledTransactionResponse
export type GetScheduledTransactionByIdApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The id of the scheduled transaction */
  scheduledTransactionId: string
}
export type UpdateScheduledTransactionApiResponse =
  /** status 200 The scheduled transaction was successfully updated */ ScheduledTransactionResponse
export type UpdateScheduledTransactionApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The id of the scheduled transaction */
  scheduledTransactionId: string
  /** The scheduled transaction to update */
  putScheduledTransactionWrapper: PutScheduledTransactionWrapper
}
export type DeleteScheduledTransactionApiResponse =
  /** status 200 The scheduled transaction was successfully deleted */ ScheduledTransactionResponse
export type DeleteScheduledTransactionApiArg = {
  /** The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). */
  budgetId: string
  /** The id of the scheduled transaction */
  scheduledTransactionId: string
}
export type User = {
  id: string
}
export type UserResponse = {
  data: {
    user: User
  }
}
export type ErrorDetail = {
  id: string
  name: string
  detail: string
}
export type ErrorResponse = {
  error: ErrorDetail
}
export type DateFormat = {
  format: string
} | null
export type CurrencyFormat = {
  iso_code: string
  example_format: string
  decimal_digits: number
  decimal_separator: string
  symbol_first: boolean
  group_separator: string
  currency_symbol: string
  display_symbol: boolean
} | null
export type AccountType =
  | 'checking'
  | 'savings'
  | 'cash'
  | 'creditCard'
  | 'lineOfCredit'
  | 'otherAsset'
  | 'otherLiability'
  | 'mortgage'
  | 'autoLoan'
  | 'studentLoan'
  | 'personalLoan'
  | 'medicalDebt'
  | 'otherDebt'
export type LoanAccountPeriodicValue = {
  [key: string]: number
} | null
export type Account = {
  id: string
  name: string
  type: AccountType
  /** Whether this account is on budget or not */
  on_budget: boolean
  /** Whether this account is closed or not */
  closed: boolean
  note?: string | null
  /** The current balance of the account in milliunits format */
  balance: number
  /** The current cleared balance of the account in milliunits format */
  cleared_balance: number
  /** The current uncleared balance of the account in milliunits format */
  uncleared_balance: number
  /** The payee id which should be used when transferring to this account */
  transfer_payee_id: string | null
  /** Whether or not the account is linked to a financial institution for automatic transaction import. */
  direct_import_linked?: boolean
  /** If an account linked to a financial institution (direct_import_linked=true) and the linked connection is not in a healthy state, this will be true. */
  direct_import_in_error?: boolean
  /** A date/time specifying when the account was last reconciled. */
  last_reconciled_at?: string | null
  /** The original debt/loan account balance, specified in milliunits format. */
  debt_original_balance?: number | null
  debt_interest_rates?: LoanAccountPeriodicValue
  debt_minimum_payments?: LoanAccountPeriodicValue
  debt_escrow_amounts?: LoanAccountPeriodicValue
  /** Whether or not the account has been deleted.  Deleted accounts will only be included in delta requests. */
  deleted: boolean
}
export type BudgetSummary = {
  id: string
  name: string
  /** The last time any changes were made to the budget from either a web or mobile client */
  last_modified_on?: string
  /** The earliest budget month */
  first_month?: string
  /** The latest budget month */
  last_month?: string
  date_format?: DateFormat
  currency_format?: CurrencyFormat
  /** The budget accounts (only included if `include_accounts=true` specified as query parameter) */
  accounts?: Account[]
}
export type BudgetSummaryResponse = {
  data: {
    budgets: BudgetSummary[]
    default_budget?: BudgetSummary
  }
}
export type Payee = {
  id: string
  name: string
  /** If a transfer payee, the `account_id` to which this payee transfers to */
  transfer_account_id?: string | null
  /** Whether or not the payee has been deleted.  Deleted payees will only be included in delta requests. */
  deleted: boolean
}
export type PayeeLocation = {
  id: string
  payee_id: string
  latitude: string
  longitude: string
  /** Whether or not the payee location has been deleted.  Deleted payee locations will only be included in delta requests. */
  deleted: boolean
}
export type CategoryGroup = {
  id: string
  name: string
  /** Whether or not the category group is hidden */
  hidden: boolean
  /** Whether or not the category group has been deleted.  Deleted category groups will only be included in delta requests. */
  deleted: boolean
}
export type Category = {
  id: string
  category_group_id: string
  category_group_name?: string
  name: string
  /** Whether or not the category is hidden */
  hidden: boolean
  /** DEPRECATED: No longer used.  Value will always be null. */
  original_category_group_id?: string | null
  note?: string | null
  /** Budgeted amount in milliunits format */
  budgeted: number
  /** Activity amount in milliunits format */
  activity: number
  /** Balance in milliunits format */
  balance: number
  /** The type of goal, if the category has a goal (TB='Target Category Balance', TBD='Target Category Balance by Date', MF='Monthly Funding', NEED='Plan Your Spending') */
  goal_type?: ('TB' | 'TBD' | 'MF' | 'NEED' | 'DEBT' | null) | null
  /** Indicates the monthly rollover behavior for "NEED"-type goals. When "true", the goal will always ask for the target amount in the new month ("Set Aside"). When "false", previous month category funding is used ("Refill"). For other goal types, this field will be null. */
  goal_needs_whole_amount?: boolean | null
  /** A day offset modifier for the goal's due date. When goal_cadence is 2 (Weekly), this value specifies which day of the week the goal is due (0 = Sunday, 6 = Saturday). Otherwise, this value specifies which day of the month the goal is due (1 = 1st, 31 = 31st, null = Last day of Month). */
  goal_day?: number | null
  /** The goal cadence. Value in range 0-14. There are two subsets of these values which behave differently. For values 0, 1, 2, and 13, the goal's due date repeats every goal_cadence * goal_cadence_frequency, where 0 = None, 1 = Monthly, 2 = Weekly, and 13 = Yearly. For example, goal_cadence 1 with goal_cadence_frequency 2 means the goal is due every other month. For values 3-12 and 14, goal_cadence_frequency is ignored and the goal's due date repeats every goal_cadence, where 3 = Every 2 Months, 4 = Every 3 Months, ..., 12 = Every 11 Months, and 14 = Every 2 Years. */
  goal_cadence?: number | null
  /** The goal cadence frequency. When goal_cadence is 0, 1, 2, or 13, a goal's due date repeats every goal_cadence * goal_cadence_frequency. For example, goal_cadence 1 with goal_cadence_frequency 2 means the goal is due every other month.  When goal_cadence is 3-12 or 14, goal_cadence_frequency is ignored. */
  goal_cadence_frequency?: number | null
  /** The month a goal was created */
  goal_creation_month?: string | null
  /** The goal target amount in milliunits */
  goal_target?: number | null
  /** The original target month for the goal to be completed.  Only some goal types specify this date. */
  goal_target_month?: string | null
  /** The percentage completion of the goal */
  goal_percentage_complete?: number | null
  /** The number of months, including the current month, left in the current goal period. */
  goal_months_to_budget?: number | null
  /** The amount of funding still needed in the current month to stay on track towards completing the goal within the current goal period. This amount will generally correspond to the 'Underfunded' amount in the web and mobile clients except when viewing a category with a Needed for Spending Goal in a future month.  The web and mobile clients will ignore any funding from a prior goal period when viewing category with a Needed for Spending Goal in a future month. */
  goal_under_funded?: number | null
  /** The total amount funded towards the goal within the current goal period. */
  goal_overall_funded?: number | null
  /** The amount of funding still needed to complete the goal within the current goal period. */
  goal_overall_left?: number | null
  /** Whether or not the category has been deleted.  Deleted categories will only be included in delta requests. */
  deleted: boolean
}
export type MonthSummary = {
  month: string
  note?: string | null
  /** The total amount of transactions categorized to 'Inflow: Ready to Assign' in the month */
  income: number
  /** The total amount budgeted in the month */
  budgeted: number
  /** The total amount of transactions in the month, excluding those categorized to 'Inflow: Ready to Assign' */
  activity: number
  /** The available amount for 'Ready to Assign' */
  to_be_budgeted: number
  /** The Age of Money as of the month */
  age_of_money?: number | null
  /** Whether or not the month has been deleted.  Deleted months will only be included in delta requests. */
  deleted: boolean
}
export type MonthDetail = MonthSummary & {
  /** The budget month categories.  Amounts (budgeted, activity, balance, etc.) are specific to the {month} parameter specified. */
  categories: Category[]
}
export type TransactionClearedStatus = 'cleared' | 'uncleared' | 'reconciled'
export type TransactionFlagColor =
  | ('red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | null)
  | null
export type TransactionFlagName = string | null
export type TransactionSummary = {
  id: string
  /** The transaction date in ISO format (e.g. 2016-12-01) */
  date: string
  /** The transaction amount in milliunits format */
  amount: number
  memo?: string | null
  cleared: TransactionClearedStatus
  /** Whether or not the transaction is approved */
  approved: boolean
  flag_color?: TransactionFlagColor
  flag_name?: TransactionFlagName
  account_id: string
  payee_id?: string | null
  category_id?: string | null
  /** If a transfer transaction, the account to which it transfers */
  transfer_account_id?: string | null
  /** If a transfer transaction, the id of transaction on the other side of the transfer */
  transfer_transaction_id?: string | null
  /** If transaction is matched, the id of the matched transaction */
  matched_transaction_id?: string | null
  /** If the transaction was imported, this field is a unique (by account) import identifier.  If this transaction was imported through File Based Import or Direct Import and not through the API, the import_id will have the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'.  For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'. */
  import_id?: string | null
  /** If the transaction was imported, the payee name that was used when importing and before applying any payee rename rules */
  import_payee_name?: string | null
  /** If the transaction was imported, the original payee name as it appeared on the statement */
  import_payee_name_original?: string | null
  /** If the transaction is a debt/loan account transaction, the type of transaction */
  debt_transaction_type?:
    | (
        | 'payment'
        | 'refund'
        | 'fee'
        | 'interest'
        | 'escrow'
        | 'balanceAdjustment'
        | 'credit'
        | 'charge'
        | null
      )
    | null
  /** Whether or not the transaction has been deleted.  Deleted transactions will only be included in delta requests. */
  deleted: boolean
}
export type SubTransaction = {
  id: string
  transaction_id: string
  /** The subtransaction amount in milliunits format */
  amount: number
  memo?: string | null
  payee_id?: string | null
  payee_name?: string | null
  category_id?: string | null
  category_name?: string | null
  /** If a transfer, the account_id which the subtransaction transfers to */
  transfer_account_id?: string | null
  /** If a transfer, the id of transaction on the other side of the transfer */
  transfer_transaction_id?: string | null
  /** Whether or not the subtransaction has been deleted.  Deleted subtransactions will only be included in delta requests. */
  deleted: boolean
}
export type ScheduledTransactionSummary = {
  id: string
  /** The first date for which the Scheduled Transaction was scheduled. */
  date_first: string
  /** The next date for which the Scheduled Transaction is scheduled. */
  date_next: string
  frequency:
    | 'never'
    | 'daily'
    | 'weekly'
    | 'everyOtherWeek'
    | 'twiceAMonth'
    | 'every4Weeks'
    | 'monthly'
    | 'everyOtherMonth'
    | 'every3Months'
    | 'every4Months'
    | 'twiceAYear'
    | 'yearly'
    | 'everyOtherYear'
  /** The scheduled transaction amount in milliunits format */
  amount: number
  memo?: string | null
  flag_color?: TransactionFlagColor
  flag_name?: TransactionFlagName
  account_id: string
  payee_id?: string | null
  category_id?: string | null
  /** If a transfer, the account_id which the scheduled transaction transfers to */
  transfer_account_id?: string | null
  /** Whether or not the scheduled transaction has been deleted.  Deleted scheduled transactions will only be included in delta requests. */
  deleted: boolean
}
export type ScheduledSubTransaction = {
  id: string
  scheduled_transaction_id: string
  /** The scheduled subtransaction amount in milliunits format */
  amount: number
  memo?: string | null
  payee_id?: string | null
  payee_name?: string | null
  category_id?: string | null
  category_name?: string | null
  /** If a transfer, the account_id which the scheduled subtransaction transfers to */
  transfer_account_id?: string | null
  /** Whether or not the scheduled subtransaction has been deleted. Deleted scheduled subtransactions will only be included in delta requests. */
  deleted: boolean
}
export type BudgetDetail = BudgetSummary & {
  accounts?: Account[]
  payees?: Payee[]
  payee_locations?: PayeeLocation[]
  category_groups?: CategoryGroup[]
  categories?: Category[]
  months?: MonthDetail[]
  transactions?: TransactionSummary[]
  subtransactions?: SubTransaction[]
  scheduled_transactions?: ScheduledTransactionSummary[]
  scheduled_subtransactions?: ScheduledSubTransaction[]
}
export type BudgetDetailResponse = {
  data: {
    budget: BudgetDetail
    /** The knowledge of the server */
    server_knowledge: number
  }
}
export type BudgetSettings = {
  date_format: DateFormat
  currency_format: CurrencyFormat
}
export type BudgetSettingsResponse = {
  data: {
    settings: BudgetSettings
  }
}
export type AccountsResponse = {
  data: {
    accounts: Account[]
    /** The knowledge of the server */
    server_knowledge: number
  }
}
export type AccountResponse = {
  data: {
    account: Account
  }
}
export type SaveAccount = {
  /** The name of the account */
  name: string
  type: AccountType
  /** The current balance of the account in milliunits format */
  balance: number
}
export type PostAccountWrapper = {
  account: SaveAccount
}
export type CategoryGroupWithCategories = CategoryGroup & {
  /** Category group categories.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC). */
  categories: Category[]
}
export type CategoriesResponse = {
  data: {
    category_groups: CategoryGroupWithCategories[]
    /** The knowledge of the server */
    server_knowledge: number
  }
}
export type CategoryResponse = {
  data: {
    category: Category
  }
}
export type SaveCategoryResponse = {
  data: {
    category: Category
    /** The knowledge of the server */
    server_knowledge: number
  }
}
export type SaveCategory = {
  name?: string | null
  note?: string | null
  category_group_id?: string
  /** The goal target amount in milliunits format.  This amount can only be changed if the category already has a configured goal (goal_type != null). */
  goal_target?: number | null
}
export type PatchCategoryWrapper = {
  category: SaveCategory
}
export type SaveMonthCategory = {
  /** Budgeted amount in milliunits format */
  budgeted: number
}
export type PatchMonthCategoryWrapper = {
  category: SaveMonthCategory
}
export type PayeesResponse = {
  data: {
    payees: Payee[]
    /** The knowledge of the server */
    server_knowledge: number
  }
}
export type PayeeResponse = {
  data: {
    payee: Payee
  }
}
export type SavePayeeResponse = {
  data: {
    payee: Payee
    /** The knowledge of the server */
    server_knowledge: number
  }
}
export type SavePayee = {
  /** The name of the payee. The name must be a maximum of 500 characters. */
  name?: string
}
export type PatchPayeeWrapper = {
  payee: SavePayee
}
export type PayeeLocationsResponse = {
  data: {
    payee_locations: PayeeLocation[]
  }
}
export type PayeeLocationResponse = {
  data: {
    payee_location: PayeeLocation
  }
}
export type MonthSummariesResponse = {
  data: {
    months: MonthSummary[]
    /** The knowledge of the server */
    server_knowledge: number
  }
}
export type MonthDetailResponse = {
  data: {
    month: MonthDetail
  }
}
export type TransactionDetail = TransactionSummary & {
  account_name: string
  payee_name?: string | null
  /** The name of the category.  If a split transaction, this will be 'Split'. */
  category_name?: string | null
  /** If a split transaction, the subtransactions. */
  subtransactions: SubTransaction[]
}
export type TransactionsResponse = {
  data: {
    transactions: TransactionDetail[]
    /** The knowledge of the server */
    server_knowledge: number
  }
}
export type SaveTransactionsResponse = {
  data: {
    /** The transaction ids that were saved */
    transaction_ids: string[]
    transaction?: TransactionDetail
    /** If multiple transactions were specified, the transactions that were saved */
    transactions?: TransactionDetail[]
    /** If multiple transactions were specified, a list of import_ids that were not created because of an existing `import_id` found on the same account */
    duplicate_import_ids?: string[]
    /** The knowledge of the server */
    server_knowledge: number
  }
}
export type SaveSubTransaction = {
  /** The subtransaction amount in milliunits format. */
  amount: number
  /** The payee for the subtransaction. */
  payee_id?: string | null
  /** The payee name.  If a `payee_name` value is provided and `payee_id` has a null value, the `payee_name` value will be used to resolve the payee by either (1) a matching payee rename rule (only if import_id is also specified on parent transaction) or (2) a payee with the same name or (3) creation of a new payee. */
  payee_name?: string | null
  /** The category for the subtransaction.  Credit Card Payment categories are not permitted and will be ignored if supplied. */
  category_id?: string | null
  memo?: string | null
}
export type SaveTransactionWithOptionalFields = {
  account_id?: string
  /** The transaction date in ISO format (e.g. 2016-12-01).  Future dates (scheduled transactions) are not permitted.  Split transaction dates cannot be changed and if a different date is supplied it will be ignored. */
  date?: string
  /** The transaction amount in milliunits format.  Split transaction amounts cannot be changed and if a different amount is supplied it will be ignored. */
  amount?: number
  /** The payee for the transaction.  To create a transfer between two accounts, use the account transfer payee pointing to the target account.  Account transfer payees are specified as `transfer_payee_id` on the account resource. */
  payee_id?: string | null
  /** The payee name.  If a `payee_name` value is provided and `payee_id` has a null value, the `payee_name` value will be used to resolve the payee by either (1) a matching payee rename rule (only if `import_id` is also specified) or (2) a payee with the same name or (3) creation of a new payee. */
  payee_name?: string | null
  /** The category for the transaction.  To configure a split transaction, you can specify null for `category_id` and provide a `subtransactions` array as part of the transaction object.  If an existing transaction is a split, the `category_id` cannot be changed.  Credit Card Payment categories are not permitted and will be ignored if supplied. */
  category_id?: string | null
  memo?: string | null
  cleared?: TransactionClearedStatus
  /** Whether or not the transaction is approved.  If not supplied, transaction will be unapproved by default. */
  approved?: boolean
  flag_color?: TransactionFlagColor
  /** An array of subtransactions to configure a transaction as a split. Updating `subtransactions` on an existing split transaction is not supported. */
  subtransactions?: SaveSubTransaction[]
}
export type NewTransaction = SaveTransactionWithOptionalFields & {
  /** If specified, a new transaction will be assigned this `import_id` and considered "imported".  We will also attempt to match this imported transaction to an existing "user-entered" transaction on the same account, with the same amount, and with a date +/-10 days from the imported transaction date.<br><br>Transactions imported through File Based Import or Direct Import (not through the API) are assigned an import_id in the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'. For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.  Using a consistent format will prevent duplicates through Direct Import and File Based Import.<br><br>If import_id is omitted or specified as null, the transaction will be treated as a "user-entered" transaction. As such, it will be eligible to be matched against transactions later being imported (via DI, FBI, or API). */
  import_id?: string | null
}
export type PostTransactionsWrapper = {
  transaction?: NewTransaction
  transactions?: NewTransaction[]
}
export type SaveTransactionWithIdOrImportId = {
  /** If specified, this id will be used to lookup a transaction by its `id` for the purpose of updating the transaction itself. If not specified, an `import_id` should be supplied. */
  id?: string | null
  /** If specified, this id will be used to lookup a transaction by its `import_id` for the purpose of updating the transaction itself. If not specified, an `id` should be supplied.  You may not provide both an `id` and an `import_id` and updating an `import_id` on an existing transaction is not allowed. */
  import_id?: string | null
} & SaveTransactionWithOptionalFields
export type PatchTransactionsWrapper = {
  transactions: SaveTransactionWithIdOrImportId[]
}
export type TransactionsImportResponse = {
  data: {
    /** The list of transaction ids that were imported. */
    transaction_ids: string[]
  }
}
export type TransactionResponse = {
  data: {
    transaction: TransactionDetail
  }
}
export type ExistingTransaction = object & SaveTransactionWithOptionalFields
export type PutTransactionWrapper = {
  transaction: ExistingTransaction
}
export type HybridTransaction = TransactionSummary & {
  /** Whether the hybrid transaction represents a regular transaction or a subtransaction */
  type: 'transaction' | 'subtransaction'
  /** For subtransaction types, this is the id of the parent transaction.  For transaction types, this id will be always be null. */
  parent_transaction_id?: string | null
  account_name: string
  payee_name?: string | null
  /** The name of the category.  If a split transaction, this will be 'Split'. */
  category_name?: string
}
export type HybridTransactionsResponse = {
  data: {
    transactions: HybridTransaction[]
    /** The knowledge of the server */
    server_knowledge?: number
  }
}
export type ScheduledTransactionDetail = ScheduledTransactionSummary & {
  account_name: string
  payee_name?: string | null
  /** The name of the category.  If a split scheduled transaction, this will be 'Split'. */
  category_name?: string | null
  /** If a split scheduled transaction, the subtransactions. */
  subtransactions: ScheduledSubTransaction[]
}
export type ScheduledTransactionsResponse = {
  data: {
    scheduled_transactions: ScheduledTransactionDetail[]
    /** The knowledge of the server */
    server_knowledge: number
  }
}
export type ScheduledTransactionResponse = {
  data: {
    scheduled_transaction: ScheduledTransactionDetail
  }
}
export type ScheduledTransactionFrequency =
  | 'never'
  | 'daily'
  | 'weekly'
  | 'everyOtherWeek'
  | 'twiceAMonth'
  | 'every4Weeks'
  | 'monthly'
  | 'everyOtherMonth'
  | 'every3Months'
  | 'every4Months'
  | 'twiceAYear'
  | 'yearly'
  | 'everyOtherYear'
export type SaveScheduledTransaction = {
  account_id: string
  /** The scheduled transaction date in ISO format (e.g. 2016-12-01).  This should be a future date no more than 5 years into the future. */
  date: string
  /** The scheduled transaction amount in milliunits format. */
  amount?: number
  /** The payee for the scheduled transaction.  To create a transfer between two accounts, use the account transfer payee pointing to the target account.  Account transfer payees are specified as `transfer_payee_id` on the account resource. */
  payee_id?: string | null
  /** The payee name for the the scheduled transaction.  If a `payee_name` value is provided and `payee_id` has a null value, the `payee_name` value will be used to resolve the payee by either (1) a payee with the same name or (2) creation of a new payee. */
  payee_name?: string | null
  /** The category for the scheduled transaction. Credit Card Payment categories are not permitted. Creating a split scheduled transaction is not currently supported. */
  category_id?: string | null
  memo?: string | null
  flag_color?: TransactionFlagColor
  frequency?: ScheduledTransactionFrequency
}
export type PostScheduledTransactionWrapper = {
  scheduled_transaction: SaveScheduledTransaction
}
export type PutScheduledTransactionWrapper = {
  scheduled_transaction: SaveScheduledTransaction
}
export const {
  useGetUserQuery,
  useGetBudgetsQuery,
  useGetBudgetByIdQuery,
  useGetBudgetSettingsByIdQuery,
  useGetAccountsQuery,
  useCreateAccountMutation,
  useGetAccountByIdQuery,
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useUpdateCategoryMutation,
  useGetMonthCategoryByIdQuery,
  useUpdateMonthCategoryMutation,
  useGetPayeesQuery,
  useGetPayeeByIdQuery,
  useUpdatePayeeMutation,
  useGetPayeeLocationsQuery,
  useGetPayeeLocationByIdQuery,
  useGetPayeeLocationsByPayeeQuery,
  useGetBudgetMonthsQuery,
  useGetBudgetMonthQuery,
  useGetTransactionsQuery,
  useCreateTransactionMutation,
  useUpdateTransactionsMutation,
  useImportTransactionsMutation,
  useGetTransactionByIdQuery,
  useUpdateTransactionMutation,
  useDeleteTransactionMutation,
  useGetTransactionsByAccountQuery,
  useGetTransactionsByCategoryQuery,
  useGetTransactionsByPayeeQuery,
  useGetTransactionsByMonthQuery,
  useGetScheduledTransactionsQuery,
  useCreateScheduledTransactionMutation,
  useGetScheduledTransactionByIdQuery,
  useUpdateScheduledTransactionMutation,
  useDeleteScheduledTransactionMutation,
} = injectedRtkApi
