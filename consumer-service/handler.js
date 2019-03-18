const _ = require('highland')

module.exports.consumer = async (event, context) => {
  await _(event.Records)
    .map(r => JSON.parse(new Buffer.from(r.kinesis.data, 'base64')))
    .tap(r => console.log('%j', r))
    .collect()
    .toPromise(Promise)
}