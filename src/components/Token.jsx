import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import Address from "./Address";
import "../styles/Token.css";

const Token = () => {
  const [pairsData, setPairsData] = useState([]);
  const [response, setResponse] = useState("loading");
  console.log(pairsData);
  const fetchTokenAddress = async () => {
    const url =
      "https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
    const response = await fetch(url);
    const data = await response.json();
    const { pairs } = data;
    setPairsData(pairs);
    setResponse("success");
  };
  useEffect(() => {
    fetchTokenAddress();
  }, []);

  const renderLoadingView = () => (
    <div className="loading-container">
      <ColorRing
        height="100"
        width="100"
        color="white"
        visible={true}
        ariaLabel="three-circles-rotating"
      />
    </div>
  );

  return (
    <>
      {response === "loading" ? (
        renderLoadingView()
      ) : (
        <Address
          pairsData={pairsData}
          text="Token"
          setPairsData={setPairsData}
        />
      )}
    </>
  );
};

export default Token;
