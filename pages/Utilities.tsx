import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { countries } from "../components/constants/countries/countries";
import { FaExchangeAlt } from "react-icons/fa";
import { useAppSelector } from "../redux/hooks";
import axios from "axios";
var fx = require("money");

const Utilities = () => {
  const user = useAppSelector((state) => state.user.user);
  const [exchangeValue, setExchangeValue] = useState("1");
  const [exchangeFrom, setExchangeFrom] = useState(user?.currency);
  const [exchangeTo, setExchangeTo] = useState("AFN");
  const [rates, setRates] = useState<{} | null>(null);
  const [exchangeResult, setExchangeResult] = useState(0);

  useEffect(() => {
    setExchangeFrom(user?.currency);
    getExchange();
  }, [user, rates, exchangeValue, exchangeTo]);

  const getExchange = async () => {
    if (!rates && user) {
      const curruncies = countries
        .map((country) => country.currencyCode)
        .join(",");
      await axios
        .get(
          "https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest",
          {
            params: {
              from: user.currency,
              to: curruncies,
            },
            headers: {
              "X-RapidAPI-Key":
                "56b9557de5msh43c2654c5ab3bf0p137f1bjsn275bc3e4b597",
              "X-RapidAPI-Host":
                "currency-conversion-and-exchange-rates.p.rapidapi.com",
            },
          }
        )
        .then((res) => setRates(res.data.rates));
    }
    if (user) {
      fx.base = user.currency;
      fx.rates = {
        ...rates,
      };
      setExchangeResult(fx(exchangeValue).from(exchangeFrom).to(exchangeTo));
    }
  };

  return (
    <Layout>
      <>
        {user && (
          <div>
            <h2 className="text-3xl uppercase font-bold">Rate Exchange</h2>
            <div className="flex mt-5 justify-around items-center">
              <div>
                <input
                  className="p-2 mx-5 border border-gray-100"
                  onChange={(e) => {
                    setExchangeValue(e.target.value);
                  }}
                ></input>
                <select disabled>
                  <option value={user.currency}>{user.currency}</option>
                </select>
              </div>
              <FaExchangeAlt />
              <div>
                <select onChange={(e) => setExchangeTo(e.target.value)}>
                  {countries.map((country, idx) => (
                    <option key={idx} value={country.currencyCode}>
                      {country.currencyCode}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-5 text-center">
              <span className="font-bold">{exchangeFrom}</span> TO{" "}
              <span className="font-bold">{exchangeTo}</span> ={" "}
              {exchangeResult ? exchangeResult : 0}
            </div>
          </div>
        )}
      </>
    </Layout>
  );
};

export default Utilities;
