let brr=[]
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    for(let i=0;i<input.length;i++)
    {
        brr.push(input[i].trim().split(" ").map(Number))
    }
    sudoku(brr)
  }

  function sudoku(brr,row=0,col=0)
  {
      if(row==brr.length)
      {
          brr.forEach((ele)=>{
              console.log(ele.join(" "))
          })
          return
      }
      let cur_row=row;
      let cur_col=col;

      if(col==brr.length-1)
      {
          cur_col=0;
          cur_row=row+1
      }
      else
      {
          cur_col=col+1;
          cur_row=row
      }

      if(brr[row][col]!=0)
      {
        sudoku(brr,cur_row,cur_col)
      }
      else
      {
          for(let i=1;i<=brr.length;i++)
          {
              if(condition(brr,row,col,i)==true)
              {
                  brr[row][col]=i;
                  sudoku(brr,cur_row,cur_col)
                  brr[row][col]=0;
              }
          }
          return
      }
      
  }

  function condition(brr,row,col,k)
  {
      //check vertical
      for(let i=0;i<brr.length;i++)
      {
          if(brr[row][i]==k)
          {
              return false
          }
      }
      //check horizonatl
      for(let i=0;i<brr.length;i++)
      {
          if(brr[i][col]==k)
          {
              return false
          }
      }
      //check grid

      let x=(Math.floor(row/3)*3)
      let y=(Math.floor(col/3)*3)

      for(let i=0;i<3;i++)
      {
          for(let j=0;j<3;j++)
          {
              if(brr[x+i][y+j]==k)
              {
                  return false
              }
          }
      }

      return true;
  }
  if (process.env.USERNAME=== "91789") {
    runProgram(`0 4 0 0 0 0 1 7 9 
    0 0 2 0 0 8 0 5 4 
    0 0 6 0 0 5 0 0 8 
    0 8 0 0 7 0 9 1 0 
    0 5 0 0 9 0 0 3 0 
    0 1 9 0 6 0 0 4 0 
    3 0 0 4 0 0 7 0 0 
    5 7 0 1 0 0 2 0 0 
    9 2 8 0 0 0 0 6 0`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }
