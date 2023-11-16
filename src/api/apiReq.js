export const loginApi = async (user) => {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      });
      return response.json(); 
    }

export const getUserData = async (token) => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.json();
};



export const editNameApi = async (token, user) => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        userName: user.username,
      }),
    });
    return response.json();
  };


