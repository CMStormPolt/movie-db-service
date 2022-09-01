export const userList: Array<userType> = [
    {
        id: 1,
        name: "John",
        username: "john",
        age: 20,
        nationality: "Canada"
    },
    {
        id: 2,
        name: "Pedro",
        username: "salamanca",
        age: 43,
        nationality: "Spain"
    },
    {
        id: 3,
        name: "Helga",
        username: "helga223",
        age: 54,
        nationality: "Germany"
    },
    {
        id: 4,
        name: "Kuan",
        username: "kuan",
        age: 24,
        nationality: "Japan"
    }
]

interface userType {
    id: number,
    name: string,
    username: string,
    age: number,
    nationality: string
}