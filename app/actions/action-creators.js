// Action Naming and Action Creating Goes Here;

const GET_EVERYTHING = "GET_EVERYTHING";
const GET_ONE_THING = "GET_ONE_THING";

function getEverything(everything) {
  return {
    type: GET_EVERYTHING,
    payload: everything
  }
};

function getEverything(oneThing) {
  return {
    type: GET_ONE_THING,
    payload: oneThing
  }
};
