import { volleyApiBase as api } from './volleyApiBase'
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTimezone: build.query<GetTimezoneApiResponse, GetTimezoneApiArg>({
      query: (queryArg) => ({
        url: `/timezone`,
      }),
    }),
    getSeasons: build.query<GetSeasonsApiResponse, GetSeasonsApiArg>({
      query: (queryArg) => ({
        url: `/seasons`,
      }),
    }),
    getCountries: build.query<GetCountriesApiResponse, GetCountriesApiArg>({
      query: (queryArg) => ({
        url: `/countries`,

        params: {
          id: queryArg.id,
          name: queryArg.name,
          code: queryArg.code,
          search: queryArg.search,
        },
      }),
    }),
    getLeagues: build.query<GetLeaguesApiResponse, GetLeaguesApiArg>({
      query: (queryArg) => ({
        url: `/leagues`,

        params: {
          id: queryArg.id,
          name: queryArg.name,
          country_id: queryArg.countryId,
          country: queryArg.country,
          type: queryArg['type'],
          season: queryArg.season,
          search: queryArg.search,
        },
      }),
    }),
    getTeams: build.query<GetTeamsApiResponse, GetTeamsApiArg>({
      query: (queryArg) => ({
        url: `/teams`,

        params: {
          id: queryArg.id,
          name: queryArg.name,
          country_id: queryArg.countryId,
          country: queryArg.country,
          league: queryArg.league,
          season: queryArg.season,
          search: queryArg.search,
        },
      }),
    }),
    getTeamsStatistics: build.query<
      GetTeamsStatisticsApiResponse,
      GetTeamsStatisticsApiArg
    >({
      query: (queryArg) => ({
        url: `/teams/statistics`,

        params: {
          league: queryArg.league,
          season: queryArg.season,
          team: queryArg.team,
          date: queryArg.date,
        },
      }),
    }),
    getStandings: build.query<GetStandingsApiResponse, GetStandingsApiArg>({
      query: (queryArg) => ({
        url: `/standings`,

        params: {
          league: queryArg.league,
          season: queryArg.season,
          team: queryArg.team,
          stage: queryArg.stage,
          group: queryArg.group,
        },
      }),
    }),
    getStandingsStages: build.query<
      GetStandingsStagesApiResponse,
      GetStandingsStagesApiArg
    >({
      query: (queryArg) => ({
        url: `/standings/stages`,

        params: {
          league: queryArg.league,
          season: queryArg.season,
        },
      }),
    }),
    getStandingsGroups: build.query<
      GetStandingsGroupsApiResponse,
      GetStandingsGroupsApiArg
    >({
      query: (queryArg) => ({
        url: `/standings/groups`,

        params: {
          league: queryArg.league,
          season: queryArg.season,
        },
      }),
    }),
    getGames: build.query<GetGamesApiResponse, GetGamesApiArg>({
      query: (queryArg) => ({
        url: `/games`,

        params: {
          id: queryArg.id,
          date: queryArg.date,
          league: queryArg.league,
          season: queryArg.season,
          team: queryArg.team,
          timezone: queryArg.timezone,
        },
      }),
    }),
    getGamesH2H: build.query<GetGamesH2HApiResponse, GetGamesH2HApiArg>({
      query: (queryArg) => ({
        url: `/games/h2h`,

        params: {
          h2h: queryArg.h2H,
          date: queryArg.date,
          league: queryArg.league,
          season: queryArg.season,
          timezone: queryArg.timezone,
        },
      }),
    }),
    getOdds: build.query<GetOddsApiResponse, GetOddsApiArg>({
      query: (queryArg) => ({
        url: `/odds`,

        params: {
          league: queryArg.league,
          season: queryArg.season,
          game: queryArg.game,
          bookmaker: queryArg.bookmaker,
          bet: queryArg.bet,
        },
      }),
    }),
    getOddsBets: build.query<GetOddsBetsApiResponse, GetOddsBetsApiArg>({
      query: (queryArg) => ({
        url: `/odds/bets`,

        params: {
          id: queryArg.id,
          search: queryArg.search,
        },
      }),
    }),
    getOddsBookmakers: build.query<
      GetOddsBookmakersApiResponse,
      GetOddsBookmakersApiArg
    >({
      query: (queryArg) => ({
        url: `/odds/bookmakers`,

        params: {
          id: queryArg.id,
          search: queryArg.search,
        },
      }),
    }),
    getWidgetsGames: build.query<
      GetWidgetsGamesApiResponse,
      GetWidgetsGamesApiArg
    >({
      query: (queryArg) => ({
        url: `/widgets/Games`,
        params: {
          'data-host': queryArg['data-host'],
          'data-key': queryArg['data-key'],
          'data-refresh': queryArg['data-refresh'],
          'data-date': queryArg['data-date'],
          'data-league': queryArg['data-league'],
          'data-season': queryArg['data-season'],
          'data-theme': queryArg['data-theme'],
          'data-show-toolbar': queryArg['data-show-toolbar'],
          'data-show-logos': queryArg['data-show-logos'],
          'data-modal-game': queryArg['data-modal-game'],
          'data-modal-standings': queryArg['data-modal-standings'],
          'data-modal-show-logos': queryArg['data-modal-show-logos'],
          'data-show-errors': queryArg['data-show-errors'],
        },
      }),
    }),
    getWidgetsStandings: build.query<
      GetWidgetsStandingsApiResponse,
      GetWidgetsStandingsApiArg
    >({
      query: (queryArg) => ({
        url: `/widgets/standings`,
        params: {
          'data-host': queryArg['data-host'],
          'data-key': queryArg['data-key'],
          'data-league': queryArg['data-league'],
          'data-season': queryArg['data-season'],
          'data-theme': queryArg['data-theme'],
          'data-show-errors': queryArg['data-show-errors'],
          'data-show-logos': queryArg['data-show-logos'],
        },
      }),
    }),
  }),
  overrideExisting: false,
})
export { injectedRtkApi as volleyApi }
export type GetTimezoneApiResponse = /** status 200 OK */ {}
export type GetTimezoneApiArg = {}
export type GetSeasonsApiResponse = /** status 200 OK */ object
export type GetSeasonsApiArg = {}
export type GetCountriesApiResponse = /** status 200 OK */ {}
export type GetCountriesApiArg = {
  /** The id of the country */
  id?: number
  /** The name of the country */
  name?: string
  /** The code of the country */
  code?: string
  search?: string
}
export interface GetLeaguesApiResponse {}

