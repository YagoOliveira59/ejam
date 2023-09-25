"use client";

import "animate.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(0);
  let [currentIndex, setCurrentIndex] = useState(1);
  let currentItemId = 1;
  const headerItems = [
    {
      id: 1,
      icon: "check",
      text: "30-DAY SATISFACTION GUARANTEE",
    },
    {
      id: 2,
      icon: "delivery",
      text: "Free delivery on orders over $40.00",
    },
    {
      id: 3,
      icon: "heart",
      text: "50.000+ HAPPY CUSTOMERS",
    },
    {
      id: 4,
      icon: "safe",
      text: "100% Money Back Guarantee",
    },
  ];
  const paymentOptions = [
    {
      name: "Visa",
      icon: "visa",
    },
    {
      name: "Shop pay",
      icon: "shop",
    },
    {
      name: "PayPal",
      icon: "paypal",
    },
    {
      name: "Mastercard",
      icon: "master",
    },
    {
      name: "Google Pay",
      icon: "googlepay",
    },
    {
      name: "Apple Pay",
      icon: "apple",
    },
    {
      name: "Amex",
      icon: "amex",
    },
  ];
  const stepperOptions = [
    {
      id: 1,
      name: "Cart Review",
      complete: true,
    },
    {
      id: 2,
      name: "Checkout",
      complete: true,
    },
    {
      id: 3,
      name: "Special Offer",
      complete: false,
    },
    {
      id: 4,
      name: "Confirmation",
      complete: false,
    },
  ];
  const depoiments = [
    {
      id: 1,
      name: "Ken T.",
      isVerified: true,
      comment:
        "“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”",
      rating: [1, 2, 3, 4, 5],
    },
  ];
  const currentStep = 3;
  function getCurrentDimension() {
    setScreenWidth(window.innerWidth);
  }
  useEffect(() => {
    getCurrentDimension();
    window.addEventListener('resize', getCurrentDimension);
    return () => window.removeEventListener('resize', getCurrentDimension);
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const [currentItem, setCurrentItem] = useState(setInitialItem());

  function setInitialItem() {
    let item = headerItems.find((item) => item.id === currentIndex);
    return item;
  }

  function nextItem() {
    if (currentIndex < headerItems.length) setCurrentIndex((currentIndex += 1));
    let item = headerItems.find((item) => item.id === currentIndex);
    return setCurrentItem(item);
  }

  function prevItem() {
    if (currentIndex > 1) setCurrentIndex((currentIndex -= 1));
    let item = headerItems.find((item) => item.id === currentIndex);
    return setCurrentItem(item);
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div
        className={`header-container w-full min-w-full  bg-white ${
          screenWidth >= 1200 ? "" : " fixed left-0 z-30"
        }`}
      >
        {screenWidth >= 1200 ? (
          <div className={`w-full min-w-full bg-blue-hf flex justify-center`}>
            <div className="max-w-1500 w-1500 items-center justify-between normal:h-12.2 flex px-32">
              {headerItems.map((item) => (
                <div
                  key={item.icon}
                  className="flex items-center gap-2 font-medium text-xs uppercase"
                >
                  <Image
                    src={`/${item.icon}.svg`}
                    alt="heart icon"
                    width={22}
                    height={22}
                  />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            className={`w-full min-w-full items-center justify-between small:h-10.2 normal:h-12.2 flex py-2.5 px-5 bg-blue-hf`}
          >
            <button
              className="w-5 h-5 flex items-center justify-center"
              onClick={prevItem}
            >
              <Image
                src={`/arrow.svg`}
                alt="heart icon"
                width={12}
                height={12}
              />
            </button>
            <div className="flex items-center gap-2 font-medium text-xs uppercase text-white">
              <Image
                src={`/${currentItem.icon}.svg`}
                alt="heart icon"
                width={22}
                height={22}
              />
              {currentItem.text}
            </div>
            <button
              className="w-5 h-5 flex items-center justify-center"
              onClick={nextItem}
            >
              <Image
                src={`/arrow.svg`}
                alt="heart icon"
                width={12}
                height={12}
                style={{ transform: "rotate(180deg)" }}
              />
            </button>
          </div>
        )}
        <div className="flex justify-center">
          <div
            className={`logos-container ${
              screenWidth >= 1200
                ? "normal:max-w-1500 normal:w-1500"
                : "small:w-full small:min-w-full"
            }  normal:px-32 small:px-5 normal:h-24 small:h-60 flex justify-between items-center`}
          >
            <Image
              src={`/clarifion_logo.png`}
              alt="heart icon"
              width={screenWidth >= 1200 ? 192 : 106.67}
              height={screenWidth >= 1200 ? 36 : 20}
            />
            <div className="flex normal:gap-8 small:gap-4">
              <Image
                src={`/mcafee.svg`}
                alt="heart icon"
                width={screenWidth >= 1200 ? 88 : 44}
                height={screenWidth >= 1200 ? 32 : 16}
              />
              <Image
                src={`/norton.svg`}
                alt="heart icon"
                width={screenWidth >= 1200 ? 82 : 41}
                height={screenWidth >= 1200 ? 32 : 16}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`content-container  normal:px-32 small:px-5 text-black flex flex-col items-center ${
          screenWidth >= 1200 ? "max-w-1500" : "w-full min-w-full mt-32"
        }`}
      >
        <div className="w-full min-w-full text-black font-normal mb-6">
          <p className="normal:text-5xl small:text-32 text-center">
            Wait ! your order in progress.
          </p>
          <p className="normal:text-2xl small:text-base text-center text-gray-ej">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
        {screenWidth >= 1200 ? (
          <div className="flex text-xl justify-between w-full mb-10">
            {stepperOptions.map((item) => (
              <div key={item.id}>
                <div
                  className="flex items-center justify-center gap-5"
                  style={{
                    fontWeight: currentStep === item.id ? "bold" : "",
                  }}
                >
                  {item.complete ? (
                    <Image
                      src={`/confirm.svg`}
                      alt="heart icon"
                      width={40}
                      height={40}
                    />
                  ) : (
                    <div
                      className={`rounded-full w-10 h-10 border-blue-2 border-1 flex items-center justify-center text-xl`}
                      style={{
                        backgroundColor:
                          currentStep === item.id ? "#2C7EF8" : "",
                        color: currentStep === item.id ? "#FFFFFF" : "#2C7EF8",
                      }}
                    >
                      {item.id}
                    </div>
                  )}
                  Step {item.id}: {item.name}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}

        <div>
          {screenWidth >= 1200 ? (
            <div
              className="product-container rounded-10 w-full mb-16 p-10 flex justify-between"
              style={{
                backgroundColor: "#FAFAFA",
                height: "879px",
                width: "1245px",
              }}
            >
              <div className="flex flex-col gap-6">
                <div
                  className="flex"
                  style={{ width: "575px", height: "591px" }}
                >
                  <Image
                    className="rounded-10"
                    src={`/clarifion.webp`}
                    alt="heart icon"
                    width={575}
                    height={591}
                  />
                </div>
                <div
                  className="rounded-10 bg-white p-6"
                  style={{ width: "575px", height: "186px" }}
                >
                  {depoiments.map((item) => (
                    <div key={item.id} className="gap-18 flex flex-col">
                      <div className="flex gap-3">
                        <Image
                          className="rounded-full"
                          src={`/penson.png`}
                          alt="heart icon"
                          width={48}
                          height={48}
                        />
                        <div
                          className="flex flex-col justify-center"
                          style={{ gap: 7 }}
                        >
                          <div className="flex" style={{ gap: 5 }}>
                            {item.rating.map((star) => (
                              <Image
                                key={star}
                                className="rounded-full"
                                src={`/rating.svg`}
                                alt="heart icon"
                                width={12}
                                height={12}
                              />
                            ))}
                          </div>
                          <div className="flex gap-10 items-center">
                            <p className="font-bold text-sm">{item.name}</p>
                            <div className="flex gap-10 items-center">
                              <Image
                                src={`/verified.svg`}
                                alt="heart icon"
                                width={16}
                                height={16}
                              />
                              <p
                                className="text-xs"
                                style={{ color: "#5BB59A" }}
                              >
                                Verified Customer
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-ej text-base">{item.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-7" style={{ maxWidth: 550 }}>
                <p className="text-32 capitalize font-normal text-left text-format">
                  <span className="text-blue-2">ONE TIME ONLY </span>special
                  price for 6 extra Clarifion for only
                  <span className="text-blue-2"> $14 each</span> ($84.00 total!)
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <div
                      className="bg-blue-2 rounded-10 flex items-center justify-center"
                      style={{ width: 134, height: 134 }}
                    >
                      <div
                        className="flex items-center justify-center"
                        style={{ width: 134, height: 134 }}
                      >
                        <Image
                          src={`/clarifion1.webp`}
                          alt="heart icon"
                          width={120}
                          height={120}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-start gap-10 w-full">
                      <div className="flex w-full items-start justify-between">
                        <p className="text-xl text-format">
                          Clarifion Air Ionizer
                        </p>
                        <div className="flex items-center gap-10">
                          <p
                            className="font-semibold line-through text-base text-format"
                            style={{ color: "#969696" }}
                          >
                            $180
                          </p>
                          <p className="font-semibold text-xl text-format text-blue-2">
                            $84
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        <Image
                          src={`/star.svg`}
                          alt="heart icon"
                          width={18}
                          height={18}
                        />
                        <Image
                          src={`/star.svg`}
                          alt="heart icon"
                          width={18}
                          height={18}
                        />
                        <Image
                          src={`/star.svg`}
                          alt="heart icon"
                          width={18}
                          height={18}
                        />
                        <Image
                          src={`/star.svg`}
                          alt="heart icon"
                          width={18}
                          height={18}
                        />
                        <Image
                          src={`/star.svg`}
                          alt="heart icon"
                          width={18}
                          height={18}
                        />
                      </div>
                      <div
                        className="gap-4 flex font-light text-base"
                        style={{ color: "#37465A" }}
                      >
                        <div className="relative flex items-center w-5 justify-center">
                          <span className="animate-ping relative inline-flex w-3 h-3 rounded-full bg-blue-2"></span>
                        </div>
                        12 left in Stock
                      </div>
                      <p className="text-base text-left font-normal text-gray-ej text-format">
                        Simply plug a Clarifion into any standard outlet and
                        replace bulky, expensive air purifiers with a simple.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 text-gray-ej">
                  <div className="text-base text-format flex items-center gap-3">
                    <Image
                      src={`/check-item.svg`}
                      alt="heart icon"
                      width={22}
                      height={22}
                    />
                    <p>
                      Negative Ion Technology may
                      <span className="font-bold"> help with allergens</span>
                    </p>
                  </div>
                  <div className="text-base text-format flex items-center gap-3">
                    <Image
                      src={`/check-item.svg`}
                      alt="heart icon"
                      width={22}
                      height={22}
                    />
                    <p>
                      Designed for
                      <span className="font-bold"> air rejuvenation</span>
                    </p>
                  </div>
                  <div className="text-base text-format flex items-center gap-3">
                    <Image
                      src={`/check-item.svg`}
                      alt="heart icon"
                      width={22}
                      height={22}
                    />
                    <p>
                      <span className="font-bold">Perfect for every room </span>
                      in all types of places.
                    </p>
                  </div>
                </div>
                <div
                  className="rounded-10 h-14 py-3 px-4 w-542"
                  style={{ backgroundColor: "#EDF3FD" }}
                >
                  <div className="flex gap-4 items-center">
                    <div
                      className="bg-blue-2 rounded-full flex items-center justify-center"
                      style={{ width: 32, height: 32 }}
                    >
                      <div
                        className="flex items-center justify-center"
                        style={{ width: 19, height: 19 }}
                      >
                        <Image
                          src={`/percent.svg`}
                          alt="heart icon"
                          width={12}
                          height={12}
                        />
                      </div>
                    </div>
                    <p className="text-base text-format">
                      Save <span className="text-blue-2">53%</span> and get{" "}
                      <span className="text-blue-2"> 6 extra Clarifision</span>{" "}
                      for only <span className="text-blue-2"> $14 Each</span>.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 w-542">
                  <button
                    className="w-full flex items-center justify-center rounded-50 text-white font-bold text-xl uppercase gap-4 bg-claim"
                    style={{ height: 59 }}
                  >
                    Yes - Claim my discount
                    <Image
                      src={`/go.svg`}
                      alt="heart icon"
                      width={16}
                      height={16}
                    />
                  </button>
                  <div
                    className="rounded border-1 flex flex-col text-gray-ej text-xs text-format py-2 px-4 gap-4"
                    style={{ height: 33 }}
                  >
                    <div className="flex items-center gap-3">
                      <p>Free shipping</p>|
                      <div className="flex items-center gap-10">
                        <Image
                          src={`/lock.svg`}
                          alt="lock icon"
                          width={12}
                          height={12}
                        />
                        <p>Secure 256-bit SSL encryption</p>
                      </div>
                      |
                      <div className="flex gap-0.5 justify-center">
                        {paymentOptions.map((item) => (
                          <Image
                            key={item.icon}
                            src={`/payments/${item.icon}.svg`}
                            alt="heart icon"
                            width={24}
                            height={14}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <a className="text-center text-format text-red-600 uppercase font-medium text-lg underline">
                    No thanks, I don’t want this.
                  </a>
                </div>
                <div className="flex gap-4 items-start">
                  <Image
                    src={`/guarantee2.png`}
                    alt="heart icon"
                    width={88}
                    height={88}
                  />
                  <p className="text-base text-format text-gray-ej">
                    If you are not completely thrilled with your Clarifion - We
                    have a{" "}
                    <span className="font-bold">
                      30 day satisfaction guarantee
                    </span>
                    . Please refer to our return policy at the bottom of the
                    page for more details. Happy Shopping!
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="product-container w-full flex flex-col gap-6 mb-50">
              <p className="small:text-2xl capitalize font-normal text-center">
                <span className="text-blue-2">ONE TIME ONLY </span>special price
                for 6 extra Clarifion for only
                <span className="text-blue-2"> $14 each</span> ($84.00 total!)
              </p>
              <div className="flex text-xs justify-between">
                {stepperOptions.map((item) => (
                  <div key={item.id}>
                    <div
                      className="flex flex-col items-center justify-center gap-2"
                      style={{
                        fontWeight: currentStep === item.id ? "bold" : "",
                      }}
                    >
                      {item.complete ? (
                        <Image
                          src={`/confirm.svg`}
                          alt="heart icon"
                          width={20}
                          height={20}
                        />
                      ) : (
                        <div
                          className={`rounded-full w-5 h-5 border-blue-2 border-1 flex items-center justify-center text-sm`}
                          style={{
                            backgroundColor:
                              currentStep === item.id ? "#2C7EF8" : "",
                            color:
                              currentStep === item.id ? "#FFFFFF" : "#2C7EF8",
                          }}
                        >
                          {item.id}
                        </div>
                      )}
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
              <div className="overflow-hidden flex justify-center items-center">
                {scrollPosition >= 250 ? (
                  <div></div>
                ) : (
                  <Image
                    className="product_image rounded-10"
                    src={`/clarifion.webp`}
                    alt="heart icon"
                    width={screenWidth >= 1200 ? 88 : 320}
                    height={screenWidth >= 1200 ? 32 : 328}
                  />
                )}
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="bg-blue-2 rounded-10 flex items-center justify-center">
                    <Image
                      src={`/clarifion1.webp`}
                      alt="heart icon"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-10 w-full">
                    <div className="flex w-full items-center justify-between">
                      <p className="small:text-sm">Clarifion Air Ionizer</p>
                      <div className="flex items-center gap-2">
                        <p
                          className="font-semibold line-through text-10"
                          style={{ color: "#969696" }}
                        >
                          $180
                        </p>
                        <p className="font-semibold text-sm text-blue-2">$84</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      <Image
                        src={`/star.svg`}
                        alt="heart icon"
                        width={12}
                        height={12}
                      />
                      <Image
                        src={`/star.svg`}
                        alt="heart icon"
                        width={12}
                        height={12}
                      />
                      <Image
                        src={`/star.svg`}
                        alt="heart icon"
                        width={12}
                        height={12}
                      />
                      <Image
                        src={`/star.svg`}
                        alt="heart icon"
                        width={12}
                        height={12}
                      />
                      <Image
                        src={`/star.svg`}
                        alt="heart icon"
                        width={12}
                        height={12}
                      />
                    </div>
                    <div
                      className="gap-4 flex font-light text-xs"
                      style={{ color: "#37465A" }}
                    >
                      <div className="relative flex items-center w-3 justify-center">
                        <span className="animate-ping relative inline-flex w-1.5 h-1.5 rounded-full bg-blue-2"></span>
                      </div>
                      12 left in Stock
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center font-normal text-gray-ej">
                  Simply plug a Clarifion into any standard outlet and replace
                  bulky, expensive air purifiers with a simple.
                </p>
              </div>
              <div className="flex flex-col gap-4 text-gray-ej">
                <div className="text-xs flex items-center gap-3">
                  <Image
                    src={`/check-item.svg`}
                    alt="heart icon"
                    width={16}
                    height={16}
                  />
                  <p>
                    Negative Ion Technology may
                    <span className="font-bold"> help with allergens</span>
                  </p>
                </div>
                <div className="text-xs flex items-center gap-3">
                  <Image
                    src={`/check-item.svg`}
                    alt="heart icon"
                    width={16}
                    height={16}
                  />
                  <p>
                    Designed for
                    <span className="font-bold"> air rejuvenation</span>
                  </p>
                </div>
                <div className="text-xs flex items-center gap-3">
                  <Image
                    src={`/check-item.svg`}
                    alt="heart icon"
                    width={16}
                    height={16}
                  />
                  <p>
                    <span className="font-bold">Perfect for every room </span>
                    in all types of places.
                  </p>
                </div>
              </div>
              <div
                className="rounded-10 h-16 py-3 px-4"
                style={{ backgroundColor: "#EDF3FD" }}
              >
                <div className="flex gap-4">
                  <div
                    className="bg-blue-2 rounded-full flex items-center justify-center"
                    style={{ width: 24, height: 24, minWidth: 24 }}
                  >
                    <div
                      className="flex items-center justify-center"
                      style={{ width: 19, height: 19 }}
                    >
                      <Image
                        src={`/percent.svg`}
                        alt="heart icon"
                        width={12}
                        height={12}
                      />
                    </div>
                  </div>
                  <p className="text-sm">
                    Save <span className="text-blue-2">53%</span> and get{" "}
                    <span className="text-blue-2"> 6 extra Clarifision</span>{" "}
                    for only <span className="text-blue-2"> $14 Each</span>.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button className="w-full h-12.2 flex items-center justify-center rounded-50 text-white font-bold text-sm uppercase gap-4 bg-claim">
                  Yes - Claim my discount
                  <Image
                    src={`/go.svg`}
                    alt="heart icon"
                    width={12}
                    height={12}
                  />
                </button>
                <div className="rounded border-1 h-70 flex flex-col text-gray-ej text-xs py-2 px-4 gap-3">
                  <div className="flex items-center gap-3">
                    <p>Free shipping</p>|
                    <div className="flex items-center">
                      <Image
                        src={`/lock.svg`}
                        alt="lock icon"
                        width={12}
                        height={12}
                      />
                      <p>Secure 256-bit SSL encryption</p>
                    </div>
                  </div>
                  <hr className="new4"></hr>
                  <div className="flex gap-0.5 justify-center">
                    {paymentOptions.map((item) => (
                      <Image
                        key={item.icon}
                        src={`/payments/${item.icon}.svg`}
                        alt="heart icon"
                        width={24}
                        height={14}
                      />
                    ))}
                  </div>
                </div>
                <a className="text-center text-red-600 uppercase font-medium text-xs underline">
                  No thanks, I don’t want this.
                </a>
              </div>
              <div className="flex gap-4 items-start">
                <Image
                  src={`/guarantee2.png`}
                  alt="heart icon"
                  width={48}
                  height={48}
                />
                <p className="text-xs text-gray-ej">
                  If you are not completely thrilled with your Clarifion - We
                  have a{" "}
                  <span className="font-bold">
                    30 day satisfaction guarantee
                  </span>
                  . Please refer to our return policy at the bottom of the page
                  for more details. Happy Shopping!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className={`footer w-full min-w-full normal:h-88 small:h-102 bg-blue-hf flex justify-center `}
      >
        <div
          className={`normal:px-32 small:px-5 normal:h-88 small:h-102 items-center flex font-normal text-white  ${
            screenWidth >= 1200
              ? "justify-between w-1500 max-w-1500"
              : "flex-col justify-center gap-4 w-full min-w-full"
          }`}
        >
          <div className="flex normal:gap-4 normal:text-base small:gap-3 small:text-xs">
            <p className="capitalize">Copyright (c) 2023</p>|
            <p className="lowercase">Clarifionsupport@clarifion.com</p>
          </div>
          <div className="flex normal:gap-4 normal:text-base small:gap-3 small:text-xs">
            <Image
              src={`/lock.svg`}
              alt="lock icon"
              width={screenWidth >= 1200 ? 16 : 13}
              height={screenWidth >= 1200 ? 16 : 13}
            />
            <p>Secure 256-bit SSL encryption.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
