// Sample product data - replace with your actual products
export const products = [
  {
    id: "mwotaju-essential-maroon",
    name: "Mwotaji Essential Maroon",
    price: 3000,
    slug: "mwotaji-essential-maroon",
    description: "Classic streetwear tee. Bold, comfortable, and made for the visionaries.",
    image: "/black-streetwear-tshirt.jpg",
    images: ["/black-streetwear-tshirt-front.jpg", "/black-streetwear-tshirt-back.jpg", "/black-streetwear-tshirt-detail.jpg"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "mwotaji-essential-white",
    name: "Mwotaji Essential White",
    price: 3000,
    slug: "mwotaji-essential-white",
    description: "Heavyweight hoodie for the visionaries. Comfort meets purpose in premium fabric.",
    image: "/gray-streetwear-hoodie.jpg",
    images: ["/gray-streetwear-hoodie-front.png", "/gray-streetwear-hoodie-back.jpg", "/gray-streetwear-hoodie-detail.jpg"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "mwotaji-essential-black",
    name: "Mwotaji Essential Black",
    price: 3000,
    slug: "mwotaji-essential-black",
    description: "Premium joggers for the journey. Move with purpose, chase your dreams.",
    image: "/black-streetwear-joggers.jpg",
    images: ["/black-streetwear-joggers-front.jpg", "/black-streetwear-joggers-side.jpg", "/black-streetwear-joggers-detail.jpg"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "mwotaji-dri-fit-sports-tee",
    name: "Mwotaji Dri-Fit Sports Tee",
    price: 3500,
    slug: "mwotaji-dri-fit-sports-tee",
    description: "Dri-Fit, Athletic Cut, Free Mwotaji Branded Sports Bag Included. Only Available in 3 Colors: Black, White, Burgudy.",
    image: "/black-streetwear-cap.jpg",
    images: ["/black-streetwear-cap-front.jpg", "/black-streetwear-cap-side.jpg", "/placeholder.svg?height=600&width=500"],
    sizes: ["One Size"],
  },
  {
    id: "mwotaji-sports-vest",
    name: "Mwotaji Sports Vest",
    price: 3000,
    slug: "mwotaji-sports-vest",
    description: "Clean white tee with bold statement. Wear your confidence.",
    image: "/placeholder.svg?height=600&width=500",
    images: [
      "/placeholder.svg?height=600&width=500",
      "/placeholder.svg?height=600&width=500",
      "/placeholder.svg?height=600&width=500",
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
