require('dotenv').config();
import app from './app';

app()
  .then(app => {
    const port = process.env.PORT || 4731;
    app.listen(port);
    console.log(`Server started on port ${port} at ${new Date()}`);
    return true;
  })
  .catch((error: any) => {
    console.log(`Application exited with error`, error);
  });
