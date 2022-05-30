import React from "react";

import Pricing from "./Pricing";

import "./App.css";

function App() {
  const pricing = [
    {
      name: "FREE",
      price: "0",
      currency: "$",
      pricePer: "month",
      features: [
        {
          name: "Single User",
          access: true,
        },
        {
          name: "5GB Storage",
          access: true,
        },
        {
          name: "Unlimited Public Projects",
          access: true,
        },
        {
          name: "Community Access",
          access: true,
        },
        {
          name: "Unlimited Private Projects",
          access: false,
        },
        {
          name: "Dedicated Phone Support",
          access: false,
        },
        {
          name: "Free Subdomain",
          access: false,
        },
        {
          name: "Monthly Status Reports",
          access: false,
        },
      ],
    },
    {
      name: "PLUS",
      price: "9",
      currency: "$",
      pricePer: "month",
      features: [
        {
          name: "Single User",
          access: true,
        },
        {
          name: "5GB Storage",
          access: true,
        },
        {
          name: "Unlimited Public Projects",
          access: true,
        },
        {
          name: "Community Access",
          access: true,
        },
        {
          name: "Unlimited Private Projects",
          access: true,
        },
        {
          name: "Dedicated Phone Support",
          access: true,
        },
        {
          name: "Free Subdomain",
          access: true,
        },
        {
          name: "Monthly Status Reports",
          access: false,
        },
      ],
    },
    {
      name: "PRO",
      price: "49",
      currency: "$",
      pricePer: "month",
      features: [
        {
          name: "Single User",
          access: true,
        },
        {
          name: "5GB Storage",
          access: true,
        },
        {
          name: "Unlimited Public Projects",
          access: true,
        },
        {
          name: "Community Access",
          access: true,
        },
        {
          name: "Unlimited Private Projects",
          access: true,
        },
        {
          name: "Dedicated Phone Support",
          access: true,
        },
        {
          name: "Free Subdomain",
          access: true,
        },
        {
          name: "Monthly Status Reports",
          access: true,
        },
      ],
    },
  ];
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {pricing.map((price) => (
            <Pricing {...price} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
