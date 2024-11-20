import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";


const Brands = () => {
  const [brands, setBrands] = useState([]); 
  const [filteredBrands, setFilteredBrands] = useState([]); 
  const [search, setSearch] = useState("");
  const [processedBrands, setProcessedBrands] = useState(new Set()); 

  useEffect(() => {
    fetch("./brands.json")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data); 
        setFilteredBrands(data); 
      })
      .catch((err) => console.error("Error fetching brands:", err));
  }, []);

  useEffect(() => {
    const results = brands.filter((brand) =>
      brand.brand_name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredBrands(results); 
  }, [search, brands]);

  const saleIsOn = (brand) => {
    
    if (!processedBrands.has(brand._id) && brand.isSaleOn ) {
      // Create animation
      const id = document.getElementById(brand._id);
      const div = document.createElement("div");
      div.innerHTML = `
      <div class="rounded-full bg-red-500 h-[10px] w-[10px]"></div>
      <h1 class=" text-purple-500 font-bold text-xl  animate__animated animate__bounceIn transition-all">Sale Is On</h1>
      `;
      div.classList = "flex gap-2 items-center justify-center";
     
      id.appendChild(div);

      // Update processed brands
      setProcessedBrands((prevSet) => new Set(prevSet).add(brand._id));
    }
    else if(!processedBrands.has(brand._id) && !brand.isSaleOn ) 
    {
        const id = document.getElementById(brand._id);
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="rounded-full bg-purple-500 h-[10px] w-[10px]"></div>
        <h1 class=" text-red-500 font-bold text-xl  animate__animated animate__bounceIn transition-all">No Sale Is On</h1>
        `;
       
        id.appendChild(div);
        div.classList = "flex gap-2 items-center justify-center";
        // Update processed brands
        setProcessedBrands((prevSet) => new Set(prevSet).add(brand._id));
    }
  };
  return (
    <div className=" backdrop-blur-md w-[90%] mx-auto p-5">
      <div className=" flex justify-between items-center mb-4 z-10">
        <h1 className="text-4xl font-bold">Brands</h1>
        <div>
          <label className="input input-bordered flex items-center gap-2 bg-navText text-black font-semibold">
            <input
              type="text"
              className="grow placeholder-black "
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)} // Update search state
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            filteredBrands.map((brand) => (
                <Link data-aos="zoom-in" to={brand._id} key={brand._id} className="brand h-full bg-navBg backdrop-blur-md text-navText hover:text-navBg hover:bg-navText p-4 border rounded-md shadow-md">
                    <img
                    src={brand.brand_logo}
                    alt={brand.brand_name}
                    className="h-fit mx-auto mb-3"
                    />
                    <h2 className="text-center text-2xl font-bold">{brand.brand_name}</h2>
                    <h2 className="text-center text-sm text-white font-semibold ">{brand.description}</h2>
                    <div className="flex items-center justify-between ">
                            <div id={brand._id} >
                            </div>
                                <button  type="button" onClick={(e) => {
                                            e.preventDefault(); 
                                            e.stopPropagation(); 
                                            saleIsOn(brand); 
                                        }}
                                className="btn font-bold text-xl text-purple-500 hover:bg-purple-500 hover:text-white mt-2 block"
                                >
                                View Coupon
                                </button>
                    </div>

                </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;
