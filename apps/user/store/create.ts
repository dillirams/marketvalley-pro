import { create } from 'zustand';

interface MarketValleyState{
    showList:Boolean
    setShowList:()=>void
    closeList:()=>void
}

export const useMarketValleyStore=create<MarketValleyState>((set, get)=>({
    showList:false,
    setShowList:()=>set((bol)=>({showList:!bol.showList})),
    closeList:()=>set({showList:false})
}))