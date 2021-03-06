

import {Request, Response, Router} from "express";
const router:Router = Router();


router.get('/',(req:Request, res:Response) => {
    res.send("<h1>Welcome to Mean Stack programming at Expertzlab</h1>")
})


router.get('/calc/:a/:b',(req:Request, res:Response) => {

    let {a,b}= req.params;

    let sum:number = 0;
    sum = sum + parseInt(a) + parseInt(b);
    res.send(`<h1>${a}+${b}= ${sum}</h1>`)
})

interface IRequest extends Request{
    a:number, b:number
}

router.post('/sum',(req: IRequest, res:Response) =>{

    res.send("sum ="+req.a+ req.b)
})

export const Calculater:Router = router


