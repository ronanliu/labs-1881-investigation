const addToZone = id => ({
  type: "ADD_TO_ZONE",
  payload: { id }
});

const removeFromZone = id => ({
  type: "REMOVE_FROM_ZONE",
  payload: { id }
});

const swapFields = (sourceIndex, targetIndex) => ({
  type: "SWAP_FIELDS",
  payload: { sourceIndex, targetIndex }
});

export { addToZone, removeFromZone, swapFields };
