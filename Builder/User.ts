export interface User {
    name:       string;
    username:   string;
    lastName:   string;
    address:    string;
    birthday:   Date;
    mail:       string;
    age:        number;
}

export type KeyUser = keyof User