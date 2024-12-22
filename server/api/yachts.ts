import { defineEventHandler, getQuery, createError } from "h3";

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const response = await $fetch("https://royaloceanyachts.com/api/yachts?buy=true&page=1", {
      headers: {
        "CORS: Access-Control-Allow-Origin": "*",
      },
      params: query,
    });

    return response;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Error fetching yachts data",
    });
  }
});
