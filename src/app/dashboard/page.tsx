"use client"
import React, { useEffect, useState } from "react";
import ChartOne from "@/components/fragemnts/Charts/ChartOne";
import ChartThree from "@/components/fragemnts/Charts/ChartThree";
import ChartTwo from "@/components/fragemnts/Charts/ChartTwo";
import ChatCard from "@/components/fragemnts/Chat/ChatCard";
import TableOne from "@/components/fragemnts/Tables/TableOne";
import CardDataStats from "@/components/fragemnts/CardDataStats";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import { cardStats } from "@/utils/dataObject";
import { IoEyeOutline } from "react-icons/io5";
import useColorMode from "@/hooks/useColorModes";


const Dashboard: React.FC = () => {
    const [color, setColor] = useState('');

    useEffect(() => {
        const updateColorFromLocalStorage = () => {
            const storedColor = localStorage.getItem('color-theme');
            if (storedColor === 'light' || storedColor === 'dark') {
                setColor(storedColor);
            } else {
                setColor('light');
                localStorage.setItem('color-theme', 'light');
            }
        };

        // Panggil fungsi updateColorFromLocalStorage saat komponen dimuat pertama kali
        updateColorFromLocalStorage();

        // Tambahkan event listener untuk memantau perubahan di localStorage
        const handleStorageChange = (event: any) => {
            if (event.key === 'color-theme') {
                updateColorFromLocalStorage();
            }
        };
        window.addEventListener('storage', handleStorageChange);

        // Hapus event listener saat komponen dibongkar
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    console.log(color);


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
