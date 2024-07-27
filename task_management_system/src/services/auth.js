let fakeUsers = [
  { id: 1, email: "owusujoyansah@gmail.com", password: "026735" },
];

export const signup = (email, password, confirmPassword) => {
  if (fakeUsers.find((u) => u.email === email)) {
    return false; // User already exists
  }
  const newUser = {
    id: fakeUsers.length + 1,
    email,
    password,
    confirmPassword,
  };
  fakeUsers.push(newUser);
  return true;
};

export const login = (email, password) => {
  const user = fakeUsers.find(
    (u) => u.email === email && u.password === password
  );
  if (user) {
    const token = btoa(JSON.stringify(user)); // This is not secure, just for demo
    localStorage.setItem("token", token);
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

export const getCurrentUser = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return JSON.parse(atob(token));
  }
  return null;
};
