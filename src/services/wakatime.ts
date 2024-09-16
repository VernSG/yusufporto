import {
    ALL_TIME_SINCE_TODAY,
    STATS_ENDPOINT,
  } from "@/constants/wakatime";
  
  export const getReadStats = async (): Promise<{
    status: number;
    data: any;
  }> => {
    const response = await fetch(`${STATS_ENDPOINT}/last_7_days`, {
      next: { revalidate: 60 },
      method: "GET",
      headers: {
        Authorization: `Basic ${process.env.WAKATIME_API_KEY}`,
      },
    });
  
    const status = response.status;
  
    if (status >= 400) return { status, data: [] };
  
    const getData = await response.json();
  
    const start_date = getData?.data?.start;
    const end_date = getData?.data?.end;
    const last_update = getData?.data?.modified_at;
  
    const categories = getData?.data?.categories;
  
    const best_day = {
      date: getData?.data?.best_day?.date,
      text: getData?.data?.best_day?.text,
    };
    const human_readable_daily_average =
      getData?.data?.human_readable_daily_average_including_other_language;
    const human_readable_total =
      getData?.data?.human_readable_total_including_other_language;
  
    const languages = getData?.data?.languages?.slice(0, 3);
    const editors = getData?.data?.editors;
  
    return {
      status,
      data: {
        last_update,
        start_date,
        end_date,
        categories,
        best_day,
        human_readable_daily_average,
        human_readable_total,
        languages,
        editors,
      },
    };
  };
  
  export const getALLTimeSinceToday = async (): Promise<{
    status: number;
    data: object;
  }> => {
    const response = await fetch(ALL_TIME_SINCE_TODAY, {
      method: "GET",
      headers: {
        Authorization: `Basic ${process.env.WAKATIME_API_KEY}`,
      },
    });
  
    const status = response.status;
  
    if (status >= 400) return { status, data: {} };
  
    const getData = await response.json();
  
    const data = {
      text: getData?.data?.text,
      total_seconds: getData?.data?.total_seconds,
    };
  
    return {
      status,
      data,
    };
  };