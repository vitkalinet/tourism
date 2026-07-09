const { spawn } = require('child_process');

console.log('Installing dependencies...\n');

const npm = spawn('npm', ['install'], {
  shell: true,
  stdio: 'inherit'
});

npm.on('close', (code) => {
  if (code === 0) {
    console.log('\n✅ Dependencies installed successfully!');
    console.log('Now run: npm run dev');
  } else {
    console.log(`\n❌ Installation failed with code ${code}`);
  }
});
