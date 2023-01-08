const app = require('./app');

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Backend is listening on PORT ${PORT}`);
});
