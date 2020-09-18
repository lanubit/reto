import type { Serverless } from 'serverless/aws';

const serverlessConfiguration: Serverless = {
  service: {
    name: 'reto',
    // app and org for use with dashboard.serverless.com
    // app: your-app-name,
    // org: your-org-name,
  },
  frameworkVersion: '1',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  // Add the serverless-webpack plugin
  plugins: [
      'serverless-webpack',
      'serverless-offline'
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    region: 'us-east-1',
    stage: 'dev',
    apiGateway: {
      minimumCompressionSize: 128,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      VEHICLE_TABLE: "vehicle-${self:service}-${opt:stage, self:provider.stage}"
    },
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: [
          'dynamodb:GetItem',
          'dynamodb:PutItem',
        ],
        Resource: '*'
      }
    ]
  },
  functions: {
    hello: {
      handler: 'src/interface/handler/handler.hello',
      events: [
        {
          http: {
            method: 'get',
            path: 'hello',
          }
        }
      ]
    },
    saveVehicle: {
      handler: 'src/interface/handler/vehicle.create',
      events: [
        {
          http: {
            method: 'post',
            path: 'vehicles',
          }
        }
      ]
    }
  },
  resources: {
    Resources: {
      VehiclesDynamoDbTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
          TableName: "${self:provider.environment.VEHICLE_TABLE}",
          AttributeDefinitions: [
            {AttributeName: "id", AttributeType: "S"},
          ],
          KeySchema: [
            {AttributeName: "id", KeyType: "HASH"},
          ],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1
          }
        }
      }
    }
  }
}

module.exports = serverlessConfiguration;
