import express from 'express';
import health from './health';
import movements from './movements';

const router = express.Router();

export default (): express.Router => {
  health(router);
  movements(router);
  return router;
};