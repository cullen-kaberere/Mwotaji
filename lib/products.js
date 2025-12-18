// Sample product data - replace with your actual products
export const products = [
  {
    id: "purpose-tee-black",
    name: "Purpose Tee - Black",
    price: 2500,
    slug: "purpose-tee-black",
    description: "Premium cotton tee with motivational message. Built for those who chase their dreams.",
    image: "/black-streetwear-tshirt.jpg",
    images: ["/black-streetwear-tshirt-front.jpg", "/black-streetwear-tshirt-back.jpg", "/black-streetwear-tshirt-detail.jpg"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "vision-hoodie-gray",
    name: "Vision Hoodie - Gray",
    price: 4500,
    slug: "vision-hoodie-gray",
    description: "Heavyweight hoodie for the visionaries. Comfort meets purpose in premium fabric.",
    image: "/gray-streetwear-hoodie.jpg",
    images: ["/gray-streetwear-hoodie-front.png", "/gray-streetwear-hoodie-back.jpg", "/gray-streetwear-hoodie-detail.jpg"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "dream-joggers-black",
    name: "Dream Joggers - Black",
    price: 3800,
    slug: "dream-joggers-black",
    description: "Premium joggers for the journey. Move with purpose, chase your dreams.",
    image: "/black-streetwear-joggers.jpg",
    images: ["/black-streetwear-joggers-front.jpg", "/black-streetwear-joggers-side.jpg", "/black-streetwear-joggers-detail.jpg"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "motivation-cap-black",
    name: "Motivation Cap - Black",
    price: 1800,
    slug: "motivation-cap-black",
    description: "Classic cap with embroidered branding. Crown your vision.",
    image: "/black-streetwear-cap.jpg",
    images: ["/black-streetwear-cap-front.jpg", "/black-streetwear-cap-side.jpg", "/placeholder.svg?height=600&width=500"],
    sizes: ["One Size"],
  },
  {
    id: "confidence-tee-white",
    name: "Confidence Tee - White",
    price: 2500,
    slug: "confidence-tee-white",
    description: "Clean white tee with bold statement. Wear your confidence.",
    image: "/placeholder.svg?height=600&width=500",
    images: [
      "/placeholder.svg?height=600&width=500",
      "/placeholder.svg?height=600&width=500",
      "/placeholder.svg?height=600&width=500",
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "legacy-bomber-black",
    name: "Legacy Bomber - Black",
    price: 6500,
    slug: "legacy-bomber-black",
    description: "Premium bomber jacket. Build your legacy, one day at a time.",
    image: "/placeholder.svg?height=600&width=500",
    images: [
      "/placeholder.svg?height=600&width=500",
      "/placeholder.svg?height=600&width=500",
      "/placeholder.svg?height=600&width=500",
    ],
    sizes: ["S", "M", "L", "XL"],
  },
]

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug)
}
