import Container from '@/components/common/Container'
import React from 'react'
import OverviewCart from './OverviewCart'

export default function ProductOverview({className}) {

    // flash sale
    const FlashSale = [
        {
            id: 1,
            title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
            price: 1500,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        {
            id: 2,
            title: "Simple Mobile 4G LTE Prepaid Smartphone",
            price: 1500,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        {
            id: 3,
            title: "4K UHD LED Smart TV with Chromecast Built-in",
            price: 1500,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
    ]


    // best sellers
    const BestSellers = [
        {
            id: 1,
            title: "Samsung Electronics Samsung Galexy S21 5G",
            price: 1500,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        {
            id: 2,
            title: "Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone",
            price: 1500,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        {
            id: 3,
            title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
            price: 1500,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
    ]


    // top rated
    const TopRated = [
        {
            id: 1,
            title: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
            price: 1500,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        {
            id: 2,
            title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
            price: 1500,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        {
            id: 3,
            title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
            price: 1500,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
    ]



    // top rated
    const NewArrival = [
        {
            id: 1,
            title: "TOZO T6 True Wireless Earbuds Bluetooth Headpho...",
            price: 1500,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        {
            id: 2,
            title: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker...",
            price: 1500,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        {
            id: 3,
            title: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar...",
            price: 1500,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
    ]


  return (
    <div className={`${className} pb-22 `}>
        <Container>

            {/* product overview box */}
            <div className="flex justify-between gap-6 ">
                
                {/* FLASH SALE TODAY */}
                <div className="">
                    <h2 className=" font-Public_Sans font-semibold text-base leading-6 text-[#191C1F] mb-4  ">FLASH SALE TODAY</h2>
                    

                    {/* items of products */}
                    <div className="flex flex-col gap-4 ">
                        {FlashSale.map((item , index) => (
                            <OverviewCart key={index} title={item.title} price={item.price} image={item.image} />
                        ))}
                    </div>
                </div>
                
                {/* BEST SELLERS */}
                <div className="">
                    <h2 className=" font-Public_Sans font-semibold text-base leading-6 text-[#191C1F] mb-4  ">BEST SELLERS</h2>
                    

                    {/* items of products */}
                    <div className="flex flex-col gap-4 ">
                      {BestSellers.map((item , index) => (
                          <OverviewCart key={index} title={item.title} price={item.price} image={item.image} />
                      ))}
                    </div>
                </div>
                
                {/* TOP RATED */}
                <div className="">
                    <h2 className=" font-Public_Sans font-semibold text-base leading-6 text-[#191C1F] mb-4  ">TOP RATED</h2>
                    

                    {/* items of products */}
                    <div className="flex flex-col gap-4 ">
                      {TopRated.map((item , index) => (
                          <OverviewCart key={index} title={item.title} price={item.price} image={item.image} />
                      ))}
                    </div>
                </div>
                
                {/* NEW ARRIVAL */}
                <div className="">
                    <h2 className=" font-Public_Sans font-semibold text-base leading-6 text-[#191C1F] mb-4  ">NEW ARRIVAL</h2>
                    

                    {/* items of products */}
                    <div className="flex flex-col gap-4 ">
                      {NewArrival.map((item , index) => (
                          <OverviewCart key={index} title={item.title} price={item.price} image={item.image} />
                      ))}
                    </div>
                </div>



            </div>
        </Container>
    </div>
  )
}