export type GetLeaguesApiArg = {
  /** The id of the league */
  id?: number
  /** The name of the league */
  name?: string
  /** The id of the country */
  countryId?: number
  /** The name of the country */
  country?: string
  /** The type of the league */
  type?: 'league' | 'cup'
  /** The season of the league */
  season?: number
  search?: string
}
export interface GetTeamsApiResponse /** status 200 OK */ {}
export type GetTeamsApiArg = {
  /** The id of the team */
  id?: number
  /** The name of the team */
  name?: string
  /** The id of the country */
  countryId?: number
  /** The name of the country */
  country?: string
  /** The id of the league */
  league?: number
  /** The season of the league */
  season?: number
  search?: string
}
export type GetTeamsStatisticsApiResponse = /** status 200 OK */ {}
export type GetTeamsStatisticsApiArg = {
  /** The id of the league */
  league: number
  /** The season of the league */
  season: string
  /** The id of the team */
  team: number
  /** A date limit */
  date?: string
}
export interface GetStandingsApiResponse /** status 200 OK */ {}
export type GetStandingsApiArg = {
  /** The id of the league */
  league: number
  /** The season of the league */
  season: number
  /** The id of the team */
  team?: number
  /** A valid stage */
  stage?: string
  /** A valid group */
  group?: string
}
export type GetStandingsStagesApiResponse = /** status 200 OK */ {}
export type GetStandingsStagesApiArg = {
  /** The id of the league */
  league: number
  /** The season of the league */
  season: string
}
export type GetStandingsGroupsApiResponse = /** status 200 OK */ {}
export type GetStandingsGroupsApiArg = {
  /** The id of the league */
  league: number
  /** The season of the league */
  season: number
}
export type GetGamesApiResponse = /** status 200 OK */ {}
export type GetGamesApiArg = {
  /** The id of the game */
  id?: number
  /** A valid date */
  date?: string
  /** The id of the league */
  league?: number
  /** The season of the league */
  season?: number
  /** The id of the team */
  team?: number
  /** A valid timezone */
  timezone?: string
}
export type GetGamesH2HApiResponse = /** status 200 OK */ {}
export type GetGamesH2HApiArg = {
  /** The ids of the teams */
  h2H: string
  /** A valid date */
  date?: string
  /** The id of the league */
  league?: number
  /** The season of the league */
  season?: number
  /** A valid timezone */
  timezone?: string
}
export type GetOddsApiResponse = /** status 200 OK */ {}
export type GetOddsApiArg = {
  /** The id of the league */
  league?: number
  /** The season of the league */
  season?: number
  /** The id of the game */
  game?: number
  /** The id of the bookmaker */
  bookmaker?: number
  /** The id of the bet */
  bet?: number
}
export type GetOddsBetsApiResponse = /** status 200 OK */ {}
export type GetOddsBetsApiArg = {
  /** The id of the bet */
  id?: number
  /** The name of the bet */
  search?: string
}
export type GetOddsBookmakersApiResponse = /** status 200 OK */ {}
export type GetOddsBookmakersApiArg = {
  /** The id of the bookmaker */
  id?: number
  /** The name of the bookmaker */
  search?: string
}
export type GetWidgetsGamesApiResponse = unknown
export type GetWidgetsGamesApiArg = {
  'data-host': 'v1.volleyball.api-sports.io' | 'api-volleyball.p.rapidapi.com'
  /** Your Api Key */
  'data-key': string
  /** Number in seconds corresponding to the desired data update frequency. If you indicate **0** or leave this field empty the data will not be updated automatically */
  'data-refresh'?: number
  /** Fill in the desired date. If empty the current date is automatically applied */
  'data-date'?: string
  /** Fill in the desired league id */
  'data-league'?: number
  /** Fill in the desired season */
  'data-season'?: number
  /** If you leave the field empty, the `default` theme will be applied, otherwise the possible values are `grey` or `dark` */
  'data-theme'?: string
  /** Displays the toolbar allowing to change the view between the current, finished or upcoming fixtures and to change the date */
  'data-show-toolbar'?: true | false
  /** If `true` display teams logos */
  'data-show-logos'?: true | false
  /** If `true` allows to load a modal containing all the details of the fixture */
  'data-modal-game'?: true | false
  /** If `true` allows to load a modal containing the standings */
  'data-modal-standings'?: true | false
  /** If `true` display teams logos and players images in the modal */
  'data-modal-show-logos'?: true | false
  /** By default `false`, used for debugging, with a value of `true` it allows to display the errors */
  'data-show-errors'?: true | false
}
export type GetWidgetsStandingsApiResponse = unknown
export type GetWidgetsStandingsApiArg = {
  'data-host': 'v1.volleyball.api-sports.io' | 'api-volleyball.p.rapidapi.com'
  /** Your Api Key */
  'data-key': string
  /** Fill in the desired league id */
  'data-league'?: number
  /** Fill in the desired season */
  'data-season': number
  /** If you leave the field empty, the `default` theme will be applied, otherwise the possible values are `grey` or `dark` */
  'data-theme'?: string
  /** By default `false`, used for debugging, with a value of `true` it allows to display the errors */
  'data-show-errors'?: true | false
  /** If `true` display teams logos */
  'data-show-logos'?: true | false
}
export const {
  useGetTimezoneQuery,
  useGetSeasonsQuery,
  useGetCountriesQuery,
  useGetLeaguesQuery,
  useGetTeamsQuery,
  useGetTeamsStatisticsQuery,
  useGetStandingsQuery,
  useGetStandingsStagesQuery,
  useGetStandingsGroupsQuery,
  useGetGamesQuery,
  useGetGamesH2HQuery,
  useGetOddsQuery,
  useGetOddsBetsQuery,
  useGetOddsBookmakersQuery,
  useGetWidgetsGamesQuery,
  useGetWidgetsStandingsQuery,
} = injectedRtkApi
