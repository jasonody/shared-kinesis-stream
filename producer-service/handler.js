const AWS = require('aws-sdk')
const uuid = require('uuid')

const kinesis = new AWS.Kinesis()

module.exports.producer = async (event, context) => {
  const streamEvent = {
    id: uuid.v1(),
    type: 'some-event',
    timestamp: Date.now(),
    item: { 
      id: uuid.v4(),
      some: 'data' 
    }
  }

  console.log('PRODUCER EVENT: %j', streamEvent)

  const params = {
    StreamName: process.env.STREAM_NAME,
    PartitionKey: streamEvent.item.id,
    Data: new Buffer.from(JSON.stringify(streamEvent)),
  }

  try {
    const result = await kinesis.putRecord(params).promise()
    console.log(result)

    return result
  } catch (error) {
    console.error('ERROR: %j', error)
  }
}