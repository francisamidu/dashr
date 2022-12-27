abstract class Api {
  private static HOST = "https://coinranking1.p.rapidapi.com";
  private static API_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;
  static async getCoins() {
    try {
      const request = await fetch(`${Api.HOST}/coins`, {
        headers: {
          "x-rapidapi-host": Api.HOST,
          "x-rapidapi-key": Api.API_KEY,
        },
      });
      const response = await request.json();
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getNews() {
    try {
      const request = await fetch(`${Api.HOST}/coins`, {
        headers: {
          "x-bingapis-sdk": "true",
          "x-rapidapi-host": Api.HOST,
          "x-rapidapi-key": Api.API_KEY,
        },
      });
      const response = await request.json();
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
export const { getCoins, getNews } = Api;
