export type BaseUser = {
    id: String,
    email: String,
    isSurvey: Boolean
}

export type Credential = {
    email: String,
    password: String,
}

export type RegisterUser = Credential & {
    name: String,
}

export type RegisterResponse = {
    accessToken: string,
}

export type LoginResponse = {
    accessToken: string,
    isSurvey: string
}