export const GITHUB_ACCOUNTS = [
    {
      username: "VernSG",
      token: process.env.GH_READ_USER_TOKEN_PERSONAL,
      endpoint: "/api/github?type=personal",
      type: "personal",
      is_active: true,
    },
  ];
  
  export const GITHUB_USER_ENDPOINT = "https://api.github.com/graphql";
  export const GITHUB_USER_QUERY = `query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          colors
          totalContributions
          months {
            firstDay
            name
            totalWeeks
          }
          weeks {
            contributionDays {
              color
              contributionCount
              date
            }
            firstDay
          }
        }
      }
    }
  }`;