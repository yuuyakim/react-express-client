import { useState } from "react"

export const useFetchUsers = () => {
    const [userList, setUserList] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const usersJson = [
        {
        id: 1,
        firstname: "hoge",
        lastname: "ab",
        age: 20,
        },
        {
        id: 2,
        firstname: "fuga",
        lastname: "abcd",
        age: 22,
        },
        {
        id: 3,
        firstname: "piyo",
        lastname: "abcdefg",
        age: 24,
        },
    ]

    const onClickFetchUser = () => {
        setIsLoading(true)
        setIsError(false)
        
        // apiから取得するかわりに定義したJsonを使用
        const users = usersJson.map(user => ({
            id: user.id,
            name: `${user.lastname} ${user.firstname}`,
            age: user.age
        }))

        setUserList(users)
        setIsLoading(false)
    }

    return { userList, isLoading, isError, onClickFetchUser }

}