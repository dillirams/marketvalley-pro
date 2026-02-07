import { useMarketValleyStore } from "../store/create";

export function MyList() {
  const { closeList } = useMarketValleyStore();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeList}
        className="fixed inset-0 bg-black/30 z-40"
      />

      {/* Panel */}
      <div
        className="
          fixed
          m-1 
          right-0
          z-50
          h-130
          w-[70%]
          md:w-[40%]
          bg-white
          shadow-xl
          flex
          flex-col
          rounded-lg
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="font-semibold text-lg">My List</h2>
          <button
            onClick={closeList}
            className="text-xl font-bold text-gray-600"
          >
            ✕
          </button>
        </div>

        {/* Static list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          <ListItem name="Vegetable Oil" price="Nu 500" />
          <ListItem name="Rice Bag" price="Nu 1200" />
          <ListItem name="Sugar" price="Nu 220" />
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <button className="w-full bg-blue-600 text-white py-2 rounded-md">
            Send
          </button>
        </div>
      </div>
    </>
  );
}

function ListItem({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex items-center justify-between border rounded-md p-3">
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">{price}</p>
      </div>
      <button className="text-red-500 font-semibold">Remove</button>
    </div>
  );
}
