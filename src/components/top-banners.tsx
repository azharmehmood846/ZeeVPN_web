"use client";

import { useState, useEffect } from 'react';

interface IpInfo {
    ip: string;
    isp: string;
    city: string;
    country: string;
}

export function TopBanners() {
    const [ipInfo, setIpInfo] = useState<IpInfo | null>(null);
    const [loading, setLoading] = useState(true);
    const [isProtected, setIsProtected] = useState(false);

    useEffect(() => {
        const fetchIpInfo = async () => {
            try {
                const response = await fetch('https://ipinfo.io/json');
                if (!response.ok) {
                    throw new Error('Failed to fetch IP info');
                }
                const data = await response.json();
                setIpInfo({
                    ip: data.ip,
                    isp: data.org,
                    city: data.city,
                    country: data.country,
                });
            } catch (error) {
                console.error("Error fetching IP info:", error);
                setIpInfo(null);
            } finally {
                setLoading(false);
            }
        };

        fetchIpInfo();
    }, []);

    return (
        <div>
            <div className="bg-gray-900 text-gray-300 text-sm py-2 px-4">
                <div className="container mx-auto flex justify-center items-center space-x-4 text-center h-5">
                    {loading ? (
                         <span className="text-white">Loading your info...</span>
                    ) : ipInfo ? (
                        <>
                            <span>Your IP: <span className="text-white">{ipInfo.ip}</span></span>
                            <span className="hidden md:inline">&bull;</span>
                            <span className="hidden md:block">Your ISP: <span className="text-white">{ipInfo.isp}</span></span>
                             <span className="hidden lg:inline">&bull;</span>
                            <span className="hidden lg:block">Status: <span className={isProtected ? "text-green-500 font-semibold" : "text-red-500 font-semibold"}>{isProtected ? "Protected" : "Unprotected"}</span></span>
                        </>
                    ) : (
                        <span className="text-red-400">Could not load your connection details.</span>
                    )}
                </div>
            </div>
            <div className="bg-blue-600 text-white text-center text-sm py-2 px-4">
                <p>Coming Soon: Our Android app is in development. Get ready for enhanced security on the go!</p>
            </div>
        </div>
    )
}
