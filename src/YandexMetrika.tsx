'use client';

import Script from 'next/script';

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ym: (id: number, action: string, options?: any) => void;
    }
}

export default function YandexMetrika() {
    return (
        <>
            <Script
                id="yandex-metrika"
                strategy="afterInteractive"
                src="https://mc.yandex.ru/metrika/tag.js"
                onLoad={() => {
                    if (typeof window !== 'undefined' && window.ym) {
                        window.ym(103795671, 'init', {
                            ssr: true,
                            webvisor: true,
                            clickmap: true,
                            ecommerce: "dataLayer",
                            accurateTrackBounce: true,
                            trackLinks: true
                        });
                    }
                }}
            />
            <noscript>
                <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://mc.yandex.ru/watch/103795671"
                        style={{ position: 'absolute', left: '-9999px' }}
                        alt=""
                    />
                </div>
            </noscript>
        </>
    );
}
