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

export function getMessagesFromPeopleCode(username: string): string {
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

export function getMessagesFromGroupCode(groupName: string): string {
  return JSON.stringify({
    action: 'onchat',
    data: {
      event: 'GET_ROOM_CHAT_MES',
      data: {
        name: groupName,
        page: 1,
      },
    },
  });
}

export function getInfoFromGroupCode(groupName: string): string {
  return JSON.stringify({
    action: 'onchat',
    data: {
      event: 'GET_ROOM_CHAT_MES',
      data: {
        name: groupName,
        page: 1,
      },
    },
  });
}

export function sendChatPersonCode(username: string, message: string): string {
  return JSON.stringify({
    action: 'onchat',
    data: {
      event: 'SEND_CHAT',
      data: {
        type: 'people',
        to: username,
        mes: message,
      },
    },
  });
}

export function sendChatGroupCode(groupName: string, message: string): string {
  return JSON.stringify({
    action: 'onchat',
    data: {
      event: 'SEND_CHAT',
      data: {
        type: 'room',
        to: groupName,
        mes: message,
      },
    },
  });
}

export function createGroupCode(groupName: string): string {
  return JSON.stringify({
    action: 'onchat',
    data: {
      event: 'CREATE_ROOM',
      data: {
        name: groupName,
      },
    },
  });
}

export function joinGroupCode(groupName: string): string {
  return JSON.stringify({
    action: 'onchat',
    data: {
      event: 'JOIN_ROOM',
      data: {
        name: groupName,
      },
    },
  });
}
