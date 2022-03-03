// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;
//const date = require('date-and-time')

//const Neows = require('NeoWs');
//const app = new Neows.App({apikey: 'pmn28bi0NkYUw1E8kl8jLS7830wC1j0DPEVBNIud'});

const https = require('https');
//const [startDate, setStartDate] = useState(new Date());
//const [endDate, setEndDate] = useState(new Date());

//let url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=$api_key=${API_KEY}"   

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */

 const nasa_api_key = process.env.API_KEY; //secretly stored the API key
exports.lambdaHandler = async (event) => {
    let dataString = '';
    const response = await new Promise((resolve, reject) => {
        const req = https.get("https://api.nasa.gov/neo/rest/v1/feed?api_key=${nasa_api_key}", function(res) {
        res.on('data', chunk => {
            dataString += chunk;
        });
        res.on('end', () => {
            resolve({
                statusCode: 200,
                body: JSON.stringify(JSON.parse(dataString), null, 4)
            });
        });
        });
        
        req.on('error', (e) => {
        reject({
            statusCode: 500,
            body: 'Something went wrong!'
        });
        });
    });
    
    return response;
};
