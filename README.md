# shared-kinesis-stream

Sharing an AWS Kinesis stream across multiple Serverless stacks

## Stacks
- Core: Creates a Kinesis stream that will be shared across multiple stacks
- Producer Service: A single lambda that publishes to the shared Kinesis stream
- Consumer Service: A single lambda that consumes from the shared Kinesis stream

The Core stack exports the `name` and `arn` for the shared Kinesis stream using CloudFormation cross-stack references. These are referenced by the consumer and producer services.


## Steps
1. Execute: `npm run install`
2. Execute: `npm run deploy`
3. Exectue: `npm run create-event`
4. In the AWS console review the following:
   - Producer Lambda logs:
     - Verify that the event was published
   - Consumer Lambda logs:
     - Verify that the event was received
5. Execute: `npm run remove`