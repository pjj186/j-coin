const BASE_URL = "https://api.coinpaprika.com/v1";
const COINS_URL = `${BASE_URL}/coins`;

export const coins = () => fetch(COINS_URL).then((res) => res.json());

export const info = ({ queryKey }) =>
  fetch(`${COINS_URL}/${queryKey[1]}`).then((res) => res.json());

export const history = ({ queryKey }) =>
  fetch(
    `${BASE_URL}/tickers/${queryKey[1]}/historical?start=${
      new Date().toISOString().split("T")[0]
    }&interval=30m`
  ).then((res) => res.json());

// new Date().toISOString().split("T")[0]
// T를 기준으로 문자열을 나누는데, T를 전 후로 배열이 만들어진다. (T는 제외되고)
// [0]으로 앞쪽 배열을 가져오는거임.
// 따라서 2022-01-02 만 뽑을 수 있음
