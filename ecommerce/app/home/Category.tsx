import Image from "next/image";

function Category() {
  const categories = [
    {
      image: "/category/fruits-vegetables.png",
      title: "Fruits & Vegetables",
    },
    {
      image: "/category/dairy-breakfast.png",
      title: "Dairy & Breakfast",
    },
    {
      image: "/category/snacks-munchies.png",
      title: "Snacks & Munchies",
    },
    {
      image: "/category/cold-Drinks-Juices.png",
      title: "Cold Drinks & Juices",
    },
    {
      image: "/category/instant-Frozen.png",
      title: "Instant & Frozen",
    },
    {
      image: "/category/personal-Care.png",
      title: "Personal Care",
    },
    {
      image: "/category/home-Kitchen.png",
      title: "Home & Kitchen",
    },
    {
      image: "/category/baby-Care.png",
      title: "Baby Care",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 ">
        
        {/* Heading */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Shop by Category</h2>
          <button className="text-green-600 text-sm font-medium hover:underline">
            see all →
          </button>
        </div>

        {/* Categories */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide ">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[110px] cursor-pointer group hover:text-green-600"
            >
              {/* Image Card */}
              <div className="w-24 h-24 md:w-28 md:h-28 relative rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <p className="text-xs md:text-sm text-center mt-2 font-medium ">
                {category.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Category;
