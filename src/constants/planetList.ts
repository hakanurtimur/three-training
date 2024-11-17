import { PlanetModel } from "@/models/planetModel";

export const planetList: PlanetModel[] = [
  {
    name: "Mercury",
    scaledDistance: 52.89,
    scaledRadius: 1.6936,
    orbitalAngularSpeed: 0.0946,
    rotationSpeed: 0.004, // Kendi ekseni etrafındaki dönüş hızı
    initialAngle: 7, // Başlangıç açısı
    imageUri: "/mercuryTexture.jpg",
  },
  {
    name: "Venus",
    scaledDistance: 61.02,
    scaledRadius: 1.8909,
    orbitalAngularSpeed: 0.0819,
    rotationSpeed: 0.002,
    initialAngle: 3, // Radyan cinsinden başlangıç açısı
    imageUri: "/venusTexture.jpg",
  },
  {
    name: "Earth",
    scaledDistance: 65.25,
    scaledRadius: 1.9017,
    orbitalAngularSpeed: 0.0766,
    rotationSpeed: 0.02,
    initialAngle: 5,
    imageUri: "/earthTexture.jpg",
  },
  {
    name: "Mars",
    scaledDistance: 70.74,
    scaledRadius: 1.7651,
    orbitalAngularSpeed: 0.0707,
    rotationSpeed: 0.018,
    initialAngle: 1,
    imageUri: "/marsTexture.jpg",
  },
  {
    name: "Jupiter",
    scaledDistance: 86.73,
    scaledRadius: 2.422,
    orbitalAngularSpeed: 0.0576,
    rotationSpeed: 0.04,
    initialAngle: 9,
    imageUri: "/jupiterTexture.jpg",
  },
  {
    name: "Saturn",
    scaledDistance: 94.68,
    scaledRadius: 2.3824,
    orbitalAngularSpeed: 0.0528,
    rotationSpeed: 0.038,
    initialAngle: 2,
    imageUri: "/saturnTexture.jpg",
  },
  {
    name: "Uranus",
    scaledDistance: 103.74,
    scaledRadius: 2.2018,
    orbitalAngularSpeed: 0.0482,
    rotationSpeed: 0.03,
    initialAngle: 4,
    imageUri: "/uranusTexture.jpg",
  },
  {
    name: "Neptune",
    scaledDistance: 109.59,
    scaledRadius: 2.1957,
    orbitalAngularSpeed: 0.0456,
    rotationSpeed: 0.032,
    initialAngle: 6,
    imageUri: "/neptuneTexture.jpg",
  },
];
