import express, { ErrorRequestHandler, RequestHandler } from 'express';
import passport from 'passport';
import session from 'express-session';
import cookieParser from 'cookie-parser';

const app = express();

declare global {
  namespace Express {
    interface Request {
      isAwesomeminHandsome: boolean;
    }
  }
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', express.static('./public'));
app.use(cookieParser());
app.use(
  session({
    secret: 'SECRET',
  })
);
app.use(passport.initialize());
app.use(passport.session());

const middleware: RequestHandler<
  { paramType: string },
  { message: string },
  { bodyType: number },
  { queryType: boolean },
  { localType: unknown }
> = (req, res, next) => {
  req.params.paramType;
  res.json({
    message: 'ok',
  });
  req.body.bodyType;
  req.query.queryType;
  res.locals.localType;
  req.isAwesomeminHandsome;

  req.user?.seongmin;
};

app.get('/', middleware);

// declare global {
//   interface Error {
//     status: number;
//   }
// }

const errorMiddleware: ErrorRequestHandler = (err: Error, req, res, next) => {
  console.log(err.status);
};

app.use(errorMiddleware);

app.listen(8080, () => {});
