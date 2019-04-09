// [0,0] = [0,1] = [0,2]
// [1,0] = [1,1] = [1,2]
// [2,0] = [2,1] = [2,2]
export const rowCrossed = grid => {
  if (grid[0][0] && grid[0][0] === grid[0][1] && grid[0][0] === grid[0][2]) {
    return grid[0][0];
  } else if (
    grid[1][0] &&
    grid[1][0] === grid[1][1] &&
    grid[1][0] === grid[1][2]
  ) {
    return grid[1][0];;
  } else if (
    grid[2][0] &&
    grid[2][0] === grid[2][1] &&
    grid[2][0] === grid[2][2]
  ) {
    return grid[2][0];
  } else {
    return false;
  }
};

//[0,0] == [1,0] == [2,0]
//[0,1] == [1,1] == [2,1]
//[0,2] == [1,2] == [2,2]

export const columnCrossed = grid => {
  if (grid[0][0] && grid[0][0] === grid[1][0] && grid[0][0] === grid[2][0]) {
    return grid[0][0];
  } else if (
    grid[0][1] &&
    grid[0][1] === grid[1][1] &&
    grid[0][1] === grid[2][1]
  ) {
    return grid[0][1];
  } else if (
    grid[0][2] &&
    grid[0][2] === grid[1][2] &&
    grid[1][2] === grid[2][2]
  ) {
    return grid[0][2];
  } else {
    return null;
  }
};