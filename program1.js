const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  const dfs = (x, y) => {
      if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === 'W') return;
      grid[x][y] = 'W';  
      dfs(x + 1, y);     
      dfs(x - 1, y);     
      dfs(x, y + 1);     
      dfs(x, y - 1);     
  };

  let islands = 0;

  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === 'L') {
              islands++;
              dfs(i, j); 
          }
      }
  }

  return islands;
};

module.exports = getTotalIsles;
