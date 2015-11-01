/** Export Storm client constants */
module.exports = {
  CHANGE_ROOM_NAME: 'CHANGE_ROOM_NAME',
  CHANGE_ROOM_DESCRIPTION: 'CHANGE_ROOM_DESCRIPTION',
  TIMER_COUNTDOWN: 'TIMER_COUNTDOWN',
  TIMER_PAUSE: 'TIMER_PAUSE',
  // Idea constants
  IDEA_CREATE: 'IDEA_CREATE',
  // Collection Constants
  COLLECTION_CREATE: 'COLLECTION_CREATE',
  REMOVE_COLLECTION: 'REMOVE_COLLECTION',
  SEPARATE_IDEAS: 'SEPARATE_IDEAS',
  GROUP_IDEAS: 'GROUP_IDEAS',
  // Misc Constants
  MOVE_COLLECTION: 'MOVE_COLLECTION',
  ADD_COLLECTIONS: 'ADD_COLLECTIONS',
  SET_LAYOUT_SIZE: 'SET_LAYOUT_SIZE',
  STORE_RESULTS: 'STORE_RESULTS',
  SELECT_TAB: 'SELECT_TAB',
  HIDE_IDEAS: 'HIDE_IDEAS',
  STORE_WORKSPACE: 'STORE_WORKSPACE',
  STORE_MOVED_IDEA: 'STORE_MOVED_IDEA',
  // Server URL constants
  SERVER_URL_DEV: 'http://storm-server-will.herokuapp.com',// 'http://storm-server-stage.herokuapp.com',
  SERVER_URL_PROD: 'http://storm-server-prod.herokuapp.com',
  API_VERSION: '/v1',
  TEST_BOARD: 'VJVdwO1Gx', // '4kc-P_1zl',
  TEST_BOARD_2: 'VJVdwO1Gx',
  // Server requests
  GET_IDEAS: 'GET_IDEAS',
  GET_COLLECTIONS: 'GET_COLLECTIONS',
  // Socket responses
  UPDATED_IDEAS: 'UPDATED_IDEAS',
  // Collection responses
  RECIEVED_COLLECTIONS: 'RECIEVED_COLLECTIONS',
  REMOVED_COLLECTION: 'REMOVED_COLLECTION',
  MODIFIED_COLLECTION: 'MODIFIED_COLLECTION',
  ADDED_COLLECTION: 'ADDED_COLLECTION',
};
