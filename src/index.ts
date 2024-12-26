import { app } from './server';
import pc from 'picocolors';
const port = parseInt(process.env.PORT || '3000');

app.listen(port, () => {
  console.log(pc.green('[Server]: ' + pc.italic(`Listening on port ${port}`)));
});
