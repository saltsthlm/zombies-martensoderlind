import { ok } from "node:assert/strict";
import { test } from "node:test";

const createRoom = (capacity: number) => {
  const _capacity = capacity;
  const _numberOfZombies: string[]=[];
  
  return {
    isFull: () => _capacity === _numberOfZombies.length,
    addZombie: ()=>{
      if(_capacity===0){
        return;
      };
      if(_capacity ===_numberOfZombies.length){
        _numberOfZombies.shift();
      };
      _numberOfZombies.push("Zombie");
    }, 
  };
};

test("room is full", () => {
  const room = createRoom(0);

  const result = room.isFull();

  ok(result);
});

test("empty room that fits one zombie is not full", () => {
  const room = createRoom(1);

  const result = room.isFull();
  ok(!result);
});

test("empty room cannot fit any zombies", () => {
  const room = createRoom(0)
  room.addZombie();
  const result = room.isFull();
  ok(result);
});

test("one-roomer becomes full when a zombie is added", () => {
  const room = createRoom(1)
  room.addZombie();
  const result = room.isFull();
  ok(result);
});

test("two-roomer is not full when a zombie is added", () => {
 const room = createRoom(2);
 room.addZombie();
 const result = room.isFull();
 ok(!result);
});

test.skip("second zombie consumes first zombie when added to a one-roomer", () => {});

// You are free to add more tests that you think are relevant!
