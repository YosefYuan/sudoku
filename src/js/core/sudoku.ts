// 生成数独游戏

// 1.生成完成的解决方案： Generator
// 2.随机去除部分数据： 按比例

import Generator from "./generator";

export class Sudoku {
  solutionMatrix: number[][];
  puzzleMatrix: number[][];

  constructor() {
    //  生成完成的结局方案
    const generator = new Generator();
    generator.generate();
    this.solutionMatrix = generator.matrix;
  }

  make(level:number = 5) {
    //  const shouldRid = Math.random() * 9 <level;
    //  生产迷盘
    this.puzzleMatrix = this.solutionMatrix.map(row => {
      return row.map(cell => Math.random() * 9 < level ? 0 : cell);
    });
  }
}

export default Sudoku;