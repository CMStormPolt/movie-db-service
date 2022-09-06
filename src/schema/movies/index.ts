import { movieQueries } from './queries'
import { movieMutations } from './mutations'

export default {
    queries: {
        ...movieQueries
    },
    mutations: {
        ...movieMutations
    }
}