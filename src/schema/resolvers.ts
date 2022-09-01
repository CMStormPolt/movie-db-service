import { userList } from '../fakeData'

export const resolvers = {
    Query: {
        users() {
            // make mongo call
            return userList
        }
    }
}