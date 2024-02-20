import { Col, Row } from "antd";
import millify from "millify";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import {
  useGetCryptoDetailsQuery,
  useGetCryptosQuery,
} from "../../services/cryptoApi";

const Exchanges = ({ coinId }) => {
  // const { coinId } = useParams();
  const titles = ["Exchange", "24h Trade Volume", "Markets", "Change"];

  const { data: cryptoList, isFetching } = useGetCryptosQuery(50);

  // const [coinId, setCoinId] = useState();

  const { data: cryptoDetail } = useGetCryptoDetailsQuery(coinId);
  const cryptos = cryptoDetail?.data?.coin;
  const coinsList = cryptoList?.data?.coins;
  const collapsData = [
    `${coinsList.name}`,
    `${cryptos["24hVolume"]}`,
    `${millify(cryptos.marketCap)}`,
    `${cryptos.change}`,
  ];
  // const coinId = coinsList.uuid;
  console.log(collapsData);

  // useEffect(() => {
  //   setCoinId(cryptos.uuid);
  // }, []);
  if (isFetching) return "loading ...";
  return (
    <>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}>
        {titles.map((title, i) => (
          <Col className='gutter-row' span={6} key={i}>
            {title}
          </Col>
        ))}
      </Row>

      {coinsList.map((crypto) => (
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}>
          {collapsData.map((item, i) => (
            <Col className='gutter-row' span={6} key={i}>
              {item}
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
};

export default Exchanges;
