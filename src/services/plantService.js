// src/services/plantService.js
import mockPlants from './mockData';

const getPlants = async () => {
  // Simulate a delay like an actual API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockPlants), 1000);
  });
};

const addPlant = async (plant) => {
  // Simulate adding a plant
  return new Promise((resolve) => {
    setTimeout(() => {
      mockPlants.push({ ...plant, id: mockPlants.length + 1 });
      resolve();
    }, 1000);
  });
};

export default {
  getPlants,
  addPlant,
};
