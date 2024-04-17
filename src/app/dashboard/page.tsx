"use client"
import React, { useEffect, useState } from "react";
import CardDataStats from "@/components/fragemnts/CardDataStats";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import { cardStats } from "@/utils/dataObject";
import { useSelector } from "react-redux";


const Dashboard: React.FC = () => {
    const mode = useSelector((state: any) => state.darkMode.color);
    console.log(mode);

    return (
        <DefaultLayout>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                {cardStats.map((item, index) => (
                    <CardDataStats key={index} title={item.title} total={item.total} rate={item.rate} levelUp>
                        {item.icon}
                    </CardDataStats>
                ))}
            </div>

            <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                {/* <ChatCard /> */}
            </div>

        </DefaultLayout>
    );
};

export default Dashboard;
