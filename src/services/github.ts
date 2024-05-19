import {
    GITHUB_ACCOUNTS,
    GITHUB_USER_ENDPOINT,
    GITHUB_USER_QUERY,
  } from "@/constants/github";
  
  export const fetchGithubData = async (
    username: string,
    token: string | undefined
  ) => {
    const response = await fetch(GITHUB_USER_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        query: GITHUB_USER_QUERY,
        variables: {
          username: username,
        },
      }),
    });
  
    const status: number = response.status;
    const responseJson = await response.json();
  
    if (status > 400) {
      return { status, data: {} };
    }
  
    return { status, data: responseJson.data.user };
  };
  
  export const getGithubUser = async (type: string) => {
    const account = GITHUB_ACCOUNTS.find(
      (account) => account?.type === type && account?.is_active
    );
  
    if (!account) {
      throw new Error("Invalid user type");
    }
  
    const { username, token } = account;
    return await fetchGithubData(username, token);
  };