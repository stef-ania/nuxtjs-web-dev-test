import { defineEventHandler, getQuery } from "h3";

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const response = await $fetch("https://royaloceanyachts.com/api/yachts?buy=true&page=1", {
      params: query,
    });

    event.res.setHeader("Access-Control-Allow-Origin", "*");

    return response;
  } catch (error: any) {
    console.error("Error fetching yachts data:", error.message);
    return { error: "Failed to fetch yachts data" };
  }
});
