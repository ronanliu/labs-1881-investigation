const testApp = () => ({
  type: "TEST"
});

const addToZone = id => ({
  type: "ADD_TO_ZONE",
  payload: { id }
});

export { testApp, addToZone };
