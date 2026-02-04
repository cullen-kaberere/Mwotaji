// Sample product data - replace with your actual products
export const products = [
  {
    id: "mwotaji-essential-tee-burgundy",
    name: "Mwotaji Essential Tee - Burgundy",
    price: 3000,
    slug: "mwotaji-essential-tee-burgundy",
    description: "Classic streetwear tee. Bold, comfortable, and made for the visionaries.",
    image: "/mwotaji25.jpg",
    images: ["/mwotaji25.jpg", "/mwotaji30.jpg", "/mwotaji13.jpg"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "mwotaji-essential-tee-white",
    name: "Mwotaji Essential Tee - White",
    price: 3000,
    slug: "mwotaji-essential-tee-white",
    description: "Heavyweight hoodie for the visionaries. Comfort meets purpose in premium fabric.",
    image: "/mwotaji10.jpg",
    images: ["/mwotaji26.jpg","/mwotaji-w-t2.JPEG", "/mwotaji3.jpg" ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "mwotaji-essential-tee-black",
    name: "Mwotaji Essential Tee - Black",
    price: 3000,
    slug: "mwotaji-essential-tee-black",
    description: "Essential black sport tee. Bold, comfortable, and made for the visionaries.",
    image: "/mwotaji27.jpg",
    images: ["/mwotaji27.jpg", "/mwotaji18.jpg", "/mwotaji21.jpg"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "mwotaji-sports-vest-burgundy",
    name: "Mwotaji Sports Vest - Burgundy",
    price: 3500,
    slug: "mwotaji-sports-vest-burgundy",
    description: "Clean burgundy vest with bold statement. Wear your confidence.",
    image: "/mwotaji28.jpg",
    images: ["/mwotaji-b-v3.jpeg", "/mwotaji-b-v1.jpeg", "/mwotaji-b-v2.jpeg?height=600&width=500"],
    sizes: ["One Size"],
  },
  {
    id: "mwotaji-sports-vest-white",
    name: "Mwotaji Sports Vest - White",
    price: 3000,
    slug: "mwotaji-sports-vest-white",
    description: "Clean white vest with bold statement. Wear your confidence.",
    image: "/mwotaji17.jpg?height=600&width=500",
    images: [
      "/mwotaji9.jpg?height=600&width=500",
      "/mwotaji-w-v1.JPEG?height=600&width=500",
      "/mwotaji-w-v2.JPEG?height=600&width=500",
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "mwotaji-sports-vest-black",
    name: "Mwotaji Sports Vest - Black",
    price: 3000,
    slug: "mwotaji-sports-vest-black",
    description: "Clean black vest with bold statement. Wear your confidence.",
    image: "/mwotaji15.jpg?height=600&width=500",
    images: [
      "/mwotaji8.jpg?height=600&width=500",
      "/mwotaji5.jpg?height=600&width=500",
      "/mwotaji23.jpg?height=600&width=500",
      
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  // {
  //   id: "legacy-bomber-black",
  //   name: "Legacy Bomber - Black",
  //   price: 6500,
  //   slug: "legacy-bomber-black",
  //   description: "Premium bomber jacket. Build your legacy, one day at a time.",
  //   image: "/placeholder.svg?height=600&width=500",
  //   images: [
  //     "/placeholder.svg?height=600&width=500",
  //     "/placeholder.svg?height=600&width=500",
  //     "/placeholder.svg?height=600&width=500",
  //   ],
  //   sizes: ["S", "M", "L", "XL"],
  // },
]

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug)
}
