import { splitwiseApiBase as api } from './splitwiseApiBase'
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getGetCurrentUser: build.query<
      GetGetCurrentUserApiResponse,
      GetGetCurrentUserApiArg
    >({
      query: () => ({ url: `/get_current_user` }),
    }),
    getGetUserById: build.query<
      GetGetUserByIdApiResponse,
      GetGetUserByIdApiArg
    >({
      query: (queryArg) => ({ url: `/get_user/${queryArg.id}` }),
    }),
    postUpdateUserById: build.mutation<
      PostUpdateUserByIdApiResponse,
      PostUpdateUserByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/update_user/${queryArg.id}`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getGetGroups: build.query<GetGetGroupsApiResponse, GetGetGroupsApiArg>({
      query: () => ({ url: `/get_groups` }),
    }),
    getGetGroupById: build.query<
      GetGetGroupByIdApiResponse,
      GetGetGroupByIdApiArg
    >({
      query: (queryArg) => ({ url: `/get_group/${queryArg.id}` }),
    }),
    postCreateGroup: build.mutation<
      PostCreateGroupApiResponse,
      PostCreateGroupApiArg
    >({
      query: (queryArg) => ({
        url: `/create_group`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    postDeleteGroupById: build.mutation<
      PostDeleteGroupByIdApiResponse,
      PostDeleteGroupByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/delete_group/${queryArg.id}`,
        method: 'POST',
      }),
    }),
    postUndeleteGroupById: build.mutation<
      PostUndeleteGroupByIdApiResponse,
      PostUndeleteGroupByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/undelete_group/${queryArg.id}`,
        method: 'POST',
      }),
    }),
    postAddUserToGroup: build.mutation<
      PostAddUserToGroupApiResponse,
      PostAddUserToGroupApiArg
    >({
      query: (queryArg) => ({
        url: `/add_user_to_group`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    postRemoveUserFromGroup: build.mutation<
      PostRemoveUserFromGroupApiResponse,
      PostRemoveUserFromGroupApiArg
    >({
      query: (queryArg) => ({
        url: `/remove_user_from_group`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getGetFriends: build.query<GetGetFriendsApiResponse, GetGetFriendsApiArg>({
      query: () => ({ url: `/get_friends` }),
    }),
    getGetFriendById: build.query<
      GetGetFriendByIdApiResponse,
      GetGetFriendByIdApiArg
    >({
      query: (queryArg) => ({ url: `/get_friend/${queryArg.id}` }),
    }),
    postCreateFriend: build.mutation<
      PostCreateFriendApiResponse,
      PostCreateFriendApiArg
    >({
      query: (queryArg) => ({
        url: `/create_friend`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    postCreateFriends: build.mutation<
      PostCreateFriendsApiResponse,
      PostCreateFriendsApiArg
    >({
      query: (queryArg) => ({
        url: `/create_friends`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    postDeleteFriendById: build.mutation<
      PostDeleteFriendByIdApiResponse,
      PostDeleteFriendByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/delete_friend/${queryArg.id}`,
        method: 'POST',
      }),
    }),
    getGetCurrencies: build.query<
      GetGetCurrenciesApiResponse,
      GetGetCurrenciesApiArg
    >({
      query: () => ({ url: `/get_currencies` }),
    }),
    getGetExpenseById: build.query<
      GetGetExpenseByIdApiResponse,
      GetGetExpenseByIdApiArg
    >({
      query: (queryArg) => ({ url: `/get_expense/${queryArg.id}` }),
    }),
    getGetExpenses: build.query<
      GetGetExpensesApiResponse,
      GetGetExpensesApiArg
    >({
      query: (queryArg) => ({
        url: `/get_expenses`,
        params: {
          group_id: queryArg.groupId,
          friend_id: queryArg.friendId,
          dated_after: queryArg.datedAfter,
          dated_before: queryArg.datedBefore,
          updated_after: queryArg.updatedAfter,
          updated_before: queryArg.updatedBefore,
          limit: queryArg.limit,
          offset: queryArg.offset,
        },
      }),
    }),
    postCreateExpense: build.mutation<
      PostCreateExpenseApiResponse,
      PostCreateExpenseApiArg
    >({
      query: (queryArg) => ({
        url: `/create_expense`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    postUpdateExpenseById: build.mutation<
      PostUpdateExpenseByIdApiResponse,
      PostUpdateExpenseByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/update_expense/${queryArg.id}`,
        method: 'POST',
        body: queryArg.byShares,
      }),
    }),
    postDeleteExpenseById: build.mutation<
      PostDeleteExpenseByIdApiResponse,
      PostDeleteExpenseByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/delete_expense/${queryArg.id}`,
        method: 'POST',
      }),
    }),
    postUndeleteExpenseById: build.mutation<
      PostUndeleteExpenseByIdApiResponse,
      PostUndeleteExpenseByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/undelete_expense/${queryArg.id}`,
        method: 'POST',
      }),
    }),
    getGetComments: build.query<
      GetGetCommentsApiResponse,
      GetGetCommentsApiArg
    >({
      query: (queryArg) => ({
        url: `/get_comments`,
        params: {
          expense_id: queryArg.expenseId,
        },
      }),
    }),
    postCreateComment: build.mutation<
      PostCreateCommentApiResponse,
      PostCreateCommentApiArg
    >({
      query: (queryArg) => ({
        url: `/create_comment`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    postDeleteCommentById: build.mutation<
      PostDeleteCommentByIdApiResponse,
      PostDeleteCommentByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/delete_comment/${queryArg.id}`,
        method: 'POST',
      }),
    }),
    getGetNotifications: build.query<
      GetGetNotificationsApiResponse,
      GetGetNotificationsApiArg
    >({
      query: (queryArg) => ({
        url: `/get_notifications`,
        params: {
          updated_after: queryArg.updatedAfter,
          limit: queryArg.limit,
        },
      }),
    }),
    getGetCategories: build.query<
      GetGetCategoriesApiResponse,
      GetGetCategoriesApiArg
    >({
      query: () => ({ url: `/get_categories` }),
    }),
  }),
  overrideExisting: false,
})
export { injectedRtkApi as splitwiseApi }
export type GetGetCurrentUserApiResponse = /** status 200 OK */ {
  user?: CurrentUser
}
export type GetGetCurrentUserApiArg = void
export type GetGetUserByIdApiResponse = /** status 200 OK */ {
  user?: User
}
export type GetGetUserByIdApiArg = {
  id: number
}
export type PostUpdateUserByIdApiResponse = /** status 200 OK */ User
export type PostUpdateUserByIdApiArg = {
  id: number
  body: {
    first_name?: string
    last_name?: string
    email?: string
    password?: string
    locale?: string
    default_currency?: string
  }
}
export type GetGetGroupsApiResponse = /** status 200 OK */ {
  groups?: Group[]
}
export type GetGetGroupsApiArg = void
export type GetGetGroupByIdApiResponse = /** status 200 OK */ {
  group?: Group
}
export type GetGetGroupByIdApiArg = {
  id: number
}
export type PostCreateGroupApiResponse = /** status 200 OK */ {
  group?: Group
}
export type PostCreateGroupApiArg = {
  body: {
    name: string
    /** What is the group used for?
        
        **Note**: It is recommended to use `home` in place of `house` or `apartment`.
         */
    group_type?: 'home' | 'trip' | 'couple' | 'other' | 'apartment' | 'house'
    /** Turn on simplify debts? */
    simplify_by_default?: boolean
    [key: string]: string
  }
}
export type PostDeleteGroupByIdApiResponse = /** status 200 OK */ {
  success?: boolean
}
export type PostDeleteGroupByIdApiArg = {
  id: number
}
export type PostUndeleteGroupByIdApiResponse = /** status 200 OK */ {
  success?: boolean
  errors?: string[]
}
export type PostUndeleteGroupByIdApiArg = {
  id: number
}
export type PostAddUserToGroupApiResponse = /** status 200 OK */ {
  success?: boolean
  user?: User
  errors?: {
    [key: string]: string[]
  }
}
export type PostAddUserToGroupApiArg = {
  body:
    | {
        group_id: number
        user_id: number
      }
    | {
        group_id: number
        first_name: string
        last_name: string
        email: string
      }
}
export type PostRemoveUserFromGroupApiResponse = /** status 200 OK */ {
  success?: boolean
  errors?: {
    [key: string]: string[]
  }
}
export type PostRemoveUserFromGroupApiArg = {
  body: {
    group_id: number
    user_id: number
  }
}
export type GetGetFriendsApiResponse = /** status 200 OK */ {
  friends?: (Friend & any)[]
}
export type GetGetFriendsApiArg = void
export type GetGetFriendByIdApiResponse = /** status 200 OK */ {
  friend?: Friend
}
export type GetGetFriendByIdApiArg = {
  /** User ID of the friend */
  id: number
}
export type PostCreateFriendApiResponse = /** status 200 OK */ {
  friend?: Friend
}
export type PostCreateFriendApiArg = {
  body: {
    user_email?: string
    user_first_name?: string
    user_last_name?: string
  }
}
export type PostCreateFriendsApiResponse = /** status 200 OK */ {
  users?: (Friend & any)[]
  errors?: {
    [key: string]: string[]
  }
}
export type PostCreateFriendsApiArg = {
  body: {
    [key: string]: string
  }
}
export type PostDeleteFriendByIdApiResponse = /** status 200 OK */ {
  success?: boolean
  errors?: {
    [key: string]: string[]
  }
}
export type PostDeleteFriendByIdApiArg = {
  /** User ID of the friend */
  id: number
}
export type GetGetCurrenciesApiResponse = /** status 200 OK */ {
  currencies?: {
    currency_code?: string
    unit?: string
  }[]
}
export type GetGetCurrenciesApiArg = void
export type GetGetExpenseByIdApiResponse = /** status 200 OK */ {
  expense?: Expense
}
export type GetGetExpenseByIdApiArg = {
  id: number
}
export type GetGetExpensesApiResponse = /** status 200 OK */ {
  expenses?: Expense[]
}
export type GetGetExpensesApiArg = {
  /** If provided, only expenses in that group will be returned, and `friend_id` will be ignored. */
  groupId?: number
  /** ID of another user. If provided, only expenses between the current and provided user will be returned. */
  friendId?: number
  datedAfter?: string
  datedBefore?: string
  updatedAfter?: string
  updatedBefore?: string
  limit?: number
  offset?: number
}
export type PostCreateExpenseApiResponse = /** status 200 OK */ {
  expenses?: Expense[]
  errors?: object
}
export type PostCreateExpenseApiArg = {
  body: EqualGroupSplit | ByShares
}
export type PostUpdateExpenseByIdApiResponse = /** status 200 OK */ {
  expenses?: Expense[]
  errors?: object
}
export type PostUpdateExpenseByIdApiArg = {
  /** ID of the expense to update */
  id: number
  byShares: ByShares
}
export type PostDeleteExpenseByIdApiResponse = /** status 200 OK */ {
  success: boolean
  errors?: object
}
export type PostDeleteExpenseByIdApiArg = {
  /** ID of the expense to delete */
  id: number
}
export type PostUndeleteExpenseByIdApiResponse = /** status 200 OK */ {
  success?: boolean
}
export type PostUndeleteExpenseByIdApiArg = {
  /** ID of the expense to restore */
  id: number
}
export type GetGetCommentsApiResponse = /** status 200 OK */ {
  comments?: Comment[]
}
export type GetGetCommentsApiArg = {
  expenseId: number
}
export type PostCreateCommentApiResponse = /** status 200 OK */ {
  comment?: Comment & {
    relation_id?: any
    comment_type?: any
    content?: any
    user?: CommentUser
  }
}
export type PostCreateCommentApiArg = {
  body: {
    expense_id?: number
    content?: string
  }
}
export type PostDeleteCommentByIdApiResponse = /** status 200 OK */ {
  comment?: Comment & {
    comment_type?: any
    content?: any
    user?: CommentUser
  }
}
export type PostDeleteCommentByIdApiArg = {
  id: number
}
export type GetGetNotificationsApiResponse = /** status 200 OK */ {
  notifications?: Notification[]
}
export type GetGetNotificationsApiArg = {
  /** If provided, returns only notifications after this time. */
  updatedAfter?: string
  /** Omit (or provide `0`) to get the maximum number of notifications. */
  limit?: number
}
export type GetGetCategoriesApiResponse = /** status 200 OK */ {
  categories?: ParentCategory[]
}
export type GetGetCategoriesApiArg = void
export type User = {
  id?: number
  first_name?: string
  last_name?: string | null
  email?: string
  registration_status?: 'confirmed' | 'dummy' | 'invited'
  picture?: {
    small?: string
    medium?: string
    large?: string
  }
  custom_picture?: boolean
}
export type NotificationSettings = {
  [key: string]: boolean
}
export type CurrentUser = User & {
  /** ISO 8601 date/time indicating the last time notifications were read */
  notifications_read?: string
  /** Number of unread notifications since notifiations_read */
  notifications_count?: number
  notifications?: NotificationSettings
  default_currency?: string
  /** ISO_639-1 2-letter locale code */
  locale?: string
}
export type Unauthorized = {
  error?: string
}
export type Forbidden = {
  errors?: {
    base?: string[]
  }
}
export type NotFound = {
  errors?: {
    base?: string[]
  }
}
export type Debt = {
  /** User ID */
  from?: number
  /** User ID */
  to?: number
  amount?: string
  currency_code?: string
}
export type Group = {
  id?: number
  name?: string
  /** What is the group used for?
    
    **Note**: It is recommended to use `home` in place of `house` or `apartment`.
     */
  group_type?: 'home' | 'trip' | 'couple' | 'other' | 'apartment' | 'house'
  updated_at?: string
  simplify_by_default?: boolean
  members?: (User & {
    balance?: {
      currency_code?: string
      amount?: string
    }[]
  })[]
  original_debts?: Debt[]
  simplified_debts?: Debt[]
  avatar?: {
    original?: string | null
    xxlarge?: string
    xlarge?: string
    large?: string
    medium?: string
    small?: string
  }
  custom_avatar?: boolean
  cover_photo?: {
    xxlarge?: string
    xlarge?: string
  }
  /** A link the user can send to a friend to join the group directly */
  invite_link?: string
}
export type Balance = {
  currency_code?: string
  amount?: string
}
export type Friend = User & {
  groups?: {
    group_id?: number
    balance?: Balance[]
  }[]
  balance?: Balance[]
  updated_at?: string
}
export type Common = {
  /** A string representation of a decimal value, limited to 2 decimal places */
  cost?: string
  /** A short description of the expense */
  description?: string
  /** Also known as "notes." */
  details?: string | null
  /** The date and time the expense took place. May differ from `created_at` */
  date?: string
  repeat_interval?: 'never' | 'weekly' | 'fortnightly' | 'monthly' | 'yearly'
  /** A currency code. Must be in the list from `get_currencies` */
  currency_code?: string
  /** A category id from `get_categories` */
  category_id?: number
}
export type CommentUser = {
  id?: number
  first_name?: string
  last_name?: string
  picture?: {
    medium?: string
  }
}
export type Share = {
  user?: CommentUser
  user_id?: number
  paid_share?: string
  owed_share?: string
  net_balance?: string
}
export type Comment = {
  id?: number
  content?: string
  comment_type?: 'System' | 'User'
  relation_type?: 'ExpenseComment'
  /** ID of the subject of the comment */
  relation_id?: number
  created_at?: string
  deleted_at?: string | null
  user?: CommentUser
}
export type Expense = Common & {
  id?: number
  /** Null if the expense is not associated with a group. */
  group_id?: number | null
  /** Null if the expense is not associated with a friendship. */
  friendship_id?: number | null
  expense_bundle_id?: number | null
  description?: string
  /** Whether the expense recurs automatically */
  repeats?: boolean
  repeat_interval?: 'never' | 'weekly' | 'fortnightly' | 'monthly' | 'yearly'
  /** Whether a reminder will be sent to involved users in advance of the next occurrence of a recurring expense.
    Only applicable if the expense recurs.
     */
  email_reminder?: boolean
  /** Number of days in advance to remind involved users about the next occurrence of a new expense.
    Only applicable if the expense recurs.
     */
  email_reminder_in_advance?:
    | (null | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 14)
    | null
  /** The date of the next occurrence of a recurring expense. Only applicable if the expense recurs. */
  next_repeat?: string | null
  /** Also known as "notes." */
  details?: string | null
  comments_count?: number
  /** Whether this was a payment between users */
  payment?: boolean
  /** If a payment was made via an integrated third party service, whether it was confirmed by that service. */
  transaction_confirmed?: boolean
  cost?: string
  currency_code?: string
  repayments?: {
    /** ID of the owing user */
    from?: number
    /** ID of the owed user */
    to?: number
    amount?: string
  }[]
  /** The date and time the expense took place. May differ from `created_at` */
  date?: string
  /** The date and time the expense was created on Splitwise */
  created_at?: string
  created_by?: User & (any | null)
  /** The last time the expense was updated. */
  updated_at?: string
  updated_by?: User & (any | null)
  /** If the expense was deleted, when it was deleted. */
  deleted_at?: string | null
  deleted_by?: User & (any | null)
  category?: {
    id?: number
    /** Translated to the current user's locale */
    name?: string
  }
  receipt?: {
    large?: string | null
    original?: string | null
  }
  users?: Share[]
  comments?: Comment[]
}
export type EqualGroupSplit = Common & {
  /** The group to put this expense in. */
  group_id?: number
  split_equally?: true
} & any
export type ByShares = Common & {
  /** The group to put this expense in, or `0` to create an expense outside of a group. */
  group_id?: number
  users__0__user_id?: number
  /** Decimal amount as a string with 2 decimal places. The amount this user paid for the expense */
  users__0__paid_share?: string
  /** Decimal amount as a string with 2 decimal places. The amount this user owes for the expense */
  users__0__owed_share?: string
  users__1__first_name?: string
  users__1__last_name?: string
  users__1__email?: string
  /** Decimal amount as a string with 2 decimal places. The amount this user paid for the expense */
  users__1__paid_share?: string
  /** Decimal amount as a string with 2 decimal places. The amount this user owes for the expense */
  users__1__owed_share?: string
  [key: string]: string
} & any
export type Notification = {
  id?: number
  type?: number
  created_at?: string
  created_by?: number
  source?: {
    type?: string
    id?: number
    url?: string | null
  } | null
  image_url?: string
  image_shape?: 'square' | 'circle'
  content?: string
}
export type Category = {
  id?: number
  name?: string
  icon?: string
  icon_types?: {
    slim?: {
      small?: string
      large?: string
    }
    square?: {
      large?: string
      xlarge?: string
    }
  }
}
export type ParentCategory = Category & {
  id?: any
  name?: any
  subcategories?: Category[]
}
export const {
  useGetGetCurrentUserQuery,
  useGetGetUserByIdQuery,
  usePostUpdateUserByIdMutation,
  useGetGetGroupsQuery,
  useGetGetGroupByIdQuery,
  usePostCreateGroupMutation,
  usePostDeleteGroupByIdMutation,
  usePostUndeleteGroupByIdMutation,
  usePostAddUserToGroupMutation,
  usePostRemoveUserFromGroupMutation,
  useGetGetFriendsQuery,
  useGetGetFriendByIdQuery,
  usePostCreateFriendMutation,
  usePostCreateFriendsMutation,
  usePostDeleteFriendByIdMutation,
  useGetGetCurrenciesQuery,
  useGetGetExpenseByIdQuery,
  useGetGetExpensesQuery,
  usePostCreateExpenseMutation,
  usePostUpdateExpenseByIdMutation,
  usePostDeleteExpenseByIdMutation,
  usePostUndeleteExpenseByIdMutation,
  useGetGetCommentsQuery,
  usePostCreateCommentMutation,
  usePostDeleteCommentByIdMutation,
  useGetGetNotificationsQuery,
  useGetGetCategoriesQuery,
} = injectedRtkApi
