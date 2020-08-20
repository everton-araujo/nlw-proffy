interface Response {
    toke: string;
    user: {
        name: string;
        email: string;
    }
}

export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                toke: '1ijkndfgsihokjfasdgh948hewkfsdv8932q',
                user: {
                    name: 'Everton',
                    email: 'everton@email.com',
                },
            });
        }, 2000);
    });
}
