const io = require('@pm2/io')
const app = require('express')()

new class MyApp extends io.Entrypoint {
    // This is the very first method called on startup
    onStart (cb) {
        const http = require('http').Server(app)

        app.get('/', (req, res) => {
            this.reqMeter.mark()
            res.send('Hello From Entrypoint.js')
        });

        this.server = app.listen(console.log);
        cb(null);
    }

    // This is the very last method called on exit || uncaught exception
    onStop (err, cb, code, signal) {
        console.log(`App has exited with code ${code}`)
    }

    // Here we declare some process metrics
    sensors () {
        this.reqMeter = this.io.meter('req/min')
    }

    // Here are some actions to interact with the app in live
    actuators () {
        this.io.action('getEnv', (reply) => {
            reply({ server: this.server })
        })
    }
}