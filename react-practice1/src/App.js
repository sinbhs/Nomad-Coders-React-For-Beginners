import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollars, setDollars] = useState(0); // 내가 가진 USD
  const [coinPrice, setCoinPrice] = useState(1); // 기본값 1 (0으로 하면 나누기 오류 발생)

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json); // 코인 정보 불러오기
        setLoading(false); // 로딩 완료되면 로딩 상태 false 처리
        setCoinPrice(json[0]?.quotes.USD.price || 1); // 기본 코인 가격 설정
      });
  }, []);

  // USD 입력 핸들러
  const onChange = (e) => setDollars(Number(e.target.value));

  // 코인 선택 핸들러
  const selChange = (e) => setCoinPrice(Number(e.target.value));

  return (
    <div>
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <input
            value={dollars}
            onChange={onChange}
            type="number"
            placeholder="가진 $ 금액을 입력하세요."
          />

          <select onChange={selChange}>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price.toFixed(2)} USD
              </option>
            ))}
          </select>

          <h2>구매 가능 개수: {Math.floor(dollars / coinPrice)} 개</h2>
        </div>
      )}
    </div>
  );
}

export default App;