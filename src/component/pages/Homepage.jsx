import { Col, Row, Statistic, Typography } from "antd";
import React from "react";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import millify from "millify";
import { Cryptocurrencies, News } from ".";

import { Link } from "react-router-dom";

const Homepage = () => {
  const { Title } = Typography;
  const { data, isFetching } = useGetCryptosQuery(10);

  if (isFetching) return "Loading...";
  const globalStats = data?.data?.stats;
  return (
    <>
      <Title level={2} className='heading'>
        Global Crypto State
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title='Total Cryptocurrencies'
            value={globalStats?.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Exchanges'
            value={millify(globalStats?.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Market Cap'
            value={`$${millify(globalStats?.totalMarketCap)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total 24h Volume'
            value={`$${millify(globalStats?.total24hVolume)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title=' TotalCryptocurrencies'
            value={globalStats?.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Markets'
            value={millify(globalStats?.totalMarkets)}
          />
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className='show-more'>
          <Link to='/cryptocurrencies'>show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>
          Latest Crypto news
        </Title>
        <Title level={3} className='show-more'>
          <Link to='/news'>show more</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
