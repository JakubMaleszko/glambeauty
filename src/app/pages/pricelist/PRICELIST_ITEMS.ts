export interface PriceLIstCategory {
    name: string;
    items: PricelistItem[];
}
export interface PricelistItem {
    name: string;
    price: string;
}

export const PRICELIST: PriceLIstCategory[] = [
    {
        name: 'Oprawa oka',
        items: [
            {name: '', price: ''},
            {name: 'Henna brwi z regulacją', price: '60 zł'},
            {name: "Henna pudrowa", price: '90 zł'},
            {name: "Laminacja brwi", price: "130 zł"},
            {name: "Lifting i laminacja rzęs" , price: "130 zł"}
        ]
    },
    {
        name: "Rzęsy",
        items: [
            { name: "", price: "UZUP / ZAŁ" },
            { name: "1 : 1", price: "130 / 170 zł" },
            { name: "2d", price: "130 / 170 zł" },
            { name: "3d Ola", price: "140 / 180 zł" },
            { name: "3–4d Julia", price: "140 / 170 zł" },
            { name: "4d Ola", price: "150 / 190 zł" },
            { name: "5d Julia", price: "150 / 180 zł" },
            { name: "5d Ola", price: "160 / 200 zł" },
            { name: "Wet Look", price: "160 / 200 zł" },
            { name: "Wispy Lashes Julia", price: "160 / 200 zł" },
            { name: "Wispy Lashes Ola", price: "170 / 220 zł" },
            { name: "Mega Volume", price: "180 / 250 zł" },
            { name: "Kim/Glammy Mess/skręt m/L", price: "170 / 220 zł" }
        ]
    },
    {
        name: "Zabiegi kosmetyczne",
        items: [
            {name: '', price: ''},
            { name: "Zabieg rewitalizujący z maską", price: "60min - 120 zł" },
            { name: "Oczyszczanie wodorowe BASIC", price: "60min - 200 zł" },
            { name: "Oczyszczanie wodorowe PREMIUM", price: "90min - 250 zł" },
            { name: "Zabieg bankietowy", price: "90min - 250 zł" },
            { name: "Zabieg falą radiową RF", price: "60min - 160 zł" },
            { name: "Infuzja tlenowa", price: "60min - 160 zł" },
            { name: "Peeling kawitacyjny", price: "30min - 80 zł" },
            { name: "Peeling kawitacyjny + ampułka + sonoforeza", price: "60min - 150 zł" }
        ]
    }
]

