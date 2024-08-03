// fetchData.ts
import axios, { AxiosError } from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, {
  retries: 3,
  retryDelay: (retryCount: number) => {
    console.log(`Retry attempt: ${retryCount}`);
    return retryCount * 2000;
  },
  retryCondition: (error: AxiosError) => {
    return error.response?.status === 429 || axiosRetry.isNetworkOrIdempotentRequestError(error);
  }
});

export async function fetchData(): Promise<void> {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
    console.log(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching data:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
}
