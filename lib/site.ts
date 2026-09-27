export const site = {
  name: "Shahzaib Gakhar",
  location: "Germany",
  email: "gakharconsultancy@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/shahzaibgakhar",
    instagram: "https://www.instagram.com/shahzaib_gakhar/",
    facebook: "https://www.facebook.com/itsgakhar/",
  },
} as const;

export const nav = [
  { href: "/#figures", key: "figures" },
  { href: "/#services", key: "services" },
  { href: "/#approach", key: "approach" },
  { href: "/#about", key: "about" },
  { href: "/#contact", key: "contact" },
] as const;

export const images = {
  hero: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=2000&q=80",
  campus:
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1400&q=80",
  students:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
  work: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
  workshop:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80",
  city: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1600&q=80",
  train:
    "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1400&q=80",
  library:
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1400&q=80",
  portrait: "/shahzaib-gakhar.jpg",
} as const;

export const stats = [
  { value: 4, suffix: "", key: "statPaths" },
  { value: 1, suffix: ":1", key: "statFormat" },
  { value: 3, suffix: "", key: "statSteps" },
] as const;

export const services = [
  { id: "01", image: images.campus },
  { id: "02", image: images.work },
  { id: "03", image: images.workshop },
  { id: "04", image: images.train },
] as const;

export const steps = [
  { image: images.library },
  { image: images.students },
  { image: images.city },
] as const;
