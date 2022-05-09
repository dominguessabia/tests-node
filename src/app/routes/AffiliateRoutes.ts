import { Router } from "express";
import AffiliateController from "../controllers/AffiliateController";

const router = Router();

// Rotas
router.get('/index', AffiliateController.index);
router.post('/register', AffiliateController.create);


export default router;
