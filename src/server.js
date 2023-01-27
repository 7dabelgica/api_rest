import app from './app';

const port = process.env.APP_PORT;
const ip = '52.67.209.28';

app.listen(port, () => {
  console.log(`Porta ${port} OK - http://${ip}`);
});
