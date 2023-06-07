// infinity loop
const animationIcon = ['|   ', '/   ', '-   ', '\\   '];

function spinner(index) {
  // animation using modulo operator 
  let chosenIcon =  animationIcon[index % animationIcon.length];
  process.stdout.write(`\r${chosenIcon}      `);

  setTimeout(() => {
    spinner(index + 1)
  }, 200);
}

spinner(0);