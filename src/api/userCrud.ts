import { baseUrl } from ".";
export const addUsers = async (user:any) => {
    const formData = new FormData();
    formData.append('first_name', user.first_name);
    formData.append('last_name', user.last_name);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('confirm_password', user.confirm_password);
    formData.append('role', user.role);
    formData.append('profile_picture', user.profile_picture); 

    const res = await fetch(`${baseUrl}/users/add`, {
        method: 'POST',
        body: formData,
    });

    return await res.json();
};
