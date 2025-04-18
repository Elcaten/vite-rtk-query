import '../src/services/volleyApi'

declare module '../src/services/volleyApi' {
  export interface GetLeaguesApiResponse {
    get: string
    parameters: any[]
    errors: any[]
    results: number
    response: Array<{
      id: number
      name: string
      type: string
      logo: string
      country: {
        id: number
        name: string
        code?: string
        flag?: string
      }
      seasons: Array<{
        season: number
        current: boolean
        start: string
        end: string
      }>
    }>
  }

  export interface GetStandingsApiResponse {
    get: string
    parameters: {
      league: string
      season: string
    }
    errors: Array<any>
    results: number
    response: Array<
      Array<{
        position: number
        stage: string
        group: {
          name: string
        }
        team: {
          id: number
          name: string
          logo: string
        }
        league: {
          id: number
          name: string
          type: string
          logo: string
          season: number
        }
        country: {
          id: number
          name: string
          code: string
          flag: string
        }
        games: {
          played: number
          win: {
            total: number
            percentage: string
          }
          lose: {
            total: number
            percentage: string
          }
        }
        goals: {
          for: number
          against: number
        }
        points: number
        form: any
        description: any
      }>
    >
  }

  export interface GetTeamsApiResponse {
    get: string
    parameters: {
      search: string
    }
    errors: Array<any>
    results: number
    response: Array<{
      id: number
      name: string
      logo: string
      national: boolean
      country: {
        id: number
        name: string
        code: string
        flag: string
      }
    }>
  }
}
