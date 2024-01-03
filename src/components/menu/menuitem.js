export default function Menuitem() {
    return(
        <div className="flex flex-col gap-2 p-4 text-center transition-all bg-gray-300 rounded-lg hover:bg-white hover:shadow-md hover:shadow-black/25">
          <img src="/pizza.png" alt="pizza" />
          <h4 className="text-xl font-semibold ">Pepperoni Pizza</h4>
          <p className="text-sm text-gray-500">
            Vim iuvaret delicata accommodare no, eos elit autem ei. Mel putant
            malorum ut, alii veniam fierent eos ex. {" "}
          </p>
          <button className="px-4 py-2 text-white bg-red-500 rounded-full">Add to cart 12$</button>
        </div>
    );
    
} 