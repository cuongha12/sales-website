export const saveUserToLocalStorage = (user) => {
    return {
        type: "SAVE_USER",
        playload: user 
    }
}
export const RemoveUserToLocalStorage = (user) => {
    return {
        type: "REMOVE_USER",
        playload: user 
    }
}