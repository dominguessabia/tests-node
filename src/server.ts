import express, { Router } from 'express';
import cors from 'cors';

import AffiliateRoutes from './app/routes/AffiliateRoutes';

class App {
  public express: express.Application;

  public constructor ()
  {
    this.express = express();
    this.configInitial();
    this.routes();
  }

  private configInitial(): void 
  {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.listen(3000);
  }

  private routes(): void 
  {
    this.express.use("/affiliate", AffiliateRoutes);
  }
}

export default new App().express
