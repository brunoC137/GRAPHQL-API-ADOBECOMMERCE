// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-east-1'});
// Create S3 service object
const S3 = new AWS.S3({apiVersion: '2006-03-01'});
// Create the parameters for calling createBucket
var bucketParams = {
  Bucket : process.argv[2],
  ACL : 'public-read'
};
'use strict'
//const S3 = new AWS.S3()
const bucketName = bucketParams.Bucket
;(async () => {
  try {
    const data = await S3.headBucket({ Bucket: bucketName }).promise()
    console.log(`Bucket "${bucketName}" exists`)
    return `Bucket "${bucketName}" exists`
  }
  catch (err) {
    if (err.statusCode >= 400 && err.statusCode < 500) {
        console.log(`Bucket "${bucketName}" not found`)
        S3.createBucket(bucketParams, function(err, data) {
            if (err) {
              console.log("Error", err);
            } else {
              console.log("Success", data.Location);
            }
          });
        return `Bucket "${bucketName}" not found`
      }
      throw err
  }
})()
