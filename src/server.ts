import express from "express";
import morgan from 'morgan';
import helmet from 'helmet';
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';

import postRoutes from './routes/postRoutes'

class Server {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
  }

  config() {

   const MONGO_URI='mongodb+srv://sealvarezl:2751957@cluster0-ti8mc.gcp.mongodb.net/test?retryWrites=true';

   mongoose.set('useFindAndModify',true);

   mongoose.connect(MONGO_URI,{
      useNewUrlParser:true,
      useCreateIndex:true
   }).then(db=>{console.log('DB is connect')});

     //setting
    this.app.set("port", 3000);
    //midelware
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(helmet());
    this.routes();
  }

  routes() {
    this.app.use(indexRoutes);
    this.app.use('/api/post',postRoutes);
  }

  start() {
    this.app.listen(this.app.get("port"));
    console.log(`server en puerto ${this.app.get("port")}`);
  }
}

const server=new Server();
server.start();
