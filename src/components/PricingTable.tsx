import React from 'react';

import { brandColors } from '../constants/brand';

import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';

const handleSubmit = (): void => {
  console.log('Something got submitted!');
};

const PricingTableComponent = () => {
  return (
    <PricingTable highlightColor={brandColors.purple}>
      <PricingSlot
        onClick={handleSubmit}
        buttonText='CHOOSE'
        title='Landing Page'
        priceText='only $69'
      >
        <PricingDetail>
          {' '}
          <b>FREE</b> domain
        </PricingDetail>
        <PricingDetail>
          {' '}
          <b>5 GB</b> storage
        </PricingDetail>
        <PricingDetail>
          {' '}
          <b>5</b> users
        </PricingDetail>
        <PricingDetail strikethrough>
          {' '}
          <b>Time tracking</b>
        </PricingDetail>
      </PricingSlot>
      <PricingSlot
        highlighted
        onClick={handleSubmit}
        buttonText='CHOOSE'
        title='One-Page Site'
        priceText='starting at $149'
      >
        <PricingDetail>
          {' '}
          <b>35</b> projects
        </PricingDetail>
        <PricingDetail>
          {' '}
          <b>15 GB</b> storage
        </PricingDetail>
        <PricingDetail>
          {' '}
          <b>Unlimited</b> users
        </PricingDetail>
        <PricingDetail>
          {' '}
          <b>Time tracking</b>
        </PricingDetail>
      </PricingSlot>
      <PricingSlot
        onClick={handleSubmit}
        buttonText='CHOOSE'
        title='Multi-Page Site'
        priceText='starting at $429'
      >
        <PricingDetail>
          {' '}
          <b>100</b> projects
        </PricingDetail>
        <PricingDetail>
          {' '}
          <b>30 GB</b> storage
        </PricingDetail>
        <PricingDetail>
          {' '}
          <b>Unlimited</b> users
        </PricingDetail>
        <PricingDetail>
          {' '}
          <b>Time tracking</b>
        </PricingDetail>
      </PricingSlot>
      <PricingSlot
        onClick={handleSubmit}
        buttonText='CHOOSE'
        title='E-Commerce Site'
        priceText='starting at $489'
      >
        <PricingDetail>
          {' '}
          <b>Unlimited</b> projects
        </PricingDetail>
        <PricingDetail>
          {' '}
          <b>75 GB</b> storage
        </PricingDetail>
        <PricingDetail>
          {' '}
          <b>Unlimited</b> users
        </PricingDetail>
        <PricingDetail>
          {' '}
          <b>Time tracking</b>
        </PricingDetail>
      </PricingSlot>
    </PricingTable>
  );
};

export default PricingTableComponent;
