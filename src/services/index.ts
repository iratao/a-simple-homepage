interface RequestInviteData {
  name: string;
  email: string;
}

export async function requestInvite(data: RequestInviteData) {
  const response = await fetch('https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  })
  return response
}