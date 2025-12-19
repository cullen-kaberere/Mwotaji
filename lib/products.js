// Sample product data - replace with your actual products
export const products = [
  {
    id: "mwotaju-essential-maroon",
    name: "Mwotaji Essential Maroon",
    price: 3000,
    slug: "mwotaji-essential-maroon",
    description: "Classic streetwear tee. Bold, comfortable, and made for the visionaries.",
    image: "/mwotaji25.jpg",
    images: ["/mwotaji25.jpg", "/mwotaji30.jpg", "/mwotaji13.jpg"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "mwotaji-essential-white",
    name: "Mwotaji Essential White",
    price: 3000,
    slug: "mwotaji-essential-white",
    description: "Heavyweight hoodie for the visionaries. Comfort meets purpose in premium fabric.",
    image: "/mwotaji26.jpg",
    images: ["/mwotaji14.jpg", "/mwotaji15.jpg", "/mwotaji26.jpg"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "mwotaji-essential-black",
    name: "Mwotaji Essential Black",
    price: 3000,
    slug: "mwotaji-essential-black",
    description: "Premium joggers for the journey. Move with purpose, chase your dreams.",
    image: "/mwotaji27.jpg",
    images: ["/mwotaji19.jpg", "/mwotaji24.jpg", "/mwotaji20.jpg"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "mwotaji-dri-fit-sports-tee",
    name: "Mwotaji Dri-Fit Sports Tee",
    price: 3500,
    slug: "mwotaji-dri-fit-sports-tee",
    description: "Dri-Fit, Athletic Cut, Free Mwotaji Branded Sports Bag Included. Only Available in 3 Colors: Black, White, Burgudy.",
    image: "/mwotaji28.jpg",
    images: ["/mwotaji13.jpg", "/mwotaji28.jpg", "/mwotaji2.jpg?height=600&width=500"],
    sizes: ["One Size"],
  },
  {
    id: "mwotaji-sports-vest",
    name: "Mwotaji Sports Vest",
    price: 3000,
    slug: "mwotaji-sports-vest",
    description: "Clean white tee with bold statement. Wear your confidence.",
    image: "/mwotaji8.jpg?height=600&width=500",
    images: [
      "/mwotaji8.jpg?height=600&width=500",
      "/mwotaji9.jpg?height=600&width=500",
      "/mwotaji5.jpg?height=600&width=500",
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
