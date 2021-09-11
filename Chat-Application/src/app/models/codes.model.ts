export function signUpCode(username: string, password: string): string {
  return JSON.stringify({
    action: 'onchat',
    data: {
      event: 'REGISTER',
      data: {
        user: username,
        pass: password,
      },
    },
  });
}

export function signInCode(username: string, password: string): string {
  return JSON.stringify({
    action: 'onchat',
    data: {
      event: 'LOGIN',
      data: {
        user: username,
        pass: password,
      },
    },
  });
}

export const logOutCode = JSON.stringify({
  action: 'onchat',
  data: {
    event: 'LOGOUT',
  },
});

export const getUsersCode = JSON.stringify({
  action: 'onchat',
  data: {
    event: 'GET_USER_LIST',
  },
});

export function checkOnlineCode(name: string): string {
  return JSON.stringify({
    action: 'onchat',
    data: {
      event: 'CHECK_USER',
      data: {
        user: name,
      },
    },
  });
}

export function getMessagesFromPeople(username: string): string {
  return JSON.stringify({
    action: 'onchat',
    data: {
      event: 'GET_PEOPLE_CHAT_MES',
      data: {
        name: username,
        page: 1,
      },
    },
  });
}
