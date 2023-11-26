import { baseUrl } from "..";


export const login = async (user:any) => {
    const res = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return await res.json();
};

export const forgotPassword = async (user:any) => {
    const res = await fetch(`${baseUrl}/forgot/password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return await res.json();
}

export const resetPassword = async (user:any) => {
    const res = await fetch(`${baseUrl}/reset/password`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return await res.json();
}