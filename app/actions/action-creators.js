// Action Naming and Action Creating Goes Here;

export const GET_EVERYTHING = "GET_EVERYTHING";
export const GET_ONE_THING = "GET_ONE_THING";

export const getEverything = function(everything) {
  return {
    type: GET_EVERYTHING,
    payload: everything
  }
};

export const getOneThing = function(oneThing) {
  return {
    type: GET_ONE_THING,
    payload: oneThing
  }
};
