import React from 'react';
import { ProductJsonLd } from '../../..';
import Links from '../../components/links';

const AggregateOffer = () => (
  <>
    <h1>Product JSON-LD AggregateOffer</h1>

    <ProductJsonLd
      productName="Executive Anvil"
      aggregateOffer={{
        priceCurrency: 'USD',
        lowPrice: '119.99',
        highPrice: '139.99',
        offerCount: '5',
        offers: [
          {
            price: '119.99',
            priceCurrency: 'USD',
            priceValidUntil: '2020-11-05',
            itemCondition: 'https://schema.org/UsedCondition',
            availability: 'https://schema.org/InStock',
            url: 'https://www.example.com/executive-anvil',
            seller: {
              name: 'Executive Objects',
            },
            hasMerchantReturnPolicy: {
              merchantReturnDays: 30,
              returnPolicyCategory: 'MerchantReturnFiniteReturnWindow',
              returnMethod: 'ReturnByMail',
              returnFees: 'RestockingFee',
            },
          },
          {
            price: '139.99',
            priceCurrency: 'CAD',
            priceValidUntil: '2020-09-05',
            itemCondition: 'https://schema.org/UsedCondition',
            availability: 'https://schema.org/InStock',
            url: 'https://www.example.ca/executive-anvil',
            seller: {
              name: 'Executive Objects',
            },
            hasMerchantReturnPolicy: {
              merchantReturnDays: 30,
              returnPolicyCategory: 'MerchantReturnFiniteReturnWindow',
              returnMethod: 'ReturnByMail',
              returnFees: 'RestockingFee',
            },
          },
        ],
      }}
    />

    <Links />
  </>
);

export default AggregateOffer;
