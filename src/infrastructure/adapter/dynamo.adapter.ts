import {DynamoDB} from "aws-sdk"
import {isString} from "util";

export class DynamoAdapter {

    tableName = null;
    client = null;

    async getClient(): Promise<DynamoDB.DocumentClient> {
        if (this.client  !== null) {
            return this.client;
        }

        return await this.createClient();
    }

    private async createClient(): Promise<DynamoDB.DocumentClient>{
        const options = {
            region: 'us-east-1'
        };
        return new DynamoDB.DocumentClient(options);
    }

    private getTableName(): Promise<string> {
        if (!isString(this.tableName)) {
            console.log('NO ES UN STRING');
        }
        return this.tableName;
    }

    public async save(data): Promise<any> {
        const params = {
            TableName: this.getTableName(),
            Item: data,
        };

        this.client = await this.getClient();

        return await this.client.put(params)
            .promise()
            .then(data => data.Attributes)
            .catch(console.error);
    }

    public async get(items: string): Promise<any> {
        this.client = await this.getClient();

        const params = {
            TableName: this.getTableName(),
            ProjectionExpression: items,
            Key: {}

        };

        const result: any = await this.client.get(params).promise();

        console.log('-----result-----', result);

        return JSON.stringify(result.Items)
    }
}
