const { getRoomUsers } = require("./users");

const rooms = [];

// Create Room
function createRoom(name, password) {
  const room = {
    name,
    password,
  };
  rooms.push(room);
  console.log(`creating Room ${(name, password)}`);
  return room;
}

// Check Room Password
function checkPassword(name, password) {
  const index = rooms.find((room) => room.name === name);
  return rooms[index].password === password ? true : false;
}

//
function destroyRoomIfEmpty(name) {
  const users = getRoomUsers(name);
  if (users.length == 0) {
    const index = rooms.findIndex((room) => room.name === name);

    if (index !== -1) {
      return rooms.splice(index, 1)[0];
    }
  }
}

module.exports = {
  createRoom,
  checkPassword,
  destroyRoomIfEmpty,
};
