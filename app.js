import Koa from 'koa'
import wechat from 'co-wechat'
const config = {
    token: 'newstt',
    appid: 'wx80ec653140ff0376',
    encodingAESKey: ''
}
const app = new Koa();

app.use(wechat(config).middleware(async (msg, ctx) => {

    console.log(msg);

}))

app.listen(80);