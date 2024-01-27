import { Router } from 'express'

import * as userController from '../controller/userController.js'

const router  = Router();

router.route('/test').get(userController.test);
router.route('/signUp').post(userController.SingUp);
router.route('/login').put(userController.Login);


export default router;