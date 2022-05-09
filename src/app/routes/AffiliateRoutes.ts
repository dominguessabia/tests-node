import { Router } from "express";
import AffiliateController from "../controllers/AffiliateController";

const router = Router();

// Rotas
router.get('/index', AffiliateController.index);
router.get('/verify', AffiliateController.verifyPerson);
router.get('/converted', AffiliateController.converted);
router.post('/register', AffiliateController.create);


export default router;
